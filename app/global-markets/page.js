'use client';

import GlassCard from '@/components/GlassCard';
import { Download, TrendingUp, DollarSign, Globe, Building, Briefcase } from 'lucide-react';

export default function GlobalFundsPage() {
  const funds = [
    {
      name: 'AXIOM Equity Fund',
      shortName: 'AEF',
      icon: <TrendingUp className="w-10 h-10 text-[#00BCD4]" />,
      description: 'AEF adopts a blended investment strategy which consists of investment in both growth and value stocks, favouring stocks with sound fundamentals, strong management and sustainable growth driven strategies.',
      documents: [
        { name: 'Factsheet Class I', url: '#' },
        { name: 'Factsheet Class R', url: '#' },
        { name: 'Net Asset Value', url: '#' },
        { name: 'Flyer', url: '#' },
        { name: 'Prospectus', url: '#' },
      ],
    },
    {
      name: 'AXIOM Yield Fund',
      shortName: 'AYF',
      icon: <DollarSign className="w-10 h-10 text-[#00BCD4]" />,
      description: 'Provides Investors with regular income and aims to outperform the average savings rate plus a premium by maximising risk adjusted returns.',
      documents: [
        { name: 'Flyer', url: '#' },
        { name: 'Factsheet', url: '#' },
        { name: 'Net Asset Value', url: '#' },
        { name: 'Prospectus', url: '#' },
      ],
    },
    {
      name: 'AXIOM Africa Equity Fund',
      shortName: 'AAEF',
      icon: <Globe className="w-10 h-10 text-[#00BCD4]" />,
      description: 'Designed to offer investors a unique opportunity to invest in best-in-class African stocks. The fund carefully selects and invests in companies that are expected to benefit from the various socio-economic structural changes unfolding in the region, such as the demographic wave and the digitisation revolution.',
      documents: [
        { name: 'Flyer', url: '#' },
        { name: 'Factsheet Class I', url: '#' },
        { name: 'Factsheet Class R', url: '#' },
        { name: 'Net Asset Value', url: '#' },
        { name: 'Prospectus', url: '#' },
      ],
    },
    {
      name: 'Dynamic Global Equity',
      shortName: 'DGE',
      icon: <Building className="w-10 h-10 text-[#00BCD4]" />,
      description: 'The fund is a feeder fund which invests directly and solely in Fundsmith Equity Fund. The aim of the underlying fund is to provide long-term growth by investing in equities on a global basis and adopting a specific investment philosophy.',
      documents: [
        { name: 'Flyer', url: '#' },
        { name: 'Factsheet Class I', url: '#' },
        { name: 'Factsheet Class R', url: '#' },
        { name: 'Net Asset Value', url: '#' },
        { name: 'Prospectus', url: '#' },
      ],
    },
    {
      name: 'AXIOM Patrimoine',
      shortName: 'AP',
      icon: <Briefcase className="w-10 h-10 text-[#00BCD4]" />,
      description: 'AXIOM Patrimoine is a multi-asset class investment fund designed to strengthen the financial security of investors. This investment fund benefits from different asset types, both domestically and internationally. When you invest in AXIOM Patrimoine, you will have the pleasure of seeing your capital sustainably grow in a risk-balanced way while retaining the possibility of accessing your capital at any time.',
      documents: [
        { name: 'Flyer', url: '#' },
        { name: 'Factsheet Class I', url: '#' },
        { name: 'Factsheet Class R', url: '#' },
        { name: 'Prospectus', url: '#' },
        { name: 'Net Asset Value', url: '#' },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Global Funds</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Diversified investment solutions for every investor
          </p>
        </div>

        {/* Funds Grid */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {funds.map((fund, index) => (
            <div 
              key={index} 
              className={`animate-stagger-${Math.min(index + 1, 4)}`}
            >
              <GlassCard className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon and Title */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                      {fund.icon}
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">{fund.name}</h2>
                        <span className="text-sm text-muted-foreground">({fund.shortName})</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mt-4 mb-6">
                  {fund.description}
                </p>

                {/* Document Downloads */}
                <div className="border-t border-border pt-6">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                    Documents
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {fund.documents.map((doc, docIndex) => (
                      <a
                        key={docIndex}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 text-sm font-medium"
                      >
                        <Download className="w-4 h-4" />
                        {doc.name}
                      </a>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-16 animate-stagger-4">
          <GlassCard className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in Our Funds?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contact our investment team to learn more about our fund offerings and find the right investment solution for your needs.
            </p>
            <a href="/contact">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-98">
                Contact Us
              </button>
            </a>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
