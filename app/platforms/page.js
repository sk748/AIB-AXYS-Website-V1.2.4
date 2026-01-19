'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Apple, Play } from 'lucide-react';

export default function PlatformsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Content - Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-brand-blue dark:text-[#4169E1]">
              Digitrader
            </h1>

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

          {/* Right Column - Phone Mockups */}
          <div className="relative flex items-center justify-center animate-stagger-1">
            <div className="relative w-full max-w-2xl">
              {/* Phone Mockup Images */}
              <div className="relative flex items-center justify-center gap-4 md:gap-8">
                {/* App Screen Phone */}
                <div className="relative w-1/2 max-w-[280px] transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/phone-mockup-app.png"
                    alt="Digitrader App Interface"
                    width={500}
                    height={1000}
                    className="w-full h-auto drop-shadow-2xl"
                    priority
                  />
                </div>
                
                {/* Splash Screen Phone */}
                <div className="relative w-1/2 max-w-[280px] transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/phone-mockup-splash.png"
                    alt="Digitrader Splash Screen"
                    width={500}
                    height={1000}
                    className="w-full h-auto drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Branding */}
        <div className="mt-20 pt-12 border-t border-border/50">
          <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
            {/* AXYS Logo */}
            <div className="w-32 md:w-40">
              <Image
                src="/axys-logo.png"
                alt="AXYS"
                width={200}
                height={80}
                className="w-full h-auto dark:hidden"
              />
              <Image
                src="/axys-logo-dark.png"
                alt="AXYS"
                width={200}
                height={80}
                className="w-full h-auto hidden dark:block"
              />
            </div>

            {/* AIB AXYS Logo */}
            <div className="w-40 md:w-48">
              <Image
                src="/nwt-logo.png"
                alt="AIB AXYS Africa"
                width={250}
                height={80}
                className="w-full h-auto dark:hidden"
              />
              <Image
                src="/nwt-logo-light.png"
                alt="AIB AXYS Africa"
                width={250}
                height={80}
                className="w-full h-auto hidden dark:block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
