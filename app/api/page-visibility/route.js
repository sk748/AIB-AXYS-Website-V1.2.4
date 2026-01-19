import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import PageSettings from '@/models/PageSettings';

export async function GET() {
  try {
    await connectDB();

    const settings = await PageSettings.find();

    // Return as object for easy lookup
    const settingsMap = settings.reduce((acc, setting) => {
      acc[setting.pageName] = {
        isVisible: setting.isVisible,
        showInNav: setting.showInNav,
      };
      return acc;
    }, {});

    return NextResponse.json({ settings: settingsMap }, { status: 200 });
  } catch (error) {
    console.error('Get page visibility error:', error);
    return NextResponse.json({ settings: {} }, { status: 200 });
  }
}
