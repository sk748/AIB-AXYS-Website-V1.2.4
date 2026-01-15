'use client';

import GlassCard from '@/components/GlassCard';
import { TrendingUp, Shield, Zap, CheckCircle } from 'lucide-react';

export default function LeveragePage() {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: 'Competitive Rates',
      description: 'Access leverage up to 1:10 with competitive interest rates',
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: 'Risk Management',
      description: 'Advanced tools to help you manage and mitigate trading risks',
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: 'Fast Execution',
      description: 'Lightning-fast trade execution with real-time market data',
    },
  ];

  const benefits = [
    'Amplify your trading potential',
    'Flexible leverage options',
    'Professional trading tools',
    'Dedicated support team',
    'Transparent fee structure',
    'Real-time risk monitoring',
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Leveraged Trading</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Maximize your trading potential with our competitive leverage solutions
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-stagger-1">
          {features.map((feature, index) => (
            <GlassCard key={index} hover3d>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10">{feature.icon}</div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto animate-stagger-2">
          {/* Benefits */}
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Leverage Tiers */}
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold mb-6">Leverage Tiers</h2>
            <div className="space-y-4">
              <div className="p-4 glass rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Standard</h3>
                  <span className="text-primary font-bold">1:5</span>
                </div>
                <p className="text-sm text-muted-foreground">Perfect for conservative traders</p>
              </div>

              <div className="p-4 glass rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Advanced</h3>
                  <span className="text-primary font-bold">1:7</span>
                </div>
                <p className="text-sm text-muted-foreground">For experienced market participants</p>
              </div>

              <div className="p-4 glass rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Professional</h3>
                  <span className="text-primary font-bold">1:10</span>
                </div>
                <p className="text-sm text-muted-foreground">Maximum leverage for pro traders</p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-stagger-3">
          <GlassCard className="p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to Start?</h2>
            <p className="text-muted-foreground mb-6">
              Contact our team to discuss your leverage trading requirements
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-98">
              Get Started
            </button>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}