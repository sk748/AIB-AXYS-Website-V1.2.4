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
          a: 'You can open an account by visiting our office in Nairobi or contacting us through our website. You will need to provide identification documents (National ID or Passport), proof of address, and complete our KYC (Know Your Customer) forms.',
        },
        {
          q: 'What documents do I need to register?',
          a: 'You will need: a valid National ID or Passport, proof of residence (utility bill or bank statement not older than 3 months), a passport-sized photograph, and your KRA PIN certificate.',
        },
        {
          q: 'How long does account opening take?',
          a: 'Once all required documents are submitted, your account is typically activated within 24-48 business hours.',
        },
      ],
    },
    {
      category: 'Trading & IPOs',
      questions: [
        {
          q: 'How do I apply for an IPO?',
          a: 'Once you have an active trading account with us, you can apply for IPOs through our Digitrader mobile app or by contacting your account manager. We will guide you through the application process and required documentation.',
        },
        {
          q: 'What is the minimum investment for IPOs?',
          a: 'The minimum investment varies by IPO. Each IPO has its own minimum application amount and lot size, which is specified in the prospectus. We recommend checking the specific IPO details or contacting us for current offerings.',
        },
        {
          q: 'How do I check my IPO allocation?',
          a: 'You can check your IPO allocation through the Digitrader app, by logging into your account on our website, or by contacting our customer support team.',
        },
      ],
    },
    {
      category: 'Leverage Trading',
      questions: [
        {
          q: 'What leverage options do you offer?',
          a: 'We offer leverage up to 5x (1:4) for qualified investors. Leverage trading is subject to eligibility requirements and risk assessment.',
        },
        {
          q: 'What are the requirements for leverage trading?',
          a: 'Leverage trading requires: an active trading account, completion of our risk assessment questionnaire, minimum account balance requirements, and acknowledgment of leverage trading risks.',
        },
        {
          q: 'What are the risks of leverage trading?',
          a: 'Leverage amplifies both potential gains and losses. You could lose more than your initial investment. We recommend leverage trading only for experienced investors who understand the risks involved.',
        },
      ],
    },
    {
      category: 'Global Funds',
      questions: [
        {
          q: 'What global funds do you offer?',
          a: 'We offer several AXIOM funds including: AXIOM Equity Fund, AXIOM Yield Fund, AXIOM Africa Equity Fund, Dynamic Global Equity, and AXIOM Patrimoine. Each fund has different investment strategies and risk profiles.',
        },
        {
          q: 'How do I invest in global funds?',
          a: 'Contact our investment team to discuss your investment goals and risk tolerance. We will help you select the appropriate fund and guide you through the subscription process.',
        },
        {
          q: 'What are the minimum investment amounts for funds?',
          a: 'Minimum investment amounts vary by fund and share class. Please contact us or review the fund prospectus for specific details.',
        },
      ],
    },
    {
      category: 'Fees & Charges',
      questions: [
        {
          q: 'What are your brokerage fees?',
          a: 'Our brokerage fees are competitive and vary based on transaction volume. Please contact us for our current fee schedule.',
        },
        {
          q: 'Are there any account maintenance fees?',
          a: 'Account maintenance fees may apply depending on account type and activity level. Contact us for details specific to your account.',
        },
      ],
    },
    {
      category: 'Support & Contact',
      questions: [
        {
          q: 'What are your office hours?',
          a: 'Our office is open Monday to Friday, 9:00 AM to 5:00 PM East Africa Time. You can reach us by phone, email, or visit our Nairobi office.',
        },
        {
          q: 'How can I contact customer support?',
          a: 'You can reach us at +254 711 047 000, email info@aib-axysafrica.com, or visit our Contact page to send us a message.',
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
              <h2 className="text-2xl font-bold text-[#0017BF] mb-4">{category.category}</h2>
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
