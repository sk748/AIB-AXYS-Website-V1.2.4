import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navbar from '@/components/Navbar';
import StockTicker from '@/components/StockTicker';
import Footer from '@/components/Footer';
import RouteLoadingWrapper from '@/components/RouteLoadingWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AIB-AXYS Africa - Leading Stock Trading in Kenya',
  description: 'IPOs, Leverage & Global Funds - Your trusted partner in African financial markets',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <RouteLoadingWrapper>
            <Navbar />
            <StockTicker />
            <main className="pt-8">{children}</main>
            <Footer />
          </RouteLoadingWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}