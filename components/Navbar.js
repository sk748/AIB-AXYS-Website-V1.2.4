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
  const [pageVisibility, setPageVisibility] = useState({});
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    // Fetch page visibility settings
    fetchPageVisibility();
  }, []);

  const fetchPageVisibility = async () => {
    try {
      const response = await fetch('/api/page-visibility');
      const data = await response.json();
      setPageVisibility(data.settings || {});
    } catch (error) {
      console.error('Error fetching page visibility:', error);
    }
  };

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

  const allNavLinks = [
    { name: 'Home', href: '/', pageName: 'home' },
    { name: 'About', href: '/about', pageName: 'about' },
    { name: 'Group', href: '/group', pageName: 'group' },
    { name: 'Platforms', href: '/platforms', pageName: 'platforms' },
    { name: 'Services', href: '/services', pageName: 'services' },
    { name: 'Research', href: '/research', pageName: 'research' },
    { name: 'IPO', href: '/ipo', pageName: 'ipo' },
    { name: 'Leverage', href: '/leverage', pageName: 'leverage' },
    { name: 'FAQ', href: '/faq', pageName: 'faq' },
    { name: 'Contact', href: '/contact', pageName: 'contact' },
  ];

  // Filter nav links based on visibility settings
  const navLinks = allNavLinks.filter(link => {
    const visibility = pageVisibility[link.pageName];
    // Show if no settings loaded yet (default) or if showInNav is true
    return !visibility || visibility.showInNav !== false;
  });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#0a0a0f]/60 border-b border-gray-200/20 dark:border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Always visible on non-home pages, fade in on scroll on home page */}
          <Link href="/" className="flex items-center space-x-2 w-[180px]">
            <Image
              src={theme === 'dark' 
                ? '/aib-axys-logo-dark.svg'
                : '/aib-axys-logo-light.svg'
              }
              alt="AIB-AXYS Africa Logo"
              width={180}
              height={60}
              className={`h-12 w-auto transition-all duration-500 ${
                showNavbarLogo ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground dark:text-white hover:text-primary dark:hover:text-white transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4 w-[180px] justify-end">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg glass hover:bg-primary/20 dark:hover:bg-white/20 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-white" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg glass hover:bg-primary/20 dark:hover:bg-white/20 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-primary dark:text-white" />
              ) : (
                <Menu className="w-5 h-5 text-primary dark:text-white" />
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
                  className="text-sm font-medium text-foreground dark:text-white hover:text-primary dark:hover:text-white transition-colors duration-200 py-2"
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