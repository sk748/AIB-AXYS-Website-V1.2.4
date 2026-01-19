'use client';

import { useState } from 'react';
import GlassCard from '@/components/GlassCard';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'Account & Trading Basics',
      questions: [
        {
          q: 'What is a CDS Account?',
          a: 'A CDS (Central Depository System) account is where your shares are held electronically after buying or selling on the Nairobi Securities Exchange (NSE). To trade shares, you must open a CDS account through a Capital Markets Authority (CMA)-licensed stockbroker such as AIB-AXYS Africa.',
        },
        {
          q: 'How do I open a CDS / Share Trading Account?',
          a: 'You can open an account in two ways:\n\nOnline (Recommended):\n• Download the AIB DigiTrader App from Google Play, Apple App Store, or Windows Store\n• Or visit www.aib-axysafrica.com and click Open New Trading Account\n• No document uploads required\n• You\'ll receive your CDS number instantly\n\nIn-Person:\nVisit our offices with:\n• Copy of National ID\n• Copy of KRA PIN\n• Two passport photos\n• Bank details (statement or ATM card)',
        },
        {
          q: 'What are the charges for buying and selling shares?',
          a: 'Via AIB DigiTrader:\n• Annual fee: KES 200\n• Total trading fee: 1.64%\n\nPaper-based Accounts:\n• Annual maintenance fee: KES 1,000\n• Trading fee: 2.1% for trades below KES 100,000, 1.8% for trades above KES 100,000 (Stamp duty excluded)',
        },
        {
          q: 'What is the minimum amount I need to start investing?',
          a: 'Minimum initial deposit: KES 3,000. This is not a fee, but your investment capital. There is no minimum for future deposits.',
        },
        {
          q: 'What is the minimum number of shares I can buy?',
          a: 'You can buy as little as one share. Less than 100 shares is called an Odd Lot, while 100 shares and above is a Normal Lot.',
        },
      ],
    },
    {
      category: 'Deposits & Withdrawals',
      questions: [
        {
          q: 'How do I deposit money into my trading account?',
          a: 'MPESA:\n• Paybill: 548800\n• Account Number: Your CDSC number (omit leading zeros)\n\nBank Deposit:\n• Deposit into our bank account\n• Email proof of payment to info@aib-axysafrica.com\n\nYou can also fund your account directly through the DigiTrader platform.',
        },
        {
          q: 'How soon can I withdraw money after selling shares?',
          a: 'NSE settlement period is T+3 working days. You can withdraw funds on the 4th day. Unused funds cannot be withdrawn due to AML regulations.',
        },
        {
          q: 'Can I invest using Bonga Points?',
          a: 'Yes!\nSteps:\n1. Dial *126#\n2. Select Lipa na Bonga\n3. Enter Paybill 548800\n4. Use your CDSC number (omit zeros)\n5. Confirm amount\n\nConversion rate: 5 Bonga Points = KES 1',
        },
      ],
    },
    {
      category: 'Trading & Investments',
      questions: [
        {
          q: 'How do I choose which shares to invest in?',
          a: 'We provide:\n• Weekly stock recommendations by our Research Team (Value & Speculative)\n• Available on our website under Research → Stock Recommendations\n• WhatsApp & Telegram investor communities\n• Free Friday investor trainings\n• Simplified investment videos on our YouTube Channel',
        },
        {
          q: 'Can I buy and sell shares on the same day?',
          a: 'Yes. This is called Intraday Trading. If the order doesn\'t execute within the trading session, it automatically converts to T+3 settlement.',
        },
        {
          q: 'How do dividends work?',
          a: 'You qualify for dividends if you own shares before the register closure date. Dividends can be paid via:\n• Bank transfer\n• Cheque\n• MPESA (available for select registrars)',
        },
        {
          q: 'How long before my account becomes dormant?',
          a: 'Your account is considered dormant after 12 months with no trading activity.',
        },
      ],
    },
    {
      category: 'Share Transfers & Special Services',
      questions: [
        {
          q: 'How do I transfer shares from another broker?',
          a: 'Request a share transfer form from your current broker or bank and submit it to AIB-AXYS Africa for processing.',
        },
        {
          q: 'What is share immobilization?',
          a: 'Immobilization is the process of converting physical share certificates into electronic form.\n\nRequired documents:\n• Original share certificate\n• CDS2 form\n• Copy of ID\n• Bank statement\n• Dividend notice',
        },
        {
          q: 'What is share transmission?',
          a: 'Transmission is the transfer of shares from a deceased shareholder to their beneficiaries. Requirements include:\n• Death certificate\n• Share certificate\n• IDs of beneficiaries\n• Letter of Administration\n\nThe process may take up to 6 months.',
        },
        {
          q: 'Can I get a loan using my shares?',
          a: 'Yes. This is known as a lien.\n• Shares are frozen as collateral\n• Processing fee: KES 1,000\n• Loan value depends on the worth of your shares',
        },
      ],
    },
    {
      category: 'KPC IPO - Overview',
      questions: [
        {
          q: 'What is the offer price and what does it mean for investors?',
          a: 'The offer price for the KPC IPO is KES 9.00 per share. This is the price investors will pay to acquire one ordinary share of Kenya Pipeline Company during the IPO period. Once listed, the share price will be determined by market demand and supply on the NSE.',
        },
        {
          q: 'What is the par value of a KPC share?',
          a: 'The par value is KES 0.02 per share.',
        },
        {
          q: 'How many shares is KPC offering to the public?',
          a: 'KPC is offering 11,812,644,350 ordinary shares to investors. This represents the portion of the company being made available to the public as part of the listing.',
        },
        {
          q: 'What were KPC\'s earnings in the last financial year?',
          a: 'For the 12 months ended 30 June 2025, KPC recorded:\n• Earnings Per Share (EPS): KES 0.4122 (post share split)\n• EPS shows how much profit the company generated per share',
        },
        {
          q: 'Did KPC pay dividends?',
          a: 'Yes. KPC paid a Dividend Per Share (DPS) of KES 0.3247 for FY2025. This means shareholders received KES 0.3247 in cash for every share held.',
        },
        {
          q: 'How attractive is the IPO valuation?',
          a: 'At the offer price, KPC is valued at an implied EV/EBITDA multiple of 8.1x. This metric compares the company\'s value to its operating earnings and is commonly used to assess whether an IPO is fairly valued relative to peers.',
        },
      ],
    },
    {
      category: 'KPC IPO - Important Dates',
      questions: [
        {
          q: 'When does the KPC IPO open and close?',
          a: 'Offer Opens: 19 January 2026\nOffer Closes: 19 February 2026\n\nThe offer period may be extended or shortened, subject to approval by the Capital Markets Authority (CMA).',
        },
        {
          q: 'When will investors know if their application was successful?',
          a: 'Allocation results will be announced on 4 March 2026. Successful applicants will receive shares, while unsuccessful or partially successful applicants will receive refunds.',
        },
        {
          q: 'When will shares be credited to CDS accounts?',
          a: 'Shares will be electronically credited to investors\' CDS accounts on 6 March 2026, enabling investors to view and trade their holdings.',
        },
        {
          q: 'When will refunds be processed?',
          a: 'Refunds will be processed on 6 March 2026, at the same time shares are credited to successful applicants.',
        },
        {
          q: 'When will KPC shares start trading on the NSE?',
          a: 'Trading of KPC shares on the Nairobi Securities Exchange will commence on 9 March 2026. From this date, investors can buy or sell KPC shares on the open market.',
        },
      ],
    },
    {
      category: 'KPC IPO - How to Participate',
      questions: [
        {
          q: 'Do I need a CDS Account to participate in the KPC IPO?',
          a: 'Yes. Before you can apply for KPC shares, you must have a valid CDS (Central Depository System) account. This is the electronic account where your shares will be held once allotted. If you don\'t have one, open it through a licensed stockbroker before applying.',
        },
        {
          q: 'What are my ways to apply for the KPC IPO?',
          a: 'You can apply in two convenient ways:\n\nVia USSD (Mobile):\n• Dial *483*816# on your Kenyan mobile number\n• Read and accept the IPO terms and conditions\n• Choose "New Application" and follow the prompts\n• Enter your CDS account number and complete payment\n\nOnline via the Official IPO Portal:\n• Visit https://kpcipo.e-offer.app/\n• Click Apply for Shares or New Application\n• Enter your CDS account number, investor type and contact details\n• Complete the application form and make payment\n• Upload proof of payment if required',
        },
        {
          q: 'Is there a minimum amount to apply for the KPC IPO?',
          a: 'Yes. The minimum application is 100 shares, which at an offer price of KES 9.00 per share means you can start investing for as little as KES 900.',
        },
        {
          q: 'Can anyone participate in the KPC IPO?',
          a: 'The offer is open to:\n• Kenyan retail investors\n• Institutional investors\n• East African investors\n• International investors\n• Oil marketing companies\n• Eligible KPC employees\n\n(Participation may be subject to regulatory limits and eligibility requirements approved by the Capital Markets Authority.)',
        },
        {
          q: 'When is the KPC IPO offer period?',
          a: 'Offer Opens: 19 January 2026 at 9:00 AM\nOffer Closes: 19 February 2026 at 5:00 PM\n\nMake sure your application and payment are submitted before the close date to be eligible.',
        },
      ],
    },
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`animate-stagger-${Math.min(categoryIndex + 1, 4)}`}>
              <h2 className="text-2xl font-bold gradient-text mb-4">{category.category}</h2>
              <GlassCard className="p-0 overflow-hidden">
                {category.questions.map((faq, questionIndex) => {
                  const isOpen = openIndex === `${categoryIndex}-${questionIndex}`;
                  return (
                    <div key={questionIndex} className="border-b border-border last:border-b-0">
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-primary/5 transition-colors duration-200"
                      >
                        <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4 text-muted-foreground leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto mt-16">
          <GlassCard className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Contact us for personalized assistance.
            </p>
            <a href="/contact">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-98">
                Contact Us
              </button>
            </a>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
