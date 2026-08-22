import type { Metadata, Viewport } from 'next';
import './globals.css';

import NavigationBar from '@/components/nav/NavigationBar';
import CatCompanion from '@/components/sections/CatCompanion';
import RoamingDevCat from '@/components/sections/RoamingDevCat';
import PortfolioChatbot from '@/components/PortfolioChatbot'; // 1. Imported the chatbot

export const metadata: Metadata = {
  title: 'Nusrat Jahan Bably | Full-Stack Developer · AI & Research Engineer',
  description: 'Building systems where intelligence meets usability. A research-driven portfolio blending full-stack development, AI, and real-world problem solving.',
  keywords: ['Nusrat Jahan Bably', 'full-stack developer', 'AI engineer', 'research engineer', 'software engineer', 'portfolio', 'Next.js developer'],
  authors: [{ name: 'Nusrat Jahan Bably' }],
  creator: 'Nusrat Jahan Bably',
  openGraph: {
    title: 'Nusrat Jahan Bably | Full-Stack Developer · AI & Research Engineer',
    description: 'Building systems where intelligence meets usability. Explore projects, research, experience, and engineering work.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Nusrat Jahan Bably Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nusrat Jahan Bably | Full-Stack Developer · AI & Research Engineer',
    description: 'Building systems where intelligence meets usability.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          href={`data:image/svg+xml,${encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <rect width="100" height="100" rx="24" fill="#0a0a0a" />
              <text x="50" y="68" text-anchor="middle" font-size="58">✦</text>
            </svg>
          `)}`}
        />
      </head>

      <body className="min-h-screen overflow-x-hidden bg-bg text-text antialiased">
        <NavigationBar />

        <div className="relative min-h-screen">
          {children}
        </div>

        {/* Interactive contact feature */}
        <CatCompanion />

        {/* The single, smart roaming cat */}
        <RoamingDevCat />

        {/* 2. Added the AI chatbot component */}
        <PortfolioChatbot />
      </body>
    </html>
  );
}