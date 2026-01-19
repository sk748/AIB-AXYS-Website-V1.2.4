'use client';

import GlassCard from '@/components/GlassCard';
import Image from 'next/image';
import Link from 'next/link';
import { Smartphone, Shield, Bell, TrendingUp, Lock, BarChart3, Zap, Globe } from 'lucide-react';

export default function PlatformsPage() {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6 text-[#00BCD4]" />,
      title: 'Real-Time Data',
      description: 'Live market prices and instant updates',
    },
    {
      icon: <Bell className="w-6 h-6 text-[#00BCD4]" />,
      title: 'Live Notifications',
      description: 'Alerts for price movements and news',
    },
    {
      icon: <Zap className="w-6 h-6 text-[#00BCD4]" />,
      title: 'One-Tap Trading',
      description: 'Execute trades instantly',
    },
    {
      icon: <Lock className="w-6 h-6 text-[#00BCD4]" />,
      title: 'Biometric Security',
      description: 'Fingerprint & Face ID login',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#00BCD4]" />,
      title: 'Advanced Charts',
      description: 'Technical analysis tools',
    },
    {
      icon: <Globe className="w-6 h-6 text-[#00BCD4]" />,
      title: '24/7 Access',
      description: 'Trade anytime, anywhere',
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
            Professional trading tools at your fingertips
          </p>
        </div>

        {/* Main Platform Card */}
        <div className="max-w-5xl mx-auto mb-16 animate-stagger-1">
          <GlassCard className="p-8 md:p-12">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Icon */}
              <Smartphone className="w-16 h-16 text-[#00BCD4]" />

              {/* Title */}
              <h2 className="text-4xl font-bold">Digitrader</h2>

              {/* Subtitle */}
              <p className="text-xl text-brand-blue font-semibold">
                Online Share Trading Platform
              </p>

              {/* Description */}
              <p className="text-lg text-muted-foreground max-w-2xl">
                Our powerful mobile application brings professional trading to your fingertips. 
                Trade anywhere, anytime with secure e-transactions, real-time market prices, 
                order placement, and 24-hour account access.
              </p>

              {/* Download Buttons with Store Icons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link 
                  href="https://apps.apple.com/ke/app/aib-digitrader/id1481199787"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-98 flex items-center space-x-3">
                    <Image 
                      src="https://customer-assets.emergentagent.com/job_351bb877-bd56-4a94-bdd6-d30f7159f785/artifacts/yrrdf3kh_app-store-logo-icon-software-apple-phone-symbol-black-design-mobile-illustration-free-vector.jpg"
                      alt="App Store"
                      width={28}
                      height={28}
                      className="rounded"
                    />
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-sm font-bold">App Store</div>
                    </div>
                  </button>
                </Link>
                <Link 
                  href="https://play.google.com/store/apps/details?id=com.AibCapital.AibCapitalOnline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-98 flex items-center space-x-3">
                    <Image 
                      src="https://customer-assets.emergentagent.com/job_351bb877-bd56-4a94-bdd6-d30f7159f785/artifacts/9hmmvuwz_images%20%281%29.png"
                      alt="Google Play"
                      width={28}
                      height={28}
                      className="rounded"
                    />
                    <div className="text-left">
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-sm font-bold">Google Play</div>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Features Grid */}
        <div className="max-w-5xl mx-auto animate-stagger-2">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="gradient-text">Platform Features</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <GlassCard key={index} hover3d className="p-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  {feature.icon}
                  <h4 className="font-bold text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-16 animate-stagger-3">
          <GlassCard className="p-8 text-center">
            <Shield className="w-12 h-12 text-brand-blue mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Bank-Level Security</h2>
            <p className="text-muted-foreground mb-6">
              Digitrader uses state-of-the-art encryption and biometric authentication 
              to keep your account and transactions secure at all times.
            </p>
            <a href="/contact">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-98">
                Need Help? Contact Us
              </button>
            </a>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
