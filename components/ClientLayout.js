'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SwipeNavigation from '@/components/SwipeNavigation';

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider>
      <SwipeNavigation>
        <Navbar />
        <main className="pt-16 bg-white dark:bg-[#0a0a0f]">{children}</main>
        <Footer />
      </SwipeNavigation>
    </ThemeProvider>
  );
}
