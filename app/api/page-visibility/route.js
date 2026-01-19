import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import PageSettings from '@/models/PageSettings';

export async function GET() {
  try {
    await connectDB();

    const settings = await PageSettings.find();

    // If no settings exist, initialize them
    if (settings.length === 0) {
      const defaultPages = [
        { pageName: 'home', isVisible: true, showInNav: true },
        { pageName: 'about', isVisible: true, showInNav: true },
        { pageName: 'group', isVisible: true, showInNav: true },
        { pageName: 'platforms', isVisible: true, showInNav: true },
        { pageName: 'services', isVisible: true, showInNav: true },
        { pageName: 'research', isVisible: true, showInNav: false }, // Hidden by default
        { pageName: 'ipo', isVisible: true, showInNav: true },
        { pageName: 'leverage', isVisible: true, showInNav: true },
        { pageName: 'faq', isVisible: true, showInNav: true },
        { pageName: 'contact', isVisible: true, showInNav: true },
      ];

      const initialized = await PageSettings.insertMany(defaultPages);
      
      const settingsMap = initialized.reduce((acc, setting) => {
        acc[setting.pageName] = {
          isVisible: setting.isVisible,
          showInNav: setting.showInNav,
        };
        return acc;
      }, {});

      return NextResponse.json({ settings: settingsMap }, { status: 200 });
    }

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
