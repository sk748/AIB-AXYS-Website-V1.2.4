'use client';

import { useTheme } from '@/contexts/ThemeContext';
import GlassCard from '@/components/GlassCard';
import { Building2, Users, Globe, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function GroupPage() {
  const { theme } = useTheme();

  const entities = [
    {
      name: 'AXYS',
      description:
        'Advanced capital markets solutions including brokerage services, global market execution, research & advisory, and investment solutions. AXYS delivers above-market risk-adjusted performance with industry-competitive fees.',
    },
    {
      name: 'NWT',
      description:
        'Fiduciary services, corporate services, and wealth structuring solutions. NWT provides professional administration of trusts, foundations, and corporate vehicles with a focus on transparency and compliance.',
    },
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-[#00BCD4]" />, value: '170+', label: 'Employees' },
    { icon: <Globe className="w-8 h-8 text-[#00BCD4]" />, value: '85+', label: 'Countries' },
    { icon: <Building2 className="w-8 h-8 text-[#00BCD4]" />, value: '6', label: 'Continents' },
    { icon: <TrendingUp className="w-8 h-8 text-[#00BCD4]" />, value: '10,000+', label: 'Clients' },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header with AXYS Logo */}
        <div className="text-center mb-16 animate-fade-up">
          <a 
            href="https://axys-group.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block hover:opacity-90 transition-opacity"
          >
            <Image
              src={theme === 'dark' ? '/axys-logo-dark.png' : '/axys-logo.png'}
              alt="AXYS Group"
              width={300}
              height={100}
              className="mx-auto mb-6 h-20 w-auto"
            />
          </a>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A Fully Integrated Investment House
          </p>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16 animate-stagger-1">
          <GlassCard className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="gradient-text">About AXYS Group</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-center">
              AXYS Group is a fully integrated investment house providing a comprehensive range of financial services 
              to institutional, corporate, and private clients. Headquartered in Mauritius with operations spanning 
              Africa, Europe, and beyond, AXYS Group combines local market expertise with global reach.
            </p>
          </GlassCard>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-stagger-2">
          {stats.map((stat, index) => (
            <GlassCard key={index} hover3d>
              <div className="flex flex-col items-center text-center space-y-3">
                {stat.icon}
                <div className="text-3xl font-bold text-brand-blue">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Group Structure */}
        <div className="max-w-4xl mx-auto mb-16 animate-stagger-2">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Group Structure</span>
          </h2>
          <GlassCard className="p-8">
            <p className="text-muted-foreground leading-relaxed mb-6">
              AXYS Group operates through two principal business lines, each serving distinct client needs:
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brand-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">AXYS</h3>
                  <p className="text-sm text-muted-foreground">
                    Capital markets and investment solutions
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brand-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">NWT</h3>
                  <p className="text-sm text-muted-foreground">
                    Fiduciary and corporate services
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Key Entities with Logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animate-stagger-3">
          <GlassCard className="p-8">
            <div className="flex items-center justify-center mb-6">
              <Image
                src={theme === 'dark' ? '/axys-logo-dark.png' : '/axys-logo.png'}
                alt="AXYS"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed text-center">
              Advanced capital markets solutions including brokerage services, global market execution, 
              research & advisory, and investment solutions. AXYS delivers above-market risk-adjusted 
              performance with industry-competitive fees.
            </p>
          </GlassCard>

          <GlassCard className="p-8">
            <div className="flex items-center justify-center mb-6">
              <Image
                src={theme === 'dark' ? '/nwt-logo-light.png' : '/nwt-logo.png'}
                alt="NWT"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed text-center">
              Professional fiduciary services, corporate administration, and wealth structuring. 
              NWT provides expert management of trusts, foundations, and corporate structures with 
              meticulous attention to regulatory compliance and client confidentiality.
            </p>
          </GlassCard>
        </div>

        {/* Call to Action */}
        <div className="max-w-3xl mx-auto mb-16 animate-stagger-4">
          <GlassCard className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Global Reach, Local Expertise</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              AXYS Group serves clients across 85 countries and six continents with comprehensive 
              multi-jurisdictional capabilities.
            </p>
            <Link 
              href="https://axys-group.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-98">
                Learn more
              </button>
            </Link>
          </GlassCard>
        </div>

        {/* Global Offices */}
        <div className="max-w-6xl mx-auto animate-stagger-5">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Offices Around the World</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <GlassCard className="p-6 text-center hover:scale-105 transition-all">
              <div className="text-4xl mb-3">🇲🇺</div>
              <h3 className="font-bold text-foreground">Mauritius</h3>
              <p className="text-sm text-muted-foreground">Headquarters</p>
            </GlassCard>
            <GlassCard className="p-6 text-center hover:scale-105 transition-all">
              <div className="text-4xl mb-3">🇰🇪</div>
              <h3 className="font-bold text-foreground">Kenya</h3>
              <p className="text-sm text-muted-foreground">Nairobi</p>
            </GlassCard>
            <GlassCard className="p-6 text-center hover:scale-105 transition-all">
              <div className="text-4xl mb-3">🇬🇧</div>
              <h3 className="font-bold text-foreground">United Kingdom</h3>
              <p className="text-sm text-muted-foreground">London</p>
            </GlassCard>
            <GlassCard className="p-6 text-center hover:scale-105 transition-all">
              <div className="text-4xl mb-3">🇨🇭</div>
              <h3 className="font-bold text-foreground">Switzerland</h3>
              <p className="text-sm text-muted-foreground">Geneva</p>
            </GlassCard>
            <GlassCard className="p-6 text-center hover:scale-105 transition-all">
              <div className="text-4xl mb-3">🇦🇪</div>
              <h3 className="font-bold text-foreground">UAE</h3>
              <p className="text-sm text-muted-foreground">Dubai</p>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
