'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, Calendar, Filter, Download, Trash2, Eye } from 'lucide-react';

export default function AdminContactsPage() {
  const router = useRouter();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ status: '', subject: '' });
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, [filter]);

  const fetchContacts = async () => {
    try {
      const params = new URLSearchParams();
      if (filter.status) params.append('status', filter.status);
      if (filter.subject) params.append('subject', filter.subject);

      const response = await fetch(`/api/admin/contacts?${params.toString()}`);
      
      if (response.status === 401) {
        router.push('/admin/login');
        return;
      }

      const data = await response.json();
      setContacts(data.contacts || []);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await fetch('/api/admin/contacts', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      fetchContacts();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const deleteContact = async (id) => {
    if (!confirm('Are you sure you want to delete this submission?')) return;
    
    try {
      await fetch(`/api/admin/contacts?id=${id}`, { method: 'DELETE' });
      fetchContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Subject', 'Message', 'CDSC', 'CDSC Number', 'Status', 'Date'];
    const rows = contacts.map(c => [
      c.name,
      c.email,
      c.phone,
      c.subject,
      c.message.replace(/,/g, ';'),
      c.hasCDSC,
      c.cdscNumber,
      c.status,
      new Date(c.createdAt).toLocaleDateString()
    ]);

    const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contacts-${Date.now()}.csv`;
    a.click();
  };

  const subjectLabels = {
    'account-opening': 'Account Opening',
    'kpc-ipo': 'KPC IPO Application',
    'leverage': 'Apply for Leverage',
    'general': 'General Inquiries',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/admin/dashboard">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Contact Submissions</h1>
                <p className="text-sm text-gray-500">{contacts.length} total submissions</p>
              </div>
            </div>
            <button
              onClick={exportToCSV}
              className="flex items-center space-x-2 px-4 py-2 bg-[#0017bf] text-white rounded-lg hover:bg-[#0017bf]/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filter.status}
              onChange={(e) => setFilter({ ...filter, status: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0017bf]"
            >
              <option value="">All Status</option>
              <option value="new">New</option>
              <option value="read">Read</option>
              <option value="responded">Responded</option>
            </select>
            <select
              value={filter.subject}
              onChange={(e) => setFilter({ ...filter, subject: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0017bf]"
            >
              <option value="">All Subjects</option>
              <option value="account-opening">Account Opening</option>
              <option value="kpc-ipo">KPC IPO</option>
              <option value="leverage">Leverage</option>
              <option value="general">General</option>
            </select>
          </div>
        </div>

        {/* Contacts Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {loading ? (
            <div className="p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0017bf] mx-auto"></div>
            </div>
          ) : contacts.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">CDSC</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {contacts.map((contact) => (
                    <tr key={contact._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{contact.name}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600">{contact.email}</div>
                        <div className="text-sm text-gray-500">{contact.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">
                          {subjectLabels[contact.subject]}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {contact.hasCDSC === 'yes' ? (
                          <div>
                            <div className="text-green-600">Yes</div>
                            <div className="text-gray-500">{contact.cdscNumber}</div>
                          </div>
                        ) : contact.hasCDSC === 'no' ? (
                          <span className="text-orange-600">No</span>
                        ) : (
                          <span className="text-gray-400">N/A</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={contact.status}
                          onChange={(e) => updateStatus(contact._id, e.target.value)}
                          className={`px-3 py-1 text-xs rounded-full border-0 ${
                            contact.status === 'new' ? 'bg-green-100 text-green-700' :
                            contact.status === 'read' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                          }`}
                        >
                          <option value="new">New</option>
                          <option value="read">Read</option>
                          <option value="responded">Responded</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => setSelectedContact(contact)}
                            className="text-blue-600 hover:text-blue-800"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteContact(contact._id)}
                            className="text-red-600 hover:text-red-800"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center text-gray-500">
              <Mail className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p>No contact submissions found</p>
            </div>
          )}
        </div>
      </div>

      {/* Contact Detail Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedContact(null)}>
          <div className="bg-white rounded-lg max-w-2xl w-full p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Submission Details</h2>
              <button onClick={() => setSelectedContact(null)} className="text-gray-400 hover:text-gray-600">
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-700">Name</label>
                <p className="text-gray-900">{selectedContact.name}</p>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Email</label>
                <p className="text-gray-900">{selectedContact.email}</p>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Phone</label>
                <p className="text-gray-900">{selectedContact.phone}</p>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Subject</label>
                <p className="text-gray-900">{subjectLabels[selectedContact.subject]}</p>
              </div>
              {selectedContact.hasCDSC && (
                <div>
                  <label className="text-sm font-semibold text-gray-700">CDSC Account</label>
                  <p className="text-gray-900">
                    {selectedContact.hasCDSC === 'yes' ? `Yes - ${selectedContact.cdscNumber}` : 'No'}
                  </p>
                </div>
              )}
              <div>
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <p className="text-gray-900 whitespace-pre-wrap">{selectedContact.message}</p>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Submitted</label>
                <p className="text-gray-900">{new Date(selectedContact.createdAt).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
