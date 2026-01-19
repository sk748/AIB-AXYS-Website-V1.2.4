'use client';

import { useState } from 'react';
import GlassCard from '@/components/GlassCard';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'Account & Registration',
      questions: [
        {
          q: 'How do I open a trading account with AIB-AXYS Africa?',
          a: 'You can open an account by visiting our office in Nairobi or contacting us through our website. You will need to provide identification documents (National ID or Passport), proof of address, and complete our KYC (Know Your Customer) forms. Our team will guide you through the entire process.',
        },
        {
          q: 'What documents do I need to register?',
          a: 'You will need: a valid National ID or Passport, proof of residence (utility bill or bank statement not older than 3 months), a passport-sized photograph, and your KRA PIN certificate.',
        },
        {
          q: 'How long does account opening take?',
          a: 'Once all required documents are submitted, your account is typically activated within 24-48 business hours. If you need a CDSC account, we can help you open one immediately as part of our onboarding process.',
        },
        {
          q: 'What is a CDSC account?',
          a: 'A CDSC (Central Depository & Settlement Corporation) account is required to hold and trade shares on the Nairobi Securities Exchange. If you don\'t have one, AIB-AXYS Africa will help you open one during your account registration.',
        },
      ],
    },
    {
      category: 'IPO Applications',
      questions: [
        {
          q: 'How do I apply for an IPO?',
          a: 'Once you have an active trading account with us, you can apply for IPOs through our Digitrader mobile app or by contacting your account manager. We will guide you through the application process and required documentation.',
        },
        {
          q: 'What is the minimum investment for the Kenya Pipeline IPO?',
          a: 'The minimum application is 100 shares at KES 9.00 per share, meaning a minimum investment of KES 900. The lot size is also 100 shares.',
        },
        {
          q: 'What are the important dates for the Kenya Pipeline IPO?',
          a: 'Applications open on 19 January 2026, close on 19 February 2026, allocation results will be announced on 4 March 2026, and shares will be listed on 9 March 2026.',
        },
        {
          q: 'How do I check my IPO allocation?',
          a: 'You can check your IPO allocation through the Digitrader app, by logging into your account on our website, or by contacting our customer support team.',
        },
        {
          q: 'What happens if the IPO is oversubscribed?',
          a: 'If the IPO is oversubscribed, shares will be allocated proportionally and any refunds for oversubscription will be credited back to your account automatically.',
        },
      ],
    },
    {
      category: 'IPO Financing (Leverage)',
      questions: [
        {
          q: 'What is IPO Financing?',
          a: 'IPO Financing allows you to increase your investment capacity in IPOs by up to 5x (1:4 leverage). You deposit your Cash Cover, and we provide the additional funding to create your 100% funding pool.',
        },
        {
          q: 'How does the onboarding process work?',
          a: 'It\'s simple: express your interest and sign a single Master Document Pack. If you don\'t have a CDSC account, we\'ll help you open one immediately. Once approved, a dedicated transaction account is opened for you.',
        },
        {
          q: 'What are the requirements for IPO Financing?',
          a: 'Requirements include an active trading account, completion of our risk assessment, minimum cash cover deposit, and acknowledgment of the terms and conditions. Contact us for specific eligibility requirements.',
        },
        {
          q: 'How are refunds handled?',
          a: 'IPO refunds from oversubscription are credited back to your account automatically. When you\'re ready to sell, or if an exit trigger occurs, settlement is handled directly through the bank.',
        },
        {
          q: 'Is IPO Financing risky?',
          a: 'Leverage amplifies both potential gains and losses. The value of your investment can fluctuate, and you could receive back less than your original investment. We recommend IPO Financing only for experienced investors who understand the risks involved.',
        },
      ],
    },
    {
      category: 'Digitrader App',
      questions: [
        {
          q: 'Where can I download the Digitrader app?',
          a: 'Digitrader is available on both iOS and Android. Download from the Apple App Store or Google Play Store by searching for "AIB Digitrader".',
        },
        {
          q: 'What features does Digitrader offer?',
          a: 'Digitrader offers real-time market data, live notifications, one-tap trading, biometric security, portfolio tracking, advanced charting, custom indicators, and multi-account support.',
        },
        {
          q: 'Is Digitrader secure?',
          a: 'Yes, Digitrader uses bank-level encryption and biometric authentication (fingerprint/face ID) to keep your account secure at all times.',
        },
      ],
    },
    {
      category: 'Global Funds',
      questions: [
        {
          q: 'What global funds do you offer?',
          a: 'We offer several AXIOM funds including: AXIOM Equity Fund (AEF), AXIOM Yield Fund, AXIOM Africa Equity Fund, Dynamic Global Equity, and AXIOM Patrimoine. Each fund has different investment strategies and risk profiles.',
        },
        {
          q: 'How do I invest in global funds?',
          a: 'Contact our investment team to discuss your investment goals and risk tolerance. We will help you select the appropriate fund and guide you through the subscription process.',
        },
        {
          q: 'Where can I find fund documents?',
          a: 'Fund documents including factsheets, prospectuses, flyers, and net asset values are available on our Global Funds page. Contact us if you need additional information.',
        },
      ],
    },
    {
      category: 'Fees & Support',
      questions: [
        {
          q: 'What are your brokerage fees?',
          a: 'Our brokerage fees are competitive and vary based on transaction volume. Please contact us at +254 711 047000 for our current fee schedule.',
        },
        {
          q: 'What are your office hours?',
          a: 'Our office is open Monday to Friday, 9:00 AM to 5:00 PM East Africa Time. You can reach us by phone, email, or visit our Nairobi office.',
        },
        {
          q: 'How can I contact customer support?',
          a: 'You can reach us at +254 711 047000, email info@aib-axysafrica.com, or visit our Contact page to send us a message.',
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
