import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Hiddengo - Luxury Hidden Experiences in Egypt',
  description: 'Discover Egypt’s most exclusive events, refined cultural moments, and elite destinations curated for a sophisticated lifestyle.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <link rel="preconnect" href="https://fonts.googleapis.com" precedence="default" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" precedence="default" />
      <link href="https://fonts.googleapis.com/css2?family=Birthstone&amp;display=swap" rel="stylesheet" precedence="default" />
      <body className="min-h-screen bg-primary text-white font-sans">
        {children}
      </body>
    </html>
  );
}

