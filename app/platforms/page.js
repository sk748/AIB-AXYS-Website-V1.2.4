'use client';

import GlassCard from '@/components/GlassCard';
import { Monitor, Smartphone, Globe, CheckCircle } from 'lucide-react';

export default function PlatformsPage() {
  const platforms = [
    {
      icon: <Monitor className="w-12 h-12 text-primary" />,
      title: 'Desktop Trading',
      description: 'Professional-grade desktop application with advanced charting and analysis tools',
      features: ['Real-time market data', 'Advanced charting', 'Custom indicators', 'Multi-screen support'],
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: 'Mobile Trading',
      description: 'Trade on the go with our powerful mobile application for iOS and Android',
      features: ['Live notifications', 'One-tap trading', 'Biometric security', 'Portfolio tracking'],
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: 'Web Platform',
      description: 'Access your account from anywhere with our browser-based trading platform',
      features: ['No downloads needed', 'Cross-platform', 'Secure access', 'Instant updates'],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Trading Platforms</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional trading tools designed for your success
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-stagger-1">
          {platforms.map((platform, index) => (
            <GlassCard key={index} hover3d className="p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full backdrop-blur-xl bg-white/20 dark:bg-white/10 border border-primary/20">{platform.icon}</div>
                <h3 className="text-2xl font-bold">{platform.title}</h3>
                <p className="text-muted-foreground">{platform.description}</p>

                <ul className="space-y-2 w-full pt-4">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-98">
                  Download Now
                </button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Features Section */}
        <div className="max-w-4xl mx-auto animate-stagger-2">
          <GlassCard className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Platform Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-bold text-primary">Trading Tools</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Advanced order types</li>
                  <li>• Real-time market depth</li>
                  <li>• Technical analysis tools</li>
                  <li>• Price alerts & notifications</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-primary">Security</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Bank-level encryption</li>
                  <li>• Two-factor authentication</li>
                  <li>• Biometric login</li>
                  <li>• Secure data storage</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-primary">Performance</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Lightning-fast execution</li>
                  <li>• 99.9% uptime</li>
                  <li>• Low latency connections</li>
                  <li>• Optimized for speed</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-primary">Support</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• 24/5 customer support</li>
                  <li>• Live chat assistance</li>
                  <li>• Comprehensive guides</li>
                  <li>• Video tutorials</li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}