'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Mail, 
  FileText, 
  Settings, 
  TrendingUp, 
  LogOut,
  Users,
  Eye,
  Clock,
  CheckCircle
} from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState(null);
  const [recentContacts, setRecentContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch('/api/admin/dashboard');
      
      if (response.status === 401) {
        router.push('/admin/login');
        return;
      }

      const data = await response.json();
      setStats(data.stats);
      setRecentContacts(data.recentContacts || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0017bf] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const statCards = [
    {
      title: 'Total Contacts',
      value: stats?.totalContacts || 0,
      icon: <Users className="w-6 h-6" />,
      color: 'bg-blue-500',
      link: '/admin/contacts',
    },
    {
      title: 'New Submissions',
      value: stats?.newContacts || 0,
      icon: <Mail className="w-6 h-6" />,
      color: 'bg-green-500',
      link: '/admin/contacts?status=new',
    },
    {
      title: 'IPO Applications',
      value: stats?.ipoApplications || 0,
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'bg-purple-500',
      link: '/admin/contacts?subject=kpc-ipo',
    },
    {
      title: 'Leverage Applications',
      value: stats?.leverageApplications || 0,
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'bg-orange-500',
      link: '/admin/contacts?subject=leverage',
    },
  ];

  const quickLinks = [
    {
      title: 'Contact Submissions',
      description: 'View and manage all form submissions',
      icon: <Mail className="w-8 h-8" />,
      href: '/admin/contacts',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Research Papers',
      description: 'Upload and manage research documents',
      icon: <FileText className="w-8 h-8" />,
      href: '/admin/research',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      title: 'IPO Settings',
      description: 'Manage IPO countdown and links',
      icon: <TrendingUp className="w-8 h-8" />,
      href: '/admin/ipo-settings',
      color: 'bg-green-50 text-green-600',
    },
    {
      title: 'Page Visibility',
      description: 'Show/hide pages from navigation',
      icon: <Eye className="w-8 h-8" />,
      href: '/admin/pages',
      color: 'bg-indigo-50 text-indigo-600',
    },
    {
      title: 'Email Settings',
      description: 'Configure Outlook email integration',
      icon: <Settings className="w-8 h-8" />,
      href: '/admin/settings',
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <LayoutDashboard className="w-8 h-8 text-[#0017bf]" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-500">AIB-AXYS Africa Management Portal</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" target="_blank" className="text-sm text-gray-600 hover:text-[#0017bf]">
                <Eye className="w-5 h-5 inline mr-1" />
                View Website
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <Link key={index} href={stat.link}>
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color} text-white`}>
                    {stat.icon}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                  <div className={`p-3 rounded-lg ${link.color} inline-block mb-4`}>
                    {link.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{link.title}</h3>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Submissions */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Recent Submissions</h2>
              <Link href="/admin/contacts" className="text-sm text-[#0017bf] hover:underline">
                View All
              </Link>
            </div>
          </div>
          <div className="divide-y">
            {recentContacts.length > 0 ? (
              recentContacts.map((contact) => (
                <div key={contact._id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          contact.status === 'new' ? 'bg-green-100 text-green-700' :
                          contact.status === 'read' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {contact.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{contact.email}</p>
                      <p className="text-sm text-gray-500">
                        Subject: {contact.subject.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                <Mail className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p>No submissions yet</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
