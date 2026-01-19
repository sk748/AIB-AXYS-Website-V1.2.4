'use client';

import GlassCard from '@/components/GlassCard';
import Image from 'next/image';
import Link from 'next/link';
import { Globe, Users, Shield, MapPin } from 'lucide-react';

export default function GroupPage() {
  const executiveDirectors = [
    { name: 'Michel Guy Ravilland', role: 'AXYS Group Chairman' },
    { name: 'Alexander Armstrong', role: 'Group Chief Executive Officer' },
    { name: 'Omabhinavsingh Juddoo', role: 'Group Chief Financial Officer' },
    { name: 'Charles M. Omanga', role: 'Executive Director' },
    { name: 'Pareet Shah', role: 'Executive Director' },
  ];

  const independentDirectors = [
    { name: 'John Howland-Jackson', role: 'Non-Executive Director', description: 'Chairman Nikko Asset Management, Former Deputy CEO Natwest' },
    { name: 'Sandy Shipton', role: 'Non-Executive Director', description: 'Founding Executive Director DIFC, Former SVP Abu Dhabi Islamic Bank Merrill Lynch' },
    { name: 'Nick Edmunds', role: 'Non-Executive Director', description: 'Executive Dubai, Former CEO Equiom - Middle East' },
    { name: 'Derek Waruhiu', role: 'Non-Executive Director', description: 'Former Director West Africa Coca-Cola, Former Standard Chartered Senior Banker' },
    { name: 'Caspar Warre', role: 'Non-Executive Director', description: 'Director at TrustExec, Former Managing Director of Principal Investments' },
  ];

  const globalOffices = [
    { city: 'Mauritius', description: 'Headquarters' },
    { city: 'Nairobi', description: 'East Africa Hub' },
    { city: 'Abu Dhabi', description: 'Middle East Operations' },
    { city: 'DIFC Dubai', description: 'Financial Centre' },
    { city: 'Geneva', description: 'European Operations' },
    { city: 'London', description: 'UK Operations' },
  ];

  const stats = [
    { value: '170+', label: 'Employees' },
    { value: 'USD 13.9+ BN', label: 'Client Assets' },
    { value: '85', label: 'Countries Served' },
    { value: '6', label: 'Continents' },
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
              src="/axys-logo.png"
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              AXYS Group is a fully integrated investment house born from the union of two long-established institutions: 
              AIB Capital Limited and Apex Africa Capital Limited. Building on more than 25 years of combined market expertise, 
              we bring together two powerful offerings: advanced capital markets solutions through AXYS and specialised fund 
              and fiduciary services through NWT.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to empower clients with tailored financial solutions by combining capital markets expertise 
              and fiduciary services, protecting their interests and helping their wealth grow with confidence.
            </p>
          </GlassCard>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-stagger-2">
          {stats.map((stat, index) => (
            <GlassCard key={index} className="p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-brand-blue mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </GlassCard>
          ))}
        </div>

        {/* Global Presence */}
        <div className="mb-16 animate-stagger-3">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="gradient-text">Global Presence</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {globalOffices.map((office, index) => (
              <GlassCard key={index} hover3d className="p-6 text-center">
                <MapPin className="w-8 h-8 text-brand-blue mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-1">{office.city}</h3>
                <p className="text-xs text-muted-foreground">{office.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Key Entities with Logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animate-stagger-3">
          <GlassCard className="p-8">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/axys-logo.png"
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
                src="/nwt-logo.png"
                alt="NWT"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed text-center">
              Specialised fund and fiduciary services including entity structuring, company secretarial, 
              estate planning, trust administration, and multi-jurisdictional compliance. NWT safeguards 
              and grows client wealth with confidence.
            </p>
          </GlassCard>
        </div>

        {/* Executive Directors */}
        <div className="mb-16 animate-stagger-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="gradient-text">Executive Directors</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {executiveDirectors.map((director, index) => (
              <GlassCard key={index} className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{director.name}</h3>
                <p className="text-brand-blue font-semibold text-sm">{director.role}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Independent Directors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="gradient-text">Independent Directors</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {independentDirectors.map((director, index) => (
              <GlassCard key={index} className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-1">{director.name}</h3>
                <p className="text-brand-blue font-semibold text-sm mb-2">{director.role}</p>
                <p className="text-xs text-muted-foreground">{director.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <GlassCard className="p-8 max-w-2xl mx-auto">
            <Globe className="w-12 h-12 text-brand-blue mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Serving Clients Worldwide</h2>
            <p className="text-muted-foreground mb-6">
              With a strategic presence across five key financial hubs, AXYS Group serves clients 
              across 85 countries and six continents with comprehensive multi-jurisdictional capabilities.
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
      </div>
    </div>
  );
}
