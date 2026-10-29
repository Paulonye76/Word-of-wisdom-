import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export const metadata: Metadata = {
  title: { default: 'Word of Wisdom | Scripture for Everyday Life', template: '%s | Word of Wisdom' },
  description: 'Understand the Bible in everyday language through practical Christian teachings, reflections, and podcasts.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>;
}
