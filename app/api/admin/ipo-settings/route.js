// Force dynamic rendering for admin routes
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import IPOSettings from '@/models/IPOSettings';
import { verifyAdminRequest } from '@/lib/auth';

// GET - Fetch IPO settings
export async function GET(request) {
  try {
    await connectDB();

    let settings = await IPOSettings.findOne();

    // Create default if doesn't exist
    if (!settings) {
      settings = await IPOSettings.create({
        name: 'KPC IPO',
        targetDate: new Date('2026-02-19T17:00:00'),
        applyNowLink: 'https://kpcipo.e-offer.app/',
        isActive: true,
      });
    }

    return NextResponse.json({ settings }, { status: 200 });
  } catch (error) {
    console.error('Get IPO settings error:', error);
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

// PUT - Update IPO settings
export async function PUT(request) {
  try {
    const adminData = verifyAdminRequest(request);
    if (!adminData) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const { name, targetDate, applyNowLink, isActive } = await request.json();

    let settings = await IPOSettings.findOne();

    if (!settings) {
      settings = await IPOSettings.create({
        name,
        targetDate,
        applyNowLink,
        isActive,
      });
    } else {
      settings.name = name || settings.name;
      settings.targetDate = targetDate || settings.targetDate;
      settings.applyNowLink = applyNowLink || settings.applyNowLink;
      if (isActive !== undefined) settings.isActive = isActive;
      await settings.save();
    }

    return NextResponse.json({ settings }, { status: 200 });
  } catch (error) {
    console.error('Update IPO settings error:', error);
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}
