import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, hasCDSC, cdscNumber } = body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

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
    let emailContent = `
New Contact Form Submission

From: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subjectLabel}

Message:
${message}
`;

    // Add CDSC information if applicable
    if (subject === 'kpc-ipo' || subject === 'leverage') {
      emailContent += `\n\nCDSC Account: ${hasCDSC === 'yes' ? 'Yes' : 'No'}`;
      if (hasCDSC === 'yes' && cdscNumber) {
        emailContent += `\nCDSC Number: ${cdscNumber}`;
      }
    }

    // Log the email (in production, you would send this via an email service)
    console.log('Email to:', recipientEmail);
    console.log('Email content:', emailContent);

    // Here you would integrate with an email service like:
    // - Nodemailer
    // - SendGrid
    // - AWS SES
    // - Resend
    // - etc.

    // For now, we'll simulate success
    // TODO: Implement actual email sending

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully',
        recipient: recipientEmail,
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
