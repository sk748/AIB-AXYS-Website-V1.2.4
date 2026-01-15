'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass dark:glass mt-20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">AIB-AXYS Africa</h3>
            <p className="text-sm text-muted-foreground">
              Leading stock trading platform in Kenya, specializing in IPOs, leveraged trading, and global market access.
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
                <Link href="/platforms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Trading Platforms
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Research
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
                  Leveraged Trading
                </Link>
              </li>
              <li>
                <Link href="/global-markets" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Global Markets
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@aib-axys.com</span>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="p-2 rounded-lg glass hover:bg-primary/20 transition-all duration-300">
                <Facebook className="w-4 h-4 text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg glass hover:bg-primary/20 transition-all duration-300">
                <Twitter className="w-4 h-4 text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg glass hover:bg-primary/20 transition-all duration-300">
                <Linkedin className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AIB-AXYS Africa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;