'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Complete animation in just 300px scroll - much faster!
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / 300, 1);
      setScrollProgress(progress);
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation has two phases but completes quickly:
  // Phase 1 (0-0.6): Logo moves up and shrinks, stays centered
  // Phase 2 (0.6-1): Logo slides left to navbar position
  
  const getLogoStyles = () => {
    if (scrollProgress === 0) {
      // Start: large and centered in hero
      return {
        top: 'calc(50vh - 100px)',
        left: '50%',
        transform: 'translateX(-50%) scale(3)',
      };
    } else if (scrollProgress < 0.6) {
      // Phase 1: Move up and shrink, stay centered (0-180px scroll)
      const phase1Progress = scrollProgress / 0.6; // 0 to 1
      const topOffset = 100 - (phase1Progress * 80);
      const scale = 3 - (phase1Progress * 2); // Scale from 3 to 1
      
      return {
        top: `calc(50vh - ${topOffset}px - ${phase1Progress * 40}vh)`,
        left: '50%',
        transform: `translateX(-50%) scale(${scale})`,
      };
    } else {
      // Phase 2: Slide left to navbar position (180-300px scroll)
      const phase2Progress = (scrollProgress - 0.6) / 0.4; // 0 to 1
      const leftPosition = phase2Progress < 1 
        ? `calc(50% - ${phase2Progress * 50}%)` 
        : 'max(2rem, calc((100vw - 1400px) / 2 + 2rem))';
      
      return {
        top: '20px',
        left: leftPosition,
        transform: phase2Progress < 1 
          ? `translateX(-50%) scale(1)` 
          : 'translateX(0) scale(1)',
      };
    }
  };

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
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass dark:glass">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Placeholder for logo space */}
            <div className="w-[180px] h-12"></div>

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

      {/* Animated Logo - Single smooth animation with two phases */}
      <div
        className="fixed z-[60] transition-all duration-300 ease-out"
        style={getLogoStyles()}
      >
        <Link href="/" className="block">
          <Image
            src={theme === 'dark' 
              ? 'https://customer-assets.emergentagent.com/job_33cba548-cc10-4443-ba2a-5d85d6be63d5/artifacts/83rf6q6x_NEW%20AIB%20AXYS%20AFRICA%20LOGO%20DARK%20BG.svg'
              : 'https://customer-assets.emergentagent.com/job_33cba548-cc10-4443-ba2a-5d85d6be63d5/artifacts/c84w37kp_NEW%20AIB%20AXYS%20AFRICA%20LOGO%20WHITE%20BG.svg'
            }
            alt="AIB-AXYS Africa Logo"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>
      </div>
    </>
  );
};

export default Navbar;