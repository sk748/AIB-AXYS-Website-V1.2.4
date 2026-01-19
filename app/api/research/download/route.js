import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import ResearchPaper from '@/models/ResearchPaper';

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      // Increment download count
      await ResearchPaper.findByIdAndUpdate(id, {
        $inc: { downloadCount: 1 },
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Download tracking error:', error);
    return NextResponse.json({ success: false }, { status: 200 });
  }
}
