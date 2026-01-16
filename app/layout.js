import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AIB-AXYS Africa - Leading Stock Trading in Kenya',
  description: 'IPOs, Leverage & Global Funds - Your trusted partner in African financial markets',
};

// Inline script to set theme immediately before React hydrates
const themeScript = `
  (function() {
    var theme = localStorage.getItem('aib-theme');
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.add('dark');
    }
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.className} bg-white dark:bg-[#121929]`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}