'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Apple, Play } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function PlatformsPage() {
  const { theme } = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  // Show content only when images are loaded
  const showContent = imageLoaded && logoLoaded;

  return (
    <>
      {/* Loading Screen */}
      {!showContent && (
        <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground">Loading...</p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`min-h-screen transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section - Full Viewport Height */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Logo and Buttons */}
            <div className="flex flex-col items-start justify-center space-y-12 md:pl-12 lg:pl-20">
              {/* Logo */}
              <div className="w-full max-w-xl animate-fade-up">
                <Image
                  src={theme === 'dark' ? '/digitrader-logo-dark-bg.png' : '/digitrader-logo-white-bg.png'}
                  alt="AIBAXYS DigiTrader"
                  width={1400}
                  height={350}
                  className="w-full h-auto"
                  priority
                  onLoad={() => setLogoLoaded(true)}
                />
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col gap-4 w-full max-w-xl animate-stagger-1">
                <Link 
                  href="https://apps.apple.com/ke/app/aib-digitrader/id1481199787"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full"
                >
                  <div className="flex items-center gap-3 px-6 py-4 bg-[#191970] dark:bg-white text-white dark:text-black rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full">
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
                  className="group w-full"
                >
                  <div className="flex items-center gap-3 px-6 py-4 bg-[#191970] dark:bg-white text-white dark:text-black rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full">
                    <Play className="w-7 h-7 fill-current" />
                    <div className="text-left">
                      <div className="text-xs opacity-80">Download on the</div>
                      <div className="text-base font-bold">Google Play</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Column - Phone Mockup */}
            <div className="relative flex items-center justify-center animate-stagger-2">
              <div className="relative w-full max-w-2xl">
                <Image
                  src="/app-mockup-2.png"
                  alt="Digitrader Mobile App"
                  width={1000}
                  height={1000}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section - Centered, Scroll to View */}
      <section className="min-h-[60vh] flex items-center justify-center py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-8 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-[#4169E1]">
              Online Share Trading Platform
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Our Online Share Trading Platform (OST) is built to increase accessibility and proximity to stock brokerage services as it allows for secure e-transactions, real time market prices and order placement and most importantly, a 24-hour access to the account.
              </p>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Through the OST, investors are able to access various reports such as portfolio valuations, transaction statements and stock holding reports via their mobile phones and web portal. Through this platform, clients are able to fund their trading accounts, receive payments and get market data from their mobile devices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
