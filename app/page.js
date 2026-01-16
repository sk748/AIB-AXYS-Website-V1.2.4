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
    <div className="min-h-screen bg-white dark:bg-[#121929]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#121929] -mt-8 pt-8">
        {/* Blue hue background behind logo - Dark mode */}
        <div 
          className="absolute inset-0 dark:block hidden"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 45%, rgba(0, 23, 191, 0.15) 0%, transparent 70%)',
          }}
        ></div>
        
        {/* Multiple diagonal shades at 335 degrees - Dark mode */}
        <div 
          className="absolute inset-0 dark:block hidden"
          style={{
            background: `linear-gradient(335deg, 
              transparent 0%, 
              transparent 8%,
              rgba(0, 23, 191, 0.12) 10%, 
              rgba(0, 23, 191, 0.06) 14%,
              transparent 16%,
              transparent 22%,
              rgba(0, 23, 191, 0.15) 24%,
              rgba(0, 23, 191, 0.08) 28%,
              transparent 30%,
              transparent 38%,
              rgba(0, 23, 191, 0.18) 40%,
              rgba(0, 23, 191, 0.1) 46%,
              transparent 48%,
              transparent 54%,
              rgba(0, 23, 191, 0.12) 56%,
              rgba(0, 23, 191, 0.05) 60%,
              transparent 62%,
              transparent 70%,
              rgba(0, 23, 191, 0.08) 72%,
              rgba(0, 23, 191, 0.04) 76%,
              transparent 78%,
              transparent 85%,
              rgba(0, 23, 191, 0.1) 87%,
              rgba(0, 23, 191, 0.05) 92%,
              transparent 94%,
              transparent 100%
            )`,
          }}
        ></div>
        
        {/* Additional offset diagonal stripes - Dark mode */}
        <div 
          className="absolute inset-0 dark:block hidden"
          style={{
            background: `linear-gradient(335deg, 
              transparent 0%,
              transparent 5%,
              rgba(0, 23, 191, 0.04) 7%,
              transparent 9%,
              transparent 18%,
              rgba(0, 23, 191, 0.06) 20%,
              transparent 22%,
              transparent 33%,
              rgba(0, 23, 191, 0.08) 35%,
              transparent 37%,
              transparent 50%,
              rgba(0, 23, 191, 0.05) 52%,
              transparent 54%,
              transparent 65%,
              rgba(0, 23, 191, 0.07) 67%,
              transparent 69%,
              transparent 80%,
              rgba(0, 23, 191, 0.06) 82%,
              transparent 84%,
              transparent 100%
            )`,
          }}
        ></div>
        
        {/* Light mode multiple diagonal shades at 335 degrees */}
        <div 
          className="absolute inset-0 dark:hidden block"
          style={{
            background: `linear-gradient(335deg, 
              transparent 0%, 
              transparent 10%,
              rgba(0, 23, 191, 0.04) 12%, 
              transparent 16%,
              transparent 25%,
              rgba(0, 23, 191, 0.06) 27%,
              transparent 31%,
              transparent 42%,
              rgba(0, 23, 191, 0.05) 44%,
              transparent 48%,
              transparent 58%,
              rgba(0, 23, 191, 0.03) 60%,
              transparent 64%,
              transparent 75%,
              rgba(0, 23, 191, 0.04) 77%,
              transparent 81%,
              transparent 100%
            )`,
          }}
        ></div>
        
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
      <section className="py-20 bg-white dark:bg-[#121929]">
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
      <section className="py-24 animate-stagger-4 bg-white dark:bg-[#121929]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* IPO Applications */}
            <Link href="/ipo">
              <GlassCard hover3d className="h-full hover:border-primary/50 cursor-pointer transition-all duration-300 bg-gray-50/80 dark:bg-transparent">
                <div className="flex flex-col items-center text-center space-y-5 p-4">
                  <TrendingUp className="w-10 h-10 text-brand-blue" />
                  <h3 className="text-xl font-bold text-foreground">IPO Applications</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Access exclusive IPO opportunities in the Kenyan market with expert guidance.
                  </p>
                </div>
              </GlassCard>
            </Link>

            {/* Leveraged Trading */}
            <Link href="/leverage">
              <GlassCard hover3d className="h-full hover:border-primary/50 cursor-pointer transition-all duration-300 bg-gray-50/80 dark:bg-transparent">
                <div className="flex flex-col items-center text-center space-y-5 p-4">
                  <BarChart3 className="w-10 h-10 text-brand-blue" />
                  <h3 className="text-xl font-bold text-foreground">Leveraged Trading</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Amplify your trading potential with competitive leverage rates and risk management.
                  </p>
                </div>
              </GlassCard>
            </Link>

            {/* Global Funds */}
            <Link href="/global-markets">
              <GlassCard hover3d className="h-full hover:border-primary/50 cursor-pointer transition-all duration-300 bg-gray-50/80 dark:bg-transparent">
                <div className="flex flex-col items-center text-center space-y-5 p-4">
                  <Globe className="w-10 h-10 text-brand-blue" />
                  <h3 className="text-xl font-bold text-foreground">Global Funds</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Diversified investment solutions and global fund access.
                  </p>
                </div>
              </GlassCard>
            </Link>

            {/* Research */}
            <Link href="/research">
              <GlassCard hover3d className="h-full hover:border-primary/50 cursor-pointer transition-all duration-300 bg-gray-50/80 dark:bg-transparent">
                <div className="flex flex-col items-center text-center space-y-5 p-4">
                  <Shield className="w-10 h-10 text-brand-blue" />
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
      <section className="py-24 bg-white dark:bg-[#121929]">
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