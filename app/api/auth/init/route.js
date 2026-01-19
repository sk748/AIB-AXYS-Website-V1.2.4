import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';
import { hashPassword } from '@/lib/auth';

/**
 * Initialize admin account
 * This endpoint creates the initial admin if it doesn't exist
 */
export async function POST(request) {
  try {
    await connectDB();

    const { email, password } = await request.json();

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: email.toLowerCase() });

    if (existingAdmin) {
      return NextResponse.json(
        { error: 'Admin already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create admin
    const admin = await Admin.create({
      email: email.toLowerCase(),
      password: hashedPassword,
      name: 'Admin',
      role: 'super-admin',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Admin created successfully',
        admin: {
          id: admin._id,
          email: admin.email,
          name: admin.name,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Init admin error:', error);
    return NextResponse.json(
      { error: 'Failed to create admin' },
      { status: 500 }
    );
  }
}
