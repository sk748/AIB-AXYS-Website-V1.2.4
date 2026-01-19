'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Eye, EyeOff, Save } from 'lucide-react';

export default function AdminPageVisibilityPage() {
  const router = useRouter();
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const response = await fetch('/api/admin/page-settings');
      
      if (response.status === 401) {
        router.push('/admin/login');
        return;
      }

      const data = await response.json();
      setPages(data.pages || []);
    } catch (error) {
      console.error('Error fetching pages:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleVisibility = async (pageName, field, currentValue) => {
    setSaving(true);
    try {
      const response = await fetch('/api/admin/page-settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pageName,
          [field]: !currentValue,
        }),
      });

      if (response.ok) {
        fetchPages();
      }
    } catch (error) {
      console.error('Update error:', error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0017bf]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/admin/dashboard">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Page Visibility</h1>
              <p className="text-sm text-gray-500">Control which pages are visible on the website</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b bg-blue-50">
            <div className="flex items-center space-x-3">
              <Eye className="w-6 h-6 text-blue-600" />
              <div>
                <h2 className="text-lg font-bold text-gray-900">Page Visibility Controls</h2>
                <p className="text-sm text-gray-600">Toggle page visibility and navigation display</p>
              </div>
            </div>
          </div>

          <div className="divide-y">
            {pages.map((page) => (
              <div key={page.pageName} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{page.label}</h3>
                    <p className="text-sm text-gray-500">{page.path}</p>
                  </div>
                  <div className="flex items-center space-x-6">
                    {/* Page Accessible Toggle */}
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-600">Page Accessible:</span>
                      <button
                        onClick={() => toggleVisibility(page.pageName, 'isVisible', page.isVisible)}
                        disabled={saving}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          page.isVisible ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            page.isVisible ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                      <span className={`text-xs font-medium ${
                        page.isVisible ? 'text-green-600' : 'text-gray-500'
                      }`}>
                        {page.isVisible ? 'Yes' : 'No'}
                      </span>
                    </div>

                    {/* Show in Navigation Toggle */}
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-600">Show in Nav:</span>
                      <button
                        onClick={() => toggleVisibility(page.pageName, 'showInNav', page.showInNav)}
                        disabled={saving}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          page.showInNav ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            page.showInNav ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                      <span className={`text-xs font-medium ${
                        page.showInNav ? 'text-blue-600' : 'text-gray-500'
                      }`}>
                        {page.showInNav ? 'Yes' : 'No'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gray-50 border-t">
            <div className="text-sm text-gray-600">
              <p><strong>Page Accessible:</strong> Determines if the page can be accessed via direct URL</p>
              <p><strong>Show in Nav:</strong> Determines if the page appears in the navigation menu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
