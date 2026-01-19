'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="bg-gray-50 dark:bg-[#0d1320] mt-20 py-12 border-t border-gray-200 dark:border-[#1e2a3d]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src={theme === 'dark' 
                  ? 'https://customer-assets.emergentagent.com/job_33cba548-cc10-4443-ba2a-5d85d6be63d5/artifacts/83rf6q6x_NEW%20AIB%20AXYS%20AFRICA%20LOGO%20DARK%20BG.svg'
                  : 'https://customer-assets.emergentagent.com/job_33cba548-cc10-4443-ba2a-5d85d6be63d5/artifacts/c84w37kp_NEW%20AIB%20AXYS%20AFRICA%20LOGO%20WHITE%20BG.svg'
                }
                alt="AIB-AXYS Africa Logo"
                width={160}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Leading stock trading platform in Kenya, specializing in IPOs, leveraged trading, and global fund access.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/group" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  AXYS Group
                </Link>
              </li>
              <li>
                <Link href="/platforms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Trading Platforms
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ipo" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  IPO Applications
                </Link>
              </li>
              <li>
                <Link href="/leverage" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  IPO Financing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-brand-blue" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>+254 711 047000</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-brand-blue" />
                <span>info@aib-axysafrica.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-brand-blue" />
                <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="border-t border-gray-200 dark:border-[#1e2a3d] mt-8 pt-8">
          <div className="space-y-4 text-xs text-muted-foreground leading-relaxed">
            {/* Risk Disclaimer */}
            <p>
              <strong>Risk Disclaimer:</strong> Investing in the Nairobi Securities Exchange (NSE) and global capital markets involves risk. 
              The value of stocks and fixed income instruments can fluctuate, and you may receive back less than your original investment. 
              Past performance of any security or research insight is not a reliable indicator of future results. 
              Please ensure you fully understand the risks involved or seek independent financial advice before trading.
            </p>
            
            {/* Regulatory Status */}
            <p>
              <strong>Regulatory Status:</strong> AIB-AXYS Africa Limited is a licensed Stockbroker, 
              regulated by the Capital Markets Authority (CMA). Member of the Nairobi Securities Exchange (NSE) and 
              the Central Depository and Settlement Corporation (CDSC).
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-[#1e2a3d] mt-6 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AIB-AXYS Africa Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
