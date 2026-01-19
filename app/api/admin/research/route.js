import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import ResearchPaper from '@/models/ResearchPaper';
import { verifyAdminRequest } from '@/lib/auth';

// GET - Fetch all research papers
export async function GET(request) {
  try {
    const adminData = verifyAdminRequest(request);
    if (!adminData) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const papers = await ResearchPaper.find().sort({ publishedDate: -1 });

    return NextResponse.json({ papers }, { status: 200 });
  } catch (error) {
    console.error('Get research papers error:', error);
    return NextResponse.json({ error: 'Failed to fetch papers' }, { status: 500 });
  }
}

// POST - Upload new research paper
export async function POST(request) {
  try {
    const adminData = verifyAdminRequest(request);
    if (!adminData) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const formData = await request.formData();
    const file = formData.get('file');
    const title = formData.get('title');
    const description = formData.get('description');
    const category = formData.get('category');
    const company = formData.get('company');
    const sector = formData.get('sector');
    const tags = formData.get('tags');

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Create upload directory
    const { mkdir, writeFile } = await import('fs/promises');
    const path = await import('path');
    const uploadDir = path.join(process.cwd(), 'public', 'research');
    await mkdir(uploadDir, { recursive: true });

    // Generate unique filename
    const timestamp = Date.now();
    const fileName = `${timestamp}-${file.name.replace(/\s/g, '-')}`;
    const filePath = path.join(uploadDir, fileName);

    // Save file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);

    // Create database entry
    const paper = await ResearchPaper.create({
      title,
      description,
      category,
      company: company || '',
      sector: sector || '',
      fileName: file.name,
      fileUrl: `/research/${fileName}`,
      fileSize: file.size,
      tags: tags ? tags.split(',').map(t => t.trim()) : [],
      publishedDate: new Date(),
    });

    console.log('✅ Research paper uploaded:', paper._id);

    return NextResponse.json({ paper }, { status: 201 });
  } catch (error) {
    console.error('Upload research paper error:', error);
    return NextResponse.json({ error: 'Failed to upload paper' }, { status: 500 });
  }
}

// PATCH - Update research paper
export async function PATCH(request) {
  try {
    const adminData = verifyAdminRequest(request);
    if (!adminData) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const { id, title, description, category, company, sector, tags } = await request.json();

    const updateData = {};
    if (title) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (category) updateData.category = category;
    if (company !== undefined) updateData.company = company;
    if (sector !== undefined) updateData.sector = sector;
    if (tags !== undefined) updateData.tags = tags.split(',').map(t => t.trim()).filter(t => t);

    const paper = await ResearchPaper.findByIdAndUpdate(id, updateData, { new: true });

    if (!paper) {
      return NextResponse.json({ error: 'Paper not found' }, { status: 404 });
    }

    console.log('✅ Research paper updated:', paper._id);

    return NextResponse.json({ paper }, { status: 200 });
  } catch (error) {
    console.error('Update research paper error:', error);
    return NextResponse.json({ error: 'Failed to update paper' }, { status: 500 });
  }
}

// DELETE - Delete research paper
export async function DELETE(request) {
  try {
    const adminData = verifyAdminRequest(request);
    if (!adminData) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    await ResearchPaper.findByIdAndDelete(id);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Delete research paper error:', error);
    return NextResponse.json({ error: 'Failed to delete paper' }, { status: 500 });
  }
}
