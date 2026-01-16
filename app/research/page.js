'use client';

import { useState } from 'react';
import GlassCard from '@/components/GlassCard';
import content from '@/config/content.json';
import { Search, Download, Calendar } from 'lucide-react';

export default function ResearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResearch, setFilteredResearch] = useState(content.research);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = content.research.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredResearch(filtered);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Market Research</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert analysis and insights to guide your investment decisions
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12 animate-stagger-1">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search research reports..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 glass rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
            />
          </div>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-stagger-2">
          {filteredResearch.map((item) => (
            <GlassCard key={item.id} hover3d className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-brand-blue">
                    {item.category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(item.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
              </div>

              <button className="w-full mt-4 px-4 py-3 glass rounded-lg font-semibold hover:bg-primary/20 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 active:scale-98">
                <Download className="w-4 h-4" />
                <span>Download Report</span>
              </button>
            </GlassCard>
          ))}
        </div>

        {/* No Results */}
        {filteredResearch.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No research reports found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}