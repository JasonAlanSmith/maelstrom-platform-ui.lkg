'use client';

import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Inter } from 'next/font/google';
import Script from 'next/script';

import BootstrapClient from '@/components/bootstrapclient.js';
import { MaelstromContextProvider } from '@/utils/context';
import { ClerkProvider } from '@clerk/nextjs';

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
          <Script id='dd-rum-sync'
    src="https://www.datadoghq-browser-agent.com/us5/v5/datadog-rum.js"
            type="text/javascript"
          strategy='beforeInteractive'>
</Script>
          <Script id='datadog-rum'>
            {`
    window.DD_RUM && window.DD_RUM.init({
      clientToken: 'pubffc70dd57178a2c9e10bc44c0dcce37c',
      applicationId: '31b90701-eadf-4663-a3de-d111b14aa492',
      site: 'us5.datadoghq.com',
      service: 'maelstrom-platform',
      env: '<ENV_NAME>',
      // Specify a version number to identify the deployed version of your application in Datadog
      // version: '1.0.0', 
      sessionSampleRate: 100,
      sessionReplaySampleRate: 20,
      trackUserInteractions: true,
      trackResources: true,
      trackLongTasks: true,
      defaultPrivacyLevel: 'mask-user-input',
    });
    `}
</Script>
        </body>
      </html>
    </ClerkProvider>
  );
}
