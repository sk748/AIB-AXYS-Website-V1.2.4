'use client';

import { FileText, Download } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <div className="flex justify-center mb-4">
            <FileText className="w-16 h-16 text-brand-blue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Terms & Conditions</span>
          </h1>
          <p className="text-sm text-muted-foreground">
            AIB-AXYS Africa Limited
          </p>
        </div>

        {/* PDF Viewer */}
        <GlassCard className="p-8 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-4">View Terms & Conditions</h2>
            <p className="text-muted-foreground mb-6">
              Please review our Terms and Conditions below or download the PDF for your records.
            </p>
            <a 
              href="/terms-and-conditions.pdf" 
              download
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5" />
              <span>Download PDF</span>
            </a>
          </div>

          {/* Embedded PDF Viewer */}
          <div className="w-full" style={{ height: '800px' }}>
            <iframe
              src="/terms-and-conditions.pdf"
              className="w-full h-full border-2 border-border rounded-lg"
              title="Terms and Conditions"
            />
          </div>
        </GlassCard>

        {/* Contact Section */}
        <GlassCard className="p-6 text-center">
          <p className="text-sm text-muted-foreground">
            For questions about these Terms & Conditions, please contact us at{' '}
            <a href="mailto:info@aib-axysafrica.com" className="text-brand-blue underline">
              info@aib-axysafrica.com
            </a>
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
