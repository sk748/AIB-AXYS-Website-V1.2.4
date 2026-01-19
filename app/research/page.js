'use client';

import { useEffect, useState } from 'react';
import GlassCard from '@/components/GlassCard';
import { FileText, Download, Calendar, Search } from 'lucide-react';

export default function ResearchPage() {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPapers();
  }, []);

  const fetchPapers = async () => {
    try {
      const response = await fetch('/api/research');
      const data = await response.json();
      setPapers(data.papers || []);
    } catch (error) {
      console.error('Error fetching papers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (paperId) => {
    try {
      await fetch(`/api/research/download?id=${paperId}`);
    } catch (error) {
      console.error('Download error:', error);
    }
  };

  const categories = [
    { value: 'all', label: 'All Reports' },
    { value: 'market-analysis', label: 'Market Analysis' },
    { value: 'ipo-analysis', label: 'IPO Analysis' },
    { value: 'sector-reports', label: 'Sector Reports' },
    { value: 'company', label: 'Company' },
    { value: 'information-memorandums', label: 'Information Memorandums' },
  ];

  // Filter papers based on category
  const filteredPapers = papers.filter(p => {
    // Filter by category (except for 'all' and 'company')
    if (filter !== 'all' && filter !== 'company' && p.category !== filter) return false;
    
    // For Company tab: show all papers
    if (filter === 'company') {
      return true; // Show all papers
    }
    
    return true;
  });

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Research & Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert market analysis and investment research to guide your decisions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8 animate-stagger-1">
          <div className="inline-flex rounded-lg border border-border overflow-hidden flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-6 py-3 text-sm font-medium transition-colors ${
                  filter === cat.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background hover:bg-muted text-foreground'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Papers Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : filteredPapers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto animate-stagger-2">
            {filteredPapers.map((paper, index) => (
              <GlassCard key={paper._id} hover3d className="p-6">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <FileText className="w-8 h-8 text-brand-blue" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-center mb-3 text-foreground">
                    {paper.title}
                  </h3>

                  {/* Company Name */}
                  {paper.company && (
                    <div className="text-center mb-2">
                      <span className="text-sm font-medium text-brand-blue">
                        {paper.company}
                      </span>
                      {paper.sector && (
                        <div className="text-xs text-muted-foreground">{paper.sector}</div>
                      )}
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="flex justify-center mb-3">
                    <span className="px-3 py-1 text-xs bg-primary/10 text-brand-blue rounded-full">
                      {paper.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  </div>

                  {/* Description */}
                  {paper.description && (
                    <p className="text-sm text-muted-foreground text-center mb-4 flex-1">
                      {paper.description}
                    </p>
                  )}

                  {/* Tags */}
                  {paper.tags && paper.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {paper.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Meta Info */}
                  <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(paper.publishedDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>{paper.downloadCount} downloads</span>
                    </div>
                  </div>

                  {/* Download Button */}
                  <a
                    href={paper.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleDownload(paper._id)}
                    className="w-full"
                  >
                    <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-98 flex items-center justify-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </button>
                  </a>
                </div>
              </GlassCard>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <p className="text-xl text-muted-foreground">
              {filter === 'all' ? 'No research papers available yet' : 'No papers in this category'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

