'use client';

import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Inter } from 'next/font/google';

import { ClerkProvider } from '@clerk/nextjs';
import BootstrapClient from '@/components/bootstrapclient.js';
import { MaelstromContextProvider } from '@/utils/context';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <MaelstromContextProvider>
            <div className="container-fluid">
              {children}
              <BootstrapClient />
            </div>
          </MaelstromContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
