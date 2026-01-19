import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';
import Consent from '@/models/Consent';
import ResearchPaper from '@/models/ResearchPaper';
import { verifyAdminRequest } from '@/lib/auth';

// Export user data (GDPR)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    await connectDB();

    // Collect all user data
    const contacts = await Contact.find({ email }).select('-__v');
    const consents = await Consent.find({ email }).select('-__v');

    const userData = {
      email,
      exportDate: new Date().toISOString(),
      dataType: 'Personal Data Export (GDPR Article 15)',
      contactSubmissions: contacts,
      consentRecords: consents,
      note: 'This is all personal data we have stored for this email address.',
    };

    return NextResponse.json(userData, {
      status: 200,
      headers: {
        'Content-Disposition': `attachment; filename="user-data-${email}-${Date.now()}.json"`,
      },
    });
  } catch (error) {
    console.error('GDPR export error:', error);
    return NextResponse.json({ error: 'Export failed' }, { status: 500 });
  }
}

// Delete user data (Right to be Forgotten - GDPR)
export async function DELETE(request) {
  try {
    const adminData = verifyAdminRequest(request);
    if (!adminData) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    await connectDB();

    // Anonymize or delete all user data
    const contactsDeleted = await Contact.deleteMany({ email });
    const consentsDeleted = await Consent.deleteMany({ email });

    console.log(`🗑️ GDPR deletion for ${email}: ${contactsDeleted.deletedCount} contacts, ${consentsDeleted.deletedCount} consents`);

    return NextResponse.json(
      {
        success: true,
        message: 'User data deleted successfully',
        deleted: {
          contacts: contactsDeleted.deletedCount,
          consents: consentsDeleted.deletedCount,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('GDPR deletion error:', error);
    return NextResponse.json({ error: 'Deletion failed' }, { status: 500 });
  }
}
