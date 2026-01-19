'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Calendar, Link as LinkIcon, Save } from 'lucide-react';

export default function AdminIPOSettingsPage() {
  const router = useRouter();
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    targetDate: '',
    applyNowLink: '',
    isActive: true,
  });

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch('/api/admin/ipo-settings');
      
      if (response.status === 401) {
        router.push('/admin/login');
        return;
      }

      const data = await response.json();
      setSettings(data.settings);
      
      // Format date for input
      const targetDate = new Date(data.settings.targetDate);
      const formattedDate = targetDate.toISOString().slice(0, 16);
      
      setFormData({
        name: data.settings.name,
        targetDate: formattedDate,
        applyNowLink: data.settings.applyNowLink,
        isActive: data.settings.isActive,
      });
    } catch (error) {
      console.error('Error fetching settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await fetch('/api/admin/ipo-settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          targetDate: new Date(formData.targetDate).toISOString(),
        }),
      });

      if (response.ok) {
        alert('Settings saved successfully!');
        fetchSettings();
      } else {
        alert('Failed to save settings');
      }
    } catch (error) {
      console.error('Save error:', error);
      alert('Failed to save settings');
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
              <h1 className="text-2xl font-bold text-gray-900">IPO Settings</h1>
              <p className="text-sm text-gray-500">Manage IPO countdown timer and links</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-8">
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="w-8 h-8 text-[#0017bf]" />
            <h2 className="text-2xl font-bold">IPO Configuration</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                IPO Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0017bf]"
                placeholder="KPC IPO"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Countdown Target Date & Time *
              </label>
              <input
                type="datetime-local"
                value={formData.targetDate}
                onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0017bf]"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Current: {new Date(formData.targetDate).toLocaleString('en-US', { timeZone: 'Africa/Nairobi' })} EAT
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Apply Now Link *
              </label>
              <input
                type="url"
                value={formData.applyNowLink}
                onChange={(e) => setFormData({ ...formData, applyNowLink: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0017bf]"
                placeholder="https://kpcipo.e-offer.app/"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="isActive"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                className="w-4 h-4 text-[#0017bf] border-gray-300 rounded focus:ring-[#0017bf]"
              />
              <label htmlFor="isActive" className="ml-2 text-sm text-gray-700">
                Show IPO countdown on website
              </label>
            </div>

            <div className="pt-4 border-t">
              <button
                type="submit"
                disabled={saving}
                className="w-full py-3 bg-[#0017bf] text-white rounded-lg font-semibold hover:bg-[#0017bf]/90 transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                <Save className="w-5 h-5" />
                <span>{saving ? 'Saving...' : 'Save Settings'}</span>
              </button>
            </div>
          </form>

          {/* Preview */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-sm text-blue-900 mb-2">Preview</h3>
            <div className="text-sm text-blue-700">
              <p><strong>IPO Name:</strong> {formData.name}</p>
              <p><strong>Closing:</strong> {new Date(formData.targetDate).toLocaleString()}</p>
              <p><strong>Apply Link:</strong> <a href={formData.applyNowLink} target="_blank" className="underline">{formData.applyNowLink}</a></p>
              <p><strong>Status:</strong> {formData.isActive ? 'Active ✅' : 'Hidden ❌'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
