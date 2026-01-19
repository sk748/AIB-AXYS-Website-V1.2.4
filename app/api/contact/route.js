import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';
import EmailSettings from '@/models/EmailSettings';
import { sendEmail } from '@/lib/email';

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, phone, subject, message, hasCDSC, cdscNumber } = body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Save to database
    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
      hasCDSC: hasCDSC || '',
      cdscNumber: cdscNumber || '',
      status: 'new',
      emailSent: false,
    });

    console.log('✅ Contact saved to database:', contact._id);

    // Determine recipient email based on subject
    let recipientEmail = 'info@aib-axysafrica.com';
    if (subject === 'general') {
      recipientEmail = 'feedback@aib-axysafrica.com';
    }

    // Get subject label
    const subjectLabels = {
      'account-opening': 'Account Opening',
      'kpc-ipo': 'KPC IPO Application',
      'leverage': 'Apply for Leverage',
      'general': 'General Inquiries',
    };
    const subjectLabel = subjectLabels[subject] || subject;

    // Build email content
    let emailText = `
New Contact Form Submission from AIB-AXYS Website
${'='.repeat(50)}

From: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subjectLabel}

Message:
${message}
`;

    // Add CDSC information if applicable
    if (subject === 'kpc-ipo' || subject === 'leverage') {
      emailText += `\n${'='.repeat(50)}`;
      emailText += `\nCDSC Account: ${hasCDSC === 'yes' ? 'Yes' : 'No'}`;
      if (hasCDSC === 'yes' && cdscNumber) {
        emailText += `\nCDSC Number: ${cdscNumber}`;
      } else if (hasCDSC === 'no') {
        emailText += `\nNote: Client needs to create CDSC account first`;
      }
    }

    emailText += `\n\n${'='.repeat(50)}`;
    emailText += `\nSubmission ID: ${contact._id}`;
    emailText += `\nSubmitted: ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Nairobi' })} EAT`;

    // HTML version for better formatting
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #0017bf; color: white; padding: 20px; text-align: center; }
          .content { background: #f9f9f9; padding: 20px; margin: 20px 0; }
          .field { margin: 10px 0; }
          .label { font-weight: bold; color: #0017bf; }
          .value { margin-left: 10px; }
          .message-box { background: white; padding: 15px; margin: 15px 0; border-left: 4px solid #0017bf; }
          .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
          .id { background: #e3f2fd; padding: 10px; border-radius: 4px; font-family: monospace; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
            <p>AIB-AXYS Africa Website</p>
          </div>
          
          <div class="content">
            <div class="field">
              <span class="label">From:</span>
              <span class="value">${name}</span>
            </div>
            <div class="field">
              <span class="label">Email:</span>
              <span class="value"><a href="mailto:${email}">${email}</a></span>
            </div>
            <div class="field">
              <span class="label">Phone:</span>
              <span class="value"><a href="tel:${phone}">${phone}</a></span>
            </div>
            <div class="field">
              <span class="label">Subject:</span>
              <span class="value">${subjectLabel}</span>
            </div>
            
            ${(subject === 'kpc-ipo' || subject === 'leverage') ? `
              <div class="field">
                <span class="label">Has CDSC Account:</span>
                <span class="value">${hasCDSC === 'yes' ? 'Yes' : 'No'}</span>
              </div>
              ${hasCDSC === 'yes' && cdscNumber ? `
                <div class="field">
                  <span class="label">CDSC Number:</span>
                  <span class="value">${cdscNumber}</span>
                </div>
              ` : ''}
              ${hasCDSC === 'no' ? `
                <div class="field" style="color: #ff9800;">
                  <span class="label">Note:</span>
                  <span class="value">Client needs to create CDSC account first</span>
                </div>
              ` : ''}
            ` : ''}
            
            <div class="message-box">
              <div class="label">Message:</div>
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div class="id">
              <strong>Submission ID:</strong> ${contact._id}
            </div>
          </div>
          
          <div class="footer">
            <p>Submitted on ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Nairobi' })} EAT</p>
            <p>View in admin dashboard: <a href="${process.env.NEXT_PUBLIC_BASE_URL}/admin/contacts">Admin Panel</a></p>
            <p>AIB-AXYS Africa Limited | www.aib-axysafrica.com</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Try to send email (will work when email settings are configured)
    try {
      // Check if email is configured in database
      const emailSettings = await EmailSettings.findOne();
      
      if (emailSettings && emailSettings.isConfigured) {
        // Update email lib to use DB settings
        process.env.EMAIL_HOST = emailSettings.host;
        process.env.EMAIL_PORT = emailSettings.port.toString();
        process.env.EMAIL_USER = emailSettings.user;
        process.env.EMAIL_PASS = emailSettings.password;
        process.env.EMAIL_FROM = emailSettings.fromEmail;
        
        const emailResult = await sendEmail({
          to: recipientEmail,
          subject: `New ${subjectLabel} Inquiry - ${name}`,
          text: emailText,
          html: emailHtml,
        });

        if (emailResult.success) {
          // Update contact as email sent
          await Contact.findByIdAndUpdate(contact._id, { emailSent: true });
          console.log('✅ Email sent successfully');
        }
      } else {
        console.log('ℹ️ Email not configured. Submission saved to database only.');
      }
    } catch (emailError) {
      console.error('Email sending failed:', emailError.message);
      // Continue - message is already saved in database
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully',
        contactId: contact._id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
