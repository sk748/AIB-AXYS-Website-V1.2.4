'use client';

import GlassCard from '@/components/GlassCard';
import { Smartphone, CheckCircle, Download } from 'lucide-react';
import Link from 'next/link';

export default function PlatformsPage() {
  const features = [
    'Real-time market data',
    'Live notifications',
    'One-tap trading',
    'Biometric security',
    'Portfolio tracking',
    'Advanced charting',
    'Custom indicators',
    'Multi-account support',
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Trading Platform</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trade on the go with Digitrader - your mobile trading companion
          </p>
        </div>

        {/* Platform Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-stagger-1">
          <GlassCard hover3d className="p-12">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Icon */}
              <div className="p-6 rounded-full backdrop-blur-xl bg-white/20 dark:bg-white/10 border border-primary/20">
                <Smartphone className="w-16 h-16 text-primary" />
              </div>

              {/* Title */}
              <h2 className="text-4xl font-bold">Digitrader</h2>
              
              {/* Description */}
              <p className="text-lg text-muted-foreground max-w-2xl">
                Our powerful mobile application for Android brings professional trading to your fingertips. 
                Trade anywhere, anytime with the full power of the markets in your pocket.
              </p>

              {/* Download Button */}
              <Link 
                href="https://play.google.com/store/apps/details?id=com.AibCapital.AibCapitalOnline"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
              >
                <button className="px-10 py-5 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-98 flex items-center space-x-3">
                  <Download className="w-6 h-6" />
                  <span>Download on Google Play</span>
                </button>
              </Link>
            </div>
          </GlassCard>
        </div>

        {/* Features Section */}
        <div className="max-w-4xl mx-auto animate-stagger-2">
          <GlassCard className="p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Platform Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-12 animate-stagger-3">
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Why Digitrader?</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Professional-Grade Trading:</strong> Access the same tools and data that professional traders use, optimized for mobile devices.
              </p>
              <p>
                <strong className="text-foreground">Security First:</strong> Bank-level encryption and biometric authentication keep your account secure at all times.
              </p>
              <p>
                <strong className="text-foreground">Lightning Fast:</strong> Execute trades in milliseconds with our optimized mobile infrastructure and direct market access.
              </p>
              <p>
                <strong className="text-foreground">Always Connected:</strong> Stay informed with real-time push notifications for price alerts, order fills, and market news.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}