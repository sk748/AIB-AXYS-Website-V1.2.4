import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AIB-AXYS Africa - Leading Stock Trading in Kenya',
  description: 'IPOs, Leverage & Global Funds - Your trusted partner in African financial markets',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-[#121929]`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}