import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'Care Pulse',
  description: 'A Health Care Management System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      style={{ colorScheme: 'dark' }}
      lang="en"
      className={fontSans.className}
    >
      <body className={cn('min-h-screen bg-dark-300 antialiased')}>
        {children}
      </body>
    </html>
  );
}
