import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
// import { Inter, Space_Grotesk } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

// For SEO
export const metadata: Metadata = {
  title: 'DevFlow',
  description: 'A community platform',
  icons: '/assets/images/site-logo.svg',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="">
          <h1 className="h1-bold">This is a piece of text</h1>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
