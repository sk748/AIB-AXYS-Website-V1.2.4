'use client';

import GlassCard from '@/components/GlassCard';
import { Target, Eye, Award, Users } from 'lucide-react';
import { teamData } from '@/data/teamData';

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-brand-blue" />,
      title: 'Our Mission',
      description:
        'To empower clients with tailored financial solutions by combining capital markets expertise and fiduciary services, protecting their interests and helping their wealth grow with confidence.',
    },
    {
      icon: <Eye className="w-8 h-8 text-brand-blue" />,
      title: 'Our Vision',
      description:
        'To be the trusted partner clients turn to for unlocking opportunities, creating meaningful value, and enabling long-term success.',
    },
    {
      icon: <Award className="w-8 h-8 text-brand-blue" />,
      title: 'Our Values',
      description:
        'Independence, innovation, and shared intelligence guide every decision we make. We are client-centric, agile, and committed to delivering above-market performance.',
    },
  ];

  const boardMembers = [
    { name: 'Charles M. Omanga', role: 'Chairman, AIB-AXYS', type: 'Non-Executive Director' },
    { name: 'Michel Guy Ravilland', role: 'AXYS Group Chairman', type: 'Non-Executive Director' },
    { name: 'Ian Sababady', role: 'Managing Director, AXYS Capital Management', type: 'Non-Executive Director' },
    { name: 'Derek A. Waruhiu', role: 'Former Director West Africa Coca-Cola', type: 'Independent Director' },
    { name: 'Bansri Pattni', role: 'Chief Executive Officer', type: 'Executive Director' },
  ];

  const differentiators = [
    {
      title: 'Performance & Fees',
      description: 'Delivers above market risk-adjusted performance with industry-competitive fees.',
    },
    {
      title: 'Professional Team',
      description: 'Experienced team with domestic and international backgrounds, agile and client-focused.',
    },
    {
      title: 'Independent',
      description: 'Access to investment products based on in-house research, not constrained by affiliations.',
    },
    {
      title: 'Open Architecture',
      description: 'Flexible approach to investing with extensive due diligence on product selection.',
    },
    {
      title: 'Cutting Edge Tech',
      description: 'Utilizes state-of-the-art technology, including the Digitrader platform.',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">About AIB-AXYS Africa</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A Distinguished Member of AXYS Group
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-24 animate-stagger-1">
          <GlassCard className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                AIB-AXYS Africa is a distinguished member of AXYS Group, a fully integrated investment house 
                born from the union of two long-established institutions: AIB Capital Limited and Apex Africa Capital Limited. 
                Building on more than 25 years of combined market expertise, we are a fully accredited stockbroker 
                at the Nairobi Securities Exchange (NSE).
              </p>
              <p>
                We serve both retail and institutional investors, as well as High Net Worth Individuals (HNWIs), 
                providing comprehensive investment solutions including local equities and bonds, global market execution, 
                offshore funds access, research & advisory, and portfolio management services.
              </p>
              <p>
                With 30+ years of experience, 170+ employees across the group, and over 10,000 clients worldwide, 
                we manage client assets exceeding USD 13.9 billion. Our reach extends across 85 countries and six continents.
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Board of Directors */}
        <div className="max-w-5xl mx-auto mb-24 animate-stagger-2">
          <div className="text-center mb-16">
            <Users className="w-16 h-16 text-brand-blue mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-brand-blue">Board of Directors</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our board brings together experienced leaders with deep expertise in capital markets, 
              banking, and international finance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member, index) => (
              <GlassCard 
                key={index}
                className="p-6 transition-all duration-500 hover:shadow-xl hover:shadow-[#0017BF]/20 hover:scale-105"
              >
                <h4 className="text-lg font-bold text-foreground mb-2">{member.name}</h4>
                <p className="text-brand-blue font-semibold text-sm mb-1">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.type}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* The Team */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-blue">The Team</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Meet the dedicated professionals driving our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GlassCard className="p-6 transition-all duration-500 hover:shadow-xl hover:shadow-[#0017BF]/20 hover:scale-105">
              <h4 className="text-lg font-bold text-foreground mb-2">Mary Maloba</h4>
              <p className="text-brand-blue font-semibold text-sm">Ag. CEO & Compliance Manager</p>
            </GlassCard>

            <GlassCard className="p-6 transition-all duration-500 hover:shadow-xl hover:shadow-[#0017BF]/20 hover:scale-105">
              <h4 className="text-lg font-bold text-foreground mb-2">Lemek Oltele</h4>
              <p className="text-brand-blue font-semibold text-sm">Head of Business Development</p>
            </GlassCard>

            <GlassCard className="p-6 transition-all duration-500 hover:shadow-xl hover:shadow-[#0017BF]/20 hover:scale-105">
              <h4 className="text-lg font-bold text-foreground mb-2">Priscilla Gichuhi</h4>
              <p className="text-brand-blue font-semibold text-sm">Head of Finance, HR & Administration</p>
            </GlassCard>

            <GlassCard className="p-6 transition-all duration-500 hover:shadow-xl hover:shadow-[#0017BF]/20 hover:scale-105">
              <h4 className="text-lg font-bold text-foreground mb-2">Nina Goswami</h4>
              <p className="text-brand-blue font-semibold text-sm">Head Manager Equity Trading</p>
            </GlassCard>

            <GlassCard className="p-6 transition-all duration-500 hover:shadow-xl hover:shadow-[#0017BF]/20 hover:scale-105">
              <h4 className="text-lg font-bold text-foreground mb-2">Veronica Wambua</h4>
              <p className="text-brand-blue font-semibold text-sm">Customer Experience Manager</p>
            </GlassCard>

            <GlassCard className="p-6 transition-all duration-500 hover:shadow-xl hover:shadow-[#0017BF]/20 hover:scale-105">
              <h4 className="text-lg font-bold text-foreground mb-2">Samuel Kimani</h4>
              <p className="text-brand-blue font-semibold text-sm">Chief Accountant CPAII</p>
            </GlassCard>

            <GlassCard className="p-6 transition-all duration-500 hover:shadow-xl hover:shadow-[#0017BF]/20 hover:scale-105">
              <h4 className="text-lg font-bold text-foreground mb-2">Ngige Jeff Wanjao</h4>
              <p className="text-brand-blue font-semibold text-sm">Wealth Management Professional</p>
            </GlassCard>

            <GlassCard className="p-6 transition-all duration-500 hover:shadow-xl hover:shadow-[#0017BF]/20 hover:scale-105">
              <h4 className="text-lg font-bold text-foreground mb-2">Peter Chege</h4>
              <p className="text-brand-blue font-semibold text-sm">IT and Product Development Manager</p>
            </GlassCard>

            <GlassCard className="p-6 transition-all duration-500 hover:shadow-xl hover:shadow-[#0017BF]/20 hover:scale-105">
              <h4 className="text-lg font-bold text-foreground mb-2">Samuel Mburu Kinuthia</h4>
              <p className="text-brand-blue font-semibold text-sm">Project Support Lead</p>
            </GlassCard>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 animate-stagger-3">
          {values.map((value, index) => (
            <GlassCard key={index} hover3d>
              <div className="flex flex-col items-center text-center space-y-4">
                {value.icon}
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Regulatory Info */}
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Regulatory Status</h2>
            <p className="text-muted-foreground">
              AIB-AXYS Africa Limited is a licensed Stockbroker, 
              regulated by the Capital Markets Authority (CMA). Member of the Nairobi Securities Exchange (NSE) 
              and the Central Depository and Settlement Corporation (CDSC).
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
