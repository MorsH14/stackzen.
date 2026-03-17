import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Olamide Alade (Stackzen) | Full Stack Developer',
  description: 'Portfolio of Olamide Alade, a Full Stack Developer specializing in React, Next.js, and Node.js. Building scalable web applications for startups.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB'],
  authors: [{ name: 'Olamide Alade' }],
  openGraph: {
    title: 'Olamide Alade (Stackzen) | Full Stack Developer',
    description: 'Building fast, scalable web applications for startups and growing companies.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}