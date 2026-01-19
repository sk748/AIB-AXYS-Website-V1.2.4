'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Mail, 
  FileText, 
  Settings, 
  TrendingUp, 
  LogOut,
  Eye,
  User,
  Shield,
  Menu,
  X
} from 'lucide-react';
import Image from 'next/image';

export default function AdminNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [admin, setAdmin] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    fetchAdminInfo();
  }, []);

  const fetchAdminInfo = async () => {
    try {
      const response = await fetch('/api/auth/me');
      if (response.ok) {
        const data = await response.json();
        setAdmin(data.admin);
      }
    } catch (error) {
      console.error('Error fetching admin info:', error);
    }
  };

  const handleLogout = async () => {
    if (confirm('Are you sure you want to logout?')) {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
    }
  };

  const navLinks = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: 'Contacts', href: '/admin/contacts', icon: <Mail className="w-4 h-4" /> },
    { name: 'Research', href: '/admin/research', icon: <FileText className="w-4 h-4" /> },
    { name: 'IPO Settings', href: '/admin/ipo-settings', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'Pages', href: '/admin/pages', icon: <Eye className="w-4 h-4" /> },
    { name: 'Users', href: '/admin/users', icon: <Shield className="w-4 h-4" /> },
    { name: 'Settings', href: '/admin/settings', icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-4">
            <Link href="/admin/dashboard" className="flex items-center space-x-3">
              <Image
                src="/aib-axys-logo-light.svg"
                alt="AIB-AXYS Africa"
                width={140}
                height={40}
                className="h-8 w-auto"
              />
              <span className="text-sm font-semibold text-gray-500 border-l pl-3 hidden md:block">
                Admin Portal
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-[#0017bf] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}>
                  {link.icon}
                  <span>{link.name}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Side - User Info & Actions */}
          <div className="flex items-center space-x-4">
            {/* View Website */}
            <Link 
              href="/" 
              target="_blank"
              className="hidden md:flex items-center space-x-2 text-sm text-gray-600 hover:text-[#0017bf] transition-colors"
            >
              <Eye className="w-4 h-4" />
              <span>View Website</span>
            </Link>

            {/* User Info */}
            {admin && (
              <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 bg-gray-50 rounded-lg">
                <User className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">{admin.email}</span>
                {admin.role === 'super-admin' && (
                  <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">Super Admin</span>
                )}
              </div>
            )}

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="hidden md:flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'bg-[#0017bf] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}>
                    {link.icon}
                    <span>{link.name}</span>
                  </div>
                </Link>
              ))}
              
              {/* Mobile User Info */}
              {admin && (
                <div className="px-3 py-2 mt-2 border-t pt-3">
                  <div className="text-xs text-gray-500 mb-1">Logged in as:</div>
                  <div className="text-sm font-medium text-gray-900">{admin.email}</div>
                </div>
              )}
              
              {/* Mobile Logout */}
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
