import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import PageSettings from '@/models/PageSettings';
import { verifyAdminRequest } from '@/lib/auth';

// GET - Fetch all page settings
export async function GET(request) {
  try {
    await connectDB();

    const pages = [
      { pageName: 'home', label: 'Home', path: '/' },
      { pageName: 'about', label: 'About', path: '/about' },
      { pageName: 'group', label: 'Group', path: '/group' },
      { pageName: 'platforms', label: 'Platforms', path: '/platforms' },
      { pageName: 'services', label: 'Services', path: '/services' },
      { pageName: 'research', label: 'Research', path: '/research' },
      { pageName: 'ipo', label: 'IPO', path: '/ipo' },
      { pageName: 'leverage', label: 'Leverage', path: '/leverage' },
      { pageName: 'faq', label: 'FAQ', path: '/faq' },
      { pageName: 'contact', label: 'Contact', path: '/contact' },
    ];

    let settings = await PageSettings.find();

    // Initialize if empty
    if (settings.length === 0) {
      const defaultSettings = pages.map(page => ({
        pageName: page.pageName,
        isVisible: true,
        showInNav: page.pageName !== 'research', // Research hidden by default
      }));

      settings = await PageSettings.insertMany(defaultSettings);
    }

    // Merge with page info
    const pageSettings = pages.map(page => {
      const setting = settings.find(s => s.pageName === page.pageName) || {
        isVisible: true,
        showInNav: page.pageName !== 'research',
      };
      return {
        ...page,
        ...setting.toObject?.() || setting,
      };
    });

    return NextResponse.json({ pages: pageSettings }, { status: 200 });
  } catch (error) {
    console.error('Get page settings error:', error);
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

// PUT - Update page visibility
export async function PUT(request) {
  try {
    const adminData = verifyAdminRequest(request);
    if (!adminData) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const { pageName, isVisible, showInNav } = await request.json();

    let setting = await PageSettings.findOne({ pageName });

    if (!setting) {
      setting = await PageSettings.create({ pageName, isVisible, showInNav });
    } else {
      if (isVisible !== undefined) setting.isVisible = isVisible;
      if (showInNav !== undefined) setting.showInNav = showInNav;
      await setting.save();
    }

    return NextResponse.json({ setting }, { status: 200 });
  } catch (error) {
    console.error('Update page settings error:', error);
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}
