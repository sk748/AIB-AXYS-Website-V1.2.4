import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import ResearchPaper from '@/models/ResearchPaper';

export async function GET() {
  try {
    await connectDB();

    const papers = await ResearchPaper.find({ isPublished: true })
      .sort({ publishedDate: -1 })
      .select('-__v');

    return NextResponse.json({ papers }, { status: 200 });
  } catch (error) {
    console.error('Get research papers error:', error);
    return NextResponse.json({ papers: [] }, { status: 200 });
  }
}
