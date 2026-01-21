// Force dynamic rendering for admin routes
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';
import { verifyAdminRequest, hashPassword } from '@/lib/auth';

// GET - Fetch all admin users
export async function GET(request) {
  try {
    const adminData = verifyAdminRequest(request);
    if (!adminData) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Only super-admin can view users
    if (adminData.role !== 'super-admin') {
      return NextResponse.json({ error: 'Forbidden - Super admin only' }, { status: 403 });
    }

    await connectDB();

    const users = await Admin.find().select('-password').sort({ createdAt: -1 });

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error('Get users error:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

// POST - Create new admin user
export async function POST(request) {
  try {
    const adminData = verifyAdminRequest(request);
    if (!adminData) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Only super-admin can create users
    if (adminData.role !== 'super-admin') {
      return NextResponse.json({ error: 'Forbidden - Super admin only' }, { status: 403 });
    }

    await connectDB();

    const { email, password, name, role } = await request.json();

    // Validate
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json({ error: 'Password must be at least 6 characters' }, { status: 400 });
    }

    // Check if user exists
    const existing = await Admin.findOne({ email: email.toLowerCase() });
    if (existing) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await Admin.create({
      email: email.toLowerCase(),
      password: hashedPassword,
      name: name || 'Admin',
      role: role || 'admin',
    });

    return NextResponse.json(
      {
        success: true,
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create user error:', error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}

// DELETE - Remove admin user
export async function DELETE(request) {
  try {
    const adminData = verifyAdminRequest(request);
    if (!adminData) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Only super-admin can delete users
    if (adminData.role !== 'super-admin') {
      return NextResponse.json({ error: 'Forbidden - Super admin only' }, { status: 403 });
    }

    await connectDB();

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('id');

    // Prevent deleting yourself
    if (userId === adminData.id) {
      return NextResponse.json({ error: 'Cannot delete your own account' }, { status: 400 });
    }

    await Admin.findByIdAndDelete(userId);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Delete user error:', error);
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
}

// PATCH - Update admin user
export async function PATCH(request) {
  try {
    const adminData = verifyAdminRequest(request);
    if (!adminData) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const { userId, name, role, isActive, newPassword } = await request.json();

    // Only super-admin can change roles and status of others
    if (userId !== adminData.id && adminData.role !== 'super-admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const updateData = {};
    if (name) updateData.name = name;
    if (role && adminData.role === 'super-admin') updateData.role = role;
    if (isActive !== undefined && adminData.role === 'super-admin') updateData.isActive = isActive;
    
    // Handle password change
    if (newPassword) {
      if (newPassword.length < 6) {
        return NextResponse.json({ error: 'Password must be at least 6 characters' }, { status: 400 });
      }
      updateData.password = await hashPassword(newPassword);
    }

    const user = await Admin.findByIdAndUpdate(userId, updateData, { new: true }).select('-password');

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error('Update user error:', error);
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}
