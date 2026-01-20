'use client';

import GlassCard from '@/components/GlassCard';
import { TrendingUp, Shield, Zap, CheckCircle, FileText, Wallet, Send, ArrowRightLeft } from 'lucide-react';

export default function LeveragePage() {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-[#00BCD4]" />,
      title: 'Competitive Rates',
      description: 'Access leverage up to 5x (1:4) with competitive interest rates',
    },
    {
      icon: <Shield className="w-8 h-8 text-[#00BCD4]" />,
      title: 'Bank-Led Security',
      description: 'Client funds are deposited directly into their settlement account held at our partnering bank, with all withdrawals and refunds returning to the same account',
    },
    {
      icon: <Zap className="w-8 h-8 text-[#00BCD4]" />,
      title: 'Seamless Execution',
      description: 'Smooth trade execution with comprehensive market monitoring',
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Simple Onboarding',
      icon: <FileText className="w-6 h-6" />,
      description: 'Express your interest and sign a single Master Document Pack. If you don\'t have a CDSC account, visit our offices or download DigiTrader to open one.',
    },
    {
      step: 2,
      title: 'Account & Funding',
      icon: <Wallet className="w-6 h-6" />,
      description: 'Once approved, a dedicated transaction account is opened. You simply deposit your Cash Cover, and we top up the rest to create your 100% funding pool.',
    },
    {
      step: 3,
      title: 'IPO Application Made Easy',
      icon: <Send className="w-6 h-6" />,
      description: 'We handle the administration. Your IPO application is processed and linked directly to your financing facility.',
    },
    {
      step: 4,
      title: 'Flexible Exit & Refunds',
      icon: <ArrowRightLeft className="w-6 h-6" />,
      description: 'IPO refunds are credited back to your account automatically. When you are ready to sell, or if an exit trigger occurs, settlement is handled directly through the bank.',
    },
  ];

  const benefits = [
    'Amplify your trading potential',
    '5x leverage for qualified investors',
    'Unified Document Signing – One upfront sign-off for all processes',
    'Automatic Refund Processing – Oversubscription refunds go straight to your principal',
    'Dedicated support team',
    'Risk monitoring',
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Leverage KPC IPO</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Maximize your IPO investment potential with 5x leverage
          </p>
          
          {/* Apply Button */}
          <a href="/contact?subject=leverage">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-98">
              Apply for Leverage
            </button>
          </a>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-stagger-1">
          {features.map((feature, index) => (
            <GlassCard key={index} hover3d>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-[#00BCD4]">{feature.icon}</div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="max-w-6xl mx-auto mb-16 animate-stagger-2">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">How It Works</span>
          </h2>
          
          {/* Process Timeline */}
          <div className="relative">
            {/* Horizontal line - hidden on mobile, shortened to prevent overlap */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#0017BF] via-[#00BCD4] to-[#0017BF]"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Number Circle */}
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0017BF] to-[#00BCD4] flex items-center justify-center relative z-10">
                      <div className="w-20 h-20 rounded-full bg-background flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-brand-blue">{step.step}</span>
                        <div className="text-brand-blue">{step.icon}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <GlassCard className="p-6 h-full">
                    <h3 className="text-lg font-bold text-center mb-3 text-brand-blue">{step.title}</h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      {step.description}
                    </p>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto animate-stagger-3">
          {/* Benefits */}
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Leverage Details */}
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold mb-6">Leverage Offering</h2>
            <div className="space-y-4">
              <div className="p-6 glass rounded-lg border-2 border-primary/30">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">5x Leverage</h3>
                  <span className="text-3xl font-bold text-brand-blue">1:4</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Multiply your IPO investment power by 5 with our professional financing facility
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Suitable for experienced investors</li>
                  <li>• Bank-secured account structure</li>
                  <li>• Competitive interest rates</li>
                  <li>• Automatic refund processing</li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-stagger-4">
          <GlassCard className="p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              Contact our team to discuss IPO financing options and requirements
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-98">
              Get Started
            </button>
            <p className="text-xs text-muted-foreground mt-4 italic">
              *Terms and conditions apply. Subject to approval and eligibility requirements.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
