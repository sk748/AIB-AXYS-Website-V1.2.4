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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mary Maloba */}
            <GlassCard className="p-6">
              <h4 className="text-xl font-bold text-foreground mb-2">Ms. Mary Maloba</h4>
              <p className="text-brand-blue font-semibold text-sm mb-3">Ag. CEO & Compliance Manager</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Mary joined our team, bringing along with her a wealth of experience, having worked at Barclays Bank and Standard Chartered Bank Operations for a combined period of over 30 years. She possesses a broad range of specialist knowledge in the securities market in fund management, banking, custody services and stockbrokerage. She ensures that the company complies with all regulatory requirements while also serving as a risk manager. Her wide background in finance allows her to design effective controls to identify and mitigate key risks. She has International Capital Markets Qualification from Chartered Securities UK, banking and ATS certified by Nairobi Securities Exchange.
              </p>
            </GlassCard>

            {/* Lemek Oltele */}
            <GlassCard className="p-6">
              <h4 className="text-xl font-bold text-foreground mb-2">Mr. Lemek Oltele</h4>
              <p className="text-brand-blue font-semibold text-sm mb-3">Head of Business Development</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Lemek joins the team as the Head of Business Development, bringing with him over 16 years of experience in wealth management, investment advisory, and corporate banking, having worked in senior management roles at KCB Bank, SIB Bank, Acorn Holdings Africa, and Moran Capital Ltd. He possesses a broad range of specialist knowledge in private banking, diaspora investments, and the design of bespoke investment strategies. Driven by a passion for financial inclusion, he leads strategic initiatives to develop scalable growth solutions that bridge capital and opportunity across Africa. His background allows him to help individuals and institutions effectively build, preserve, and transfer wealth. He holds a Bachelor of Commerce in Finance from the University of Nairobi and is a Certified Public Accountant (CPA) and Certified Investment & Financial Analyst (CIFA).
              </p>
            </GlassCard>

            {/* Priscilla Gichuhi */}
            <GlassCard className="p-6">
              <h4 className="text-xl font-bold text-foreground mb-2">Ms. Priscilla Gichuhi</h4>
              <p className="text-brand-blue font-semibold text-sm mb-3">Head of Finance, HR & Administration</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Drawing from over 9 years of hands-on experience in financial services and manufacturing, Priscilla excels in steering revenue growth through meticulous financial planning and analysis. Her skill set encompasses the development and implementation of effective financial policies, precise budget management, and ensuring adherence to regulatory standards. She has a proven track record in optimizing financial resources, navigating successful audits, and elevating operational efficiency. In addition to her financial prowess, she has been instrumental in streamlining administrative processes, ensuring a harmonious organizational workflow. Her holistic approach positions her as a dynamic leader for the Finance, HR and Administration role. She is a Certified Public Accountant and holds a Bachelor of Commerce (Finance).
              </p>
            </GlassCard>

            {/* Nina Goswami */}
            <GlassCard className="p-6">
              <h4 className="text-xl font-bold text-foreground mb-2">Ms. Nina Goswami</h4>
              <p className="text-brand-blue font-semibold text-sm mb-3">Head Manager Equity Trading</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nina has over twenty-five years' experience in stock broking industry with years of experience in research, operations and dealing. She manages Client portfolios, buying and selling shares on behalf of clients. She also analyses Client business and gives investment advice based on market trends. In addition to financial advice, she is also involved marketing products for our Mauritius partner AXYS.
              </p>
            </GlassCard>

            {/* Veronica Wambua */}
            <GlassCard className="p-6">
              <h4 className="text-xl font-bold text-foreground mb-2">Ms. Veronica Wambua</h4>
              <p className="text-brand-blue font-semibold text-sm mb-3">Customer Experience Manager</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Veronica has over fifteen years' experience in front office stock broking services rising up the ranks from Receptionist, PA, and Registrar Officer to Customer Care Manager. Her duties include overseeing the opening and closing CDS accounts, taking buy and sell orders, transmissions, immobilizations, placing and lifting of liens and private transfers. Veronica joined AIB in June 2006.
              </p>
            </GlassCard>

            {/* Samuel Kimani */}
            <GlassCard className="p-6">
              <h4 className="text-xl font-bold text-foreground mb-2">Samuel Kimani</h4>
              <p className="text-brand-blue font-semibold text-sm mb-3">Chief Accountant CPAII</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kimani has over fifteen years' experience in the financial services sector, having worked for insurance firms such as Kenyan Alliance Insurance and ICEA in their respective accounts departments. Kimani joined AIB in October 2008 as an accountant.
              </p>
            </GlassCard>

            {/* Ngige Jeff Wanjao */}
            <GlassCard className="p-6">
              <h4 className="text-xl font-bold text-foreground mb-2">Mr. Ngige Jeff Wanjao</h4>
              <p className="text-brand-blue font-semibold text-sm mb-3">Wealth Management Professional</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ngige is a wealth management professional and Advocate of the High Court of Kenya, working with institutional, corporate, and private investors regarding capital allocation, offshore investment strategy, and commercial deal execution. He possesses a broad range of specialist knowledge spanning diverse sectors including legal services, transaction advisory, infrastructure, fintech, and the capital markets. His background encompasses business development, stakeholder management, and regulatory-aligned execution, allowing him to effectively integrate legal, commercial, and investment considerations. He holds an LL.B. from Strathmore Law School, a Postgraduate Diploma in Law from the Kenya School of Law, and a Masterclass Certificate from the NSE Academy.
              </p>
            </GlassCard>

            {/* Peter Chege */}
            <GlassCard className="p-6">
              <h4 className="text-xl font-bold text-foreground mb-2">Peter Chege</h4>
              <p className="text-brand-blue font-semibold text-sm mb-3">IT and Product Development Manager</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Master's in Information Systems, University of Nairobi (ongoing)
              </p>
            </GlassCard>

            {/* Samuel Mburu Kinuthia */}
            <GlassCard className="p-6">
              <h4 className="text-xl font-bold text-foreground mb-2">Samuel Mburu Kinuthia</h4>
              <p className="text-brand-blue font-semibold text-sm mb-3">Project Support Lead</p>
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

        {/* Key Differentiators */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Why Choose Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <GlassCard key={index} className="p-6">
                <h3 className="text-lg font-bold text-brand-blue mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </GlassCard>
            ))}
          </div>
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
