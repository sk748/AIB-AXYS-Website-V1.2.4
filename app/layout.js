import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AIB-AXYS Africa - Leading Stock Trading in Kenya',
  description: 'IPOs, Leverage & Global Funds - Your trusted partner in African financial markets',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-[#0a0a0f]`}>
        <ThemeProvider>
          <Navbar />
          <main className="pt-16 bg-white dark:bg-[#0a0a0f]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}