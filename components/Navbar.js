'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbarLogo, setShowNavbarLogo] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    // Only apply scroll logic on home page
    if (!isHomePage) {
      setShowNavbarLogo(true);
      return;
    }

    const handleScroll = () => {
      // Show navbar logo when scrolled past 200px (only on home page)
      if (window.scrollY > 200) {
        setShowNavbarLogo(true);
      } else {
        setShowNavbarLogo(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'IPO', href: '/ipo' },
    { name: 'Leverage', href: '/leverage' },
    { name: 'Platforms', href: '/platforms' },
    { name: 'About', href: '/about' },
    { name: 'Research', href: '/research' },
    { name: 'Global Markets', href: '/global-markets' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass dark:glass">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Always visible on non-home pages, fade in on scroll on home page */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={theme === 'dark' 
                ? 'https://customer-assets.emergentagent.com/job_33cba548-cc10-4443-ba2a-5d85d6be63d5/artifacts/83rf6q6x_NEW%20AIB%20AXYS%20AFRICA%20LOGO%20DARK%20BG.svg'
                : 'https://customer-assets.emergentagent.com/job_33cba548-cc10-4443-ba2a-5d85d6be63d5/artifacts/c84w37kp_NEW%20AIB%20AXYS%20AFRICA%20LOGO%20WHITE%20BG.svg'
              }
              alt="AIB-AXYS Africa Logo"
              width={180}
              height={60}
              className={`h-12 w-auto transition-all duration-500 ${
                showNavbarLogo ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg glass hover:bg-primary/20 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-primary" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg glass hover:bg-primary/20 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-primary" />
              ) : (
                <Menu className="w-5 h-5 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 py-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;