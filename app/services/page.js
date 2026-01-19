'use client';

import GlassCard from '@/components/GlassCard';
import { TrendingUp, DollarSign, Globe, FileText, Users, BarChart3 } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <TrendingUp className="w-12 h-12 text-[#00BCD4]" />,
      title: 'Local Stocks',
      description: 'Access to buy and sell shares of companies listed on the Nairobi Securities Exchange. Our experienced Equities dealers act with integrity, professionalism, and in your best interest to facilitate informed and timely investment decisions.',
      features: [
        'Trade on Nairobi Securities Exchange',
        'Experienced equity dealers',
        'DigiTrader - Kenya\'s first fully automated trading platform',
        'Open CDSC accounts and trade from home',
        'Precise and timely order execution'
      ]
    },
    {
      icon: <DollarSign className="w-12 h-12 text-[#00BCD4]" />,
      title: 'Bonds Trading',
      description: 'The Bonds Dealing Desk offers investors access to Fixed Income securities including T-bills, T-bonds, and Corporate bonds. Our bond dealers have over 20 years of combined experience in the Kenyan market.',
      features: [
        'Access to T-bills, T-bonds, and Corporate bonds',
        'Primary and secondary market access',
        'Expert dealers with 20+ years experience',
        'Regular insights on interest rate movements',
        'First-class trade execution'
      ]
    },
    {
      icon: <Globe className="w-12 h-12 text-[#00BCD4]" />,
      title: 'Global Markets Execution',
      description: 'Access over 1,000 international physical securities from prestigious global exchanges including NYSE, NASDAQ, LSE, and HKEX. Diversify your portfolio with global assets across multiple industries and geographies.',
      features: [
        '1,000+ international securities',
        'NYSE, NASDAQ, LSE, HKEX access',
        'Global equities, bonds, and ETFs',
        'Portfolio diversification opportunities',
        'Access to top-performing global companies'
      ]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-[#00BCD4]" />,
      title: 'Offshore Funds Access',
      description: 'Seamless access to world-class offshore investment opportunities designed for long-term value creation, transparency, and investor confidence.',
      features: [
        'Dynamic Global Equity Feeder Fund',
        'Axiom Africa Equity Fund',
        'Portfolio diversification beyond local markets',
        'Long-term value creation focus',
        'Access to global and African opportunities'
      ]
    },
    {
      icon: <FileText className="w-12 h-12 text-[#00BCD4]" />,
      title: 'Market Insights',
      description: 'Independent, data-driven research with comprehensive, in-depth market analysis leveraging our deep expertise in the Kenyan Capital Markets and insights from world-class partners.',
      features: [
        'Independent, data-driven research',
        'Comprehensive market analysis',
        'Partners: Tellimer, S&P Global, AlphaSense',
        'Bloomberg and LSEG insights',
        'Actionable recommendations'
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-[#00BCD4]" />,
      title: 'Portfolio Advisory',
      description: 'Expert guidance for High Net Worth Individuals, Corporates, and Institutional investors. We construct and design investment portfolios tailored to your specific needs and risk profiles.',
      features: [
        'Tailored portfolio construction',
        'Dedicated wealth/relationship managers',
        'Asset allocation guidance',
        'Diversification strategies',
        'Growth-focused portfolio building'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive investment solutions tailored to your financial goals. 
            From local stocks to global markets, we provide the expertise and platforms you need to succeed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <GlassCard key={index} hover3d className="p-8 animate-stagger-1">
              <div className="flex flex-col space-y-4">
                {/* Icon */}
                <div className="flex justify-center mb-2">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-center text-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 pt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <span className="text-[#00BCD4] mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center animate-stagger-3">
          <GlassCard className="p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let our experienced team help you navigate the markets and achieve your investment goals.
            </p>
            <a href="/contact">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-98">
                Contact Us Today
              </button>
            </a>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
