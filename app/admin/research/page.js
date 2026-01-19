'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, FileText, Trash2, Download, Edit, Save, X, Search } from 'lucide-react';
import { nseCompanies, sectors } from '@/data/nseCompanies';

export default function AdminResearchPage() {
  const router = useRouter();
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [editingPaper, setEditingPaper] = useState(null);
  const [companySearch, setCompanySearch] = useState('');
  const [uploadForm, setUploadForm] = useState({
    title: '',
    description: '',
    category: 'market-analysis',
    company: '',
    sector: '',
    tags: '',
  });

  useEffect(() => {
    fetchPapers();
  }, []);

  const fetchPapers = async () => {
    try {
      const response = await fetch('/api/admin/research');
      
      if (response.status === 401) {
        router.push('/admin/login');
        return;
      }

      const data = await response.json();
      setPapers(data.papers || []);
    } catch (error) {
      console.error('Error fetching papers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      const fileInput = document.getElementById('pdfFile');
      const file = fileInput.files[0];

      if (!file) {
        alert('Please select a file');
        setUploading(false);
        return;
      }

      const formData = new FormData();
      formData.append('file', file);
      formData.append('title', uploadForm.title);
      formData.append('description', uploadForm.description);
      formData.append('category', uploadForm.category);
      formData.append('tags', uploadForm.tags);

      const response = await fetch('/api/admin/research', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Research paper uploaded successfully!');
        setUploadForm({ title: '', description: '', category: 'market-analysis', tags: '' });
        fileInput.value = '';
        fetchPapers();
      } else {
        const data = await response.json();
        alert(data.error || 'Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const deletePaper = async (id) => {
    if (!confirm('Are you sure you want to delete this paper?')) return;
    
    try {
      await fetch(`/api/admin/research?id=${id}`, { method: 'DELETE' });
      fetchPapers();
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

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
              <h1 className="text-2xl font-bold text-gray-900">Research Papers</h1>
              <p className="text-sm text-gray-500">{papers.length} papers</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Upload Form */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Upload New Research Paper</h2>
          <form onSubmit={handleUpload} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                <input
                  type="text"
                  value={uploadForm.title}
                  onChange={(e) => setUploadForm({ ...uploadForm, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0017bf]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                <select
                  value={uploadForm.category}
                  onChange={(e) => setUploadForm({ ...uploadForm, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0017bf]"
                >
                  <option value="market-analysis">Market Analysis</option>
                  <option value="stock-recommendations">Stock Recommendations</option>
                  <option value="ipo-analysis">IPO Analysis</option>
                  <option value="sector-reports">Sector Reports</option>
                  <option value="information-memorandums">Information Memorandums</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={uploadForm.description}
                onChange={(e) => setUploadForm({ ...uploadForm, description: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0017bf]"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma separated)</label>
              <input
                type="text"
                value={uploadForm.tags}
                onChange={(e) => setUploadForm({ ...uploadForm, tags: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0017bf]"
                placeholder="stocks, analysis, kpc"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">PDF File *</label>
              <input
                type="file"
                id="pdfFile"
                accept=".pdf"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0017bf]"
                required
              />
            </div>
            <button
              type="submit"
              disabled={uploading}
              className="w-full py-3 bg-[#0017bf] text-white rounded-lg font-semibold hover:bg-[#0017bf]/90 transition-all disabled:opacity-50"
            >
              {uploading ? 'Uploading...' : 'Upload Research Paper'}
            </button>
          </form>
        </div>

        {/* Papers List */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold">Published Research Papers</h2>
          </div>
          {loading ? (
            <div className="p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0017bf] mx-auto"></div>
            </div>
          ) : papers.length > 0 ? (
            <div className="divide-y">
              {papers.map((paper) => (
                <div key={paper._id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <FileText className="w-5 h-5 text-[#0017bf]" />
                        <h3 className="font-semibold text-gray-900">{paper.title}</h3>
                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">
                          {paper.category.replace(/-/g, ' ')}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{paper.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>{new Date(paper.publishedDate).toLocaleDateString()}</span>
                        <span>{(paper.fileSize / 1024).toFixed(2)} KB</span>
                        <span>{paper.downloadCount} downloads</span>
                      </div>
                      {paper.tags && paper.tags.length > 0 && (
                        <div className="flex gap-2 mt-2">
                          {paper.tags.map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <a
                        href={paper.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                        title="View PDF"
                      >
                        <Download className="w-5 h-5" />
                      </a>
                      <button
                        onClick={() => deletePaper(paper._id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center text-gray-500">
              <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p>No research papers uploaded yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
