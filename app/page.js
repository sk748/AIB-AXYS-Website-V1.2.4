'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { TrendingUp, Shield, Globe, BarChart3, ArrowRight } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import content from '@/config/content.json';

export default function Home() {
  const [stats, setStats] = useState({ years: 0, clients: 0 });

  // Animated counter effect
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const yearIncrement = content.stats.yearsInMarket / steps;
    const clientIncrement = content.stats.clientsServed / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setStats({
          years: Math.floor(yearIncrement * currentStep),
          clients: Math.floor(clientIncrement * currentStep),
        });
      } else {
        clearInterval(timer);
        setStats({
          years: content.stats.yearsInMarket,
          clients: content.stats.clientsServed,
        });
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 breathing-gradient opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="gradient-text">Leading Stock Trading</span>
              <br />
              <span className="text-foreground">in Kenya</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-stagger-1">
              IPOs, Leverage & Global Funds
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-stagger-2">
              <Link href="/ipo">
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-98 flex items-center space-x-2">
                  <span>Explore IPOs</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              
              <Link href="/platforms">
                <button className="px-8 py-4 glass rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-98">
                  Trading Platforms
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-16 glass dark:glass animate-stagger-3">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                {stats.years}+
              </div>
              <div className="text-xl text-muted-foreground">Years in Market</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                {stats.clients.toLocaleString()}+
              </div>
              <div className="text-xl text-muted-foreground">Clients Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 animate-stagger-4">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Our Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* IPO Applications */}
            <Link href="/ipo">
              <GlassCard hover3d className="h-full hover:border-primary/50 cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">IPO Applications</h3>
                  <p className="text-muted-foreground text-sm">
                    Access exclusive IPO opportunities in the Kenyan market with expert guidance.
                  </p>
                </div>
              </GlassCard>
            </Link>

            {/* Leveraged Trading */}
            <Link href="/leverage">
              <GlassCard hover3d className="h-full hover:border-primary/50 cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <BarChart3 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Leveraged Trading</h3>
                  <p className="text-muted-foreground text-sm">
                    Amplify your trading potential with competitive leverage rates and risk management.
                  </p>
                </div>
              </GlassCard>
            </Link>

            {/* Global Markets */}
            <Link href="/global-markets">
              <GlassCard hover3d className="h-full hover:border-primary/50 cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Global Markets</h3>
                  <p className="text-muted-foreground text-sm">
                    Trade international stocks and access global investment opportunities.
                  </p>
                </div>
              </GlassCard>
            </Link>

            {/* Research */}
            <Link href="/research">
              <GlassCard hover3d className="h-full hover:border-primary/50 cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Expert Research</h3>
                  <p className="text-muted-foreground text-sm">
                    In-depth market analysis and insights to guide your investment decisions.
                  </p>
                </div>
              </GlassCard>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <GlassCard className="text-center p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Trading?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of investors who trust AIB-AXYS Africa for their trading needs.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-98">
                Get Started Today
              </button>
            </Link>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}