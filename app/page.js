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
    <div className="min-h-screen bg-white dark:bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-transparent">
        <div className="absolute inset-0 dark:breathing-gradient dark:opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 animate-fade-up max-w-4xl mx-auto">
            {/* Large Centered Logo */}
            <div className="mb-8">
              <img
                src="https://customer-assets.emergentagent.com/job_33cba548-cc10-4443-ba2a-5d85d6be63d5/artifacts/83rf6q6x_NEW%20AIB%20AXYS%20AFRICA%20LOGO%20DARK%20BG.svg"
                alt="AIB-AXYS Africa"
                className="dark:block hidden w-full max-w-2xl mx-auto h-auto"
              />
              <img
                src="https://customer-assets.emergentagent.com/job_33cba548-cc10-4443-ba2a-5d85d6be63d5/artifacts/c84w37kp_NEW%20AIB%20AXYS%20AFRICA%20LOGO%20WHITE%20BG.svg"
                alt="AIB-AXYS Africa"
                className="dark:hidden block w-full max-w-2xl mx-auto h-auto"
              />
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Leading Stock Trading in Kenya
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-stagger-1">
              IPOs, Leverage & Global Funds
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-stagger-2">
              <Link href="/ipo">
                <button className="w-full sm:w-auto px-10 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-98 flex items-center justify-center space-x-2">
                  <span>Explore IPOs</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              
              <Link href="/platforms">
                <button className="w-full sm:w-auto px-10 py-4 glass rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-98">
                  Trading Platforms
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <GlassCard className="animate-stagger-3 bg-gray-50/80 dark:bg-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center py-8">
              <div>
                <div className="text-6xl md:text-7xl font-bold text-primary mb-3">
                  {stats.years}+
                </div>
                <div className="text-xl text-muted-foreground font-medium">Years in Market</div>
              </div>
              <div>
                <div className="text-6xl md:text-7xl font-bold text-primary mb-3">
                  {stats.clients.toLocaleString()}+
                </div>
                <div className="text-xl text-muted-foreground font-medium">Clients Served</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 animate-stagger-4 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* IPO Applications */}
            <Link href="/ipo">
              <GlassCard hover3d className="h-full hover:border-accent/50 cursor-pointer transition-all duration-300 bg-gray-50/80 dark:bg-transparent">
                <div className="flex flex-col items-center text-center space-y-5 p-4">
                  <div className="p-5 rounded-2xl bg-accent/20 dark:bg-accent/10">
                    <TrendingUp className="w-10 h-10 text-accent dark:text-accent" style={{ filter: 'brightness(0.8) saturate(1.5)' }} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">IPO Applications</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Access exclusive IPO opportunities in the Kenyan market with expert guidance.
                  </p>
                </div>
              </GlassCard>
            </Link>

            {/* Leveraged Trading */}
            <Link href="/leverage">
              <GlassCard hover3d className="h-full hover:border-accent/50 cursor-pointer transition-all duration-300 bg-gray-50/80 dark:bg-transparent">
                <div className="flex flex-col items-center text-center space-y-5 p-4">
                  <div className="p-5 rounded-2xl bg-accent/20 dark:bg-accent/10">
                    <BarChart3 className="w-10 h-10 text-accent dark:text-accent" style={{ filter: 'brightness(0.8) saturate(1.5)' }} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Leveraged Trading</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Amplify your trading potential with competitive leverage rates and risk management.
                  </p>
                </div>
              </GlassCard>
            </Link>

            {/* Global Markets */}
            <Link href="/global-markets">
              <GlassCard hover3d className="h-full hover:border-accent/50 cursor-pointer transition-all duration-300 bg-gray-50/80 dark:bg-transparent">
                <div className="flex flex-col items-center text-center space-y-5 p-4">
                  <div className="p-5 rounded-2xl bg-accent/20 dark:bg-accent/10">
                    <Globe className="w-10 h-10 text-accent dark:text-accent" style={{ filter: 'brightness(0.8) saturate(1.5)' }} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Global Markets</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Trade international stocks and access global investment opportunities.
                  </p>
                </div>
              </GlassCard>
            </Link>

            {/* Research */}
            <Link href="/research">
              <GlassCard hover3d className="h-full hover:border-accent/50 cursor-pointer transition-all duration-300 bg-gray-50/80 dark:bg-transparent">
                <div className="flex flex-col items-center text-center space-y-5 p-4">
                  <div className="p-5 rounded-2xl bg-accent/20 dark:bg-accent/10">
                    <Shield className="w-10 h-10 text-accent dark:text-accent" style={{ filter: 'brightness(0.8) saturate(1.5)' }} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Expert Research</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    In-depth market analysis and insights to guide your investment decisions.
                  </p>
                </div>
              </GlassCard>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <GlassCard className="text-center p-16 bg-gray-50/80 dark:bg-transparent">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Ready to Start Trading?
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of investors who trust AIB-AXYS Africa for their trading needs.
              </p>
              <Link href="/contact">
                <button className="px-12 py-5 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-98">
                  Get Started Today
                </button>
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}