'use client';

import GlassCard from '@/components/GlassCard';
import { Globe, TrendingUp, DollarSign, Activity } from 'lucide-react';

export default function GlobalMarketsPage() {
  const markets = [
    {
      region: 'North America',
      exchanges: ['NYSE', 'NASDAQ', 'TSX'],
      description: 'Access leading US and Canadian stocks',
    },
    {
      region: 'Europe',
      exchanges: ['LSE', 'Euronext', 'Deutsche Börse'],
      description: 'Trade European blue-chip companies',
    },
    {
      region: 'Asia Pacific',
      exchanges: ['Tokyo', 'Hong Kong', 'SGX'],
      description: 'Explore opportunities in Asian markets',
    },
    {
      region: 'Africa',
      exchanges: ['JSE', 'NSE', 'EGX'],
      description: 'Invest in African growth stories',
    },
  ];

  const benefits = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: 'Global Diversification',
      description: 'Spread risk across multiple markets and sectors',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: 'Growth Opportunities',
      description: 'Access high-growth companies worldwide',
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: 'Currency Exposure',
      description: 'Benefit from favorable exchange rates',
    },
    {
      icon: <Activity className="w-8 h-8 text-primary" />,
      title: '24/5 Trading',
      description: 'Trade across different time zones',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Global Markets</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access international markets and diversify your portfolio globally
          </p>
        </div>

        {/* Markets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 animate-stagger-1">
          {markets.map((market, index) => (
            <GlassCard key={index} hover3d className="p-6">
              <h3 className="text-2xl font-bold mb-3">{market.region}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {market.exchanges.map((exchange, idx) => (
                  <span key={idx} className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary">
                    {exchange}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground">{market.description}</p>
            </GlassCard>
          ))}
        </div>

        {/* Benefits */}
        <div className="max-w-6xl mx-auto mb-16 animate-stagger-2">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Why Trade Globally?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <GlassCard key={index} hover3d>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full backdrop-blur-xl bg-white/20 dark:bg-white/10 border border-primary/20">{benefit.icon}</div>
                  <h3 className="text-lg font-bold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto animate-stagger-3">
          <GlassCard className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Trading Globally Today</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Open a global trading account and get access to international markets with competitive rates and expert
              support.
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-98">
              Open Account
            </button>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}