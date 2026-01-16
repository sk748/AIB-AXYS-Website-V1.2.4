'use client';

import GlassCard from '@/components/GlassCard';
import { Target, Eye, Award, Users } from 'lucide-react';
import { teamData } from '@/data/teamData';

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-[#0017BF]" />,
      title: 'Our Mission',
      description:
        'To democratize access to financial markets across Africa, providing cutting-edge trading solutions and expert guidance.',
    },
    {
      icon: <Eye className="w-8 h-8 text-[#0017BF]" />,
      title: 'Our Vision',
      description:
        'To become the leading stock brokerage firm in East Africa, empowering investors with world-class trading infrastructure.',
    },
    {
      icon: <Award className="w-8 h-8 text-[#0017BF]" />,
      title: 'Our Values',
      description:
        'Integrity, transparency, innovation, and client-centricity guide every decision we make and service we provide.',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">About AIB-AXYS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in African financial markets
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-stagger-1">
          <GlassCard className="p-8">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded over 15 years ago, AIB-AXYS Africa has grown from a small brokerage firm into one of Kenya's
                leading stock trading platforms. Our journey has been defined by a commitment to excellence,
                innovation, and empowering our clients to achieve their financial goals.
              </p>
              <p>
                We've facilitated thousands of trades, guided countless investors through IPO processes, and provided
                access to global markets. Our team of experienced professionals combines deep market knowledge with
                cutting-edge technology to deliver exceptional service.
              </p>
              <p>
                Today, we serve over 5,000 clients across Kenya and East Africa, offering comprehensive trading
                solutions including IPO applications, leveraged trading, global market access, and expert research.
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Team Section - Centered */}
        <div className="max-w-5xl mx-auto mb-16 animate-stagger-2">
          <div className="text-center mb-12">
            <Users className="w-16 h-16 text-[#0017BF] mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-[#0017BF]">Key Personnel</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our dedicated team of financial experts, market analysts, and technology professionals work tirelessly
              to provide you with the best trading experience.
            </p>
          </div>

          {/* Management Team */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0017BF] mb-6 text-center">Leadership</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {teamData.management.map((member) => (
                <GlassCard 
                  key={member.id}
                  className="p-6 transition-all duration-500 hover:shadow-xl hover:shadow-[#0017BF]/20 hover:scale-105"
                >
                  <h4 className="text-xl font-bold text-foreground mb-2">{member.name}</h4>
                  <p className="text-[#0017BF] font-semibold">{member.role}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Team Members */}
          <div>
            <h3 className="text-2xl font-bold text-[#0017BF] mb-6 text-center">Heads of Department</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamData.team.map((member) => (
                <GlassCard 
                  key={member.id}
                  className="p-6 transition-all duration-500 hover:shadow-xl hover:shadow-[#0017BF]/20 hover:scale-105"
                >
                  <h4 className="text-lg font-bold text-foreground mb-2">{member.name}</h4>
                  <p className="text-[#0017BF] font-semibold text-sm">{member.role}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-stagger-3">
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
      </div>
    </div>
  );
}