'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Apple, Play } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function PlatformsPage() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Content - Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Logo instead of text title */}
            <div className="w-full max-w-md">
              <Image
                src={theme === 'dark' ? '/digitrader-logo-dark.png' : '/digitrader-logo-light.png'}
                alt="Digitrader"
                width={600}
                height={150}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Our Online Share Trading Platform (OST) is built to increase accessibility and proximity to stock brokerage services as it allows for secure e-transactions, real time market prices and order placement and most importantly, a 24-hour access to the account.
              </p>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Through the OST, investors are able to access various reports such as portfolio valuations, transaction statements and stock holding reports via their mobile phones and web portal. Through this platform, clients are able to fund their trading accounts, receive payments and get market data from their mobile devices.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="https://apps.apple.com/ke/app/aib-digitrader/id1481199787"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex items-center gap-3 px-6 py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Apple className="w-7 h-7" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-base font-bold">App Store</div>
                  </div>
                </div>
              </Link>
              
              <Link 
                href="https://play.google.com/store/apps/details?id=com.AibCapital.AibCapitalOnline"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex items-center gap-3 px-6 py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Play className="w-7 h-7 fill-current" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">GET IT ON</div>
                    <div className="text-base font-bold">Google Play</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column - Phone Mockup (Single Image with Both Phones) */}
          <div className="relative flex items-center justify-center animate-stagger-1">
            <div className="relative w-full max-w-2xl">
              <Image
                src="/app-mockup-2.png"
                alt="Digitrader Mobile App"
                width={1000}
                height={1000}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
