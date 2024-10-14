'use client';
import React, { useState, useEffect } from 'react';
import Nav from '@/components/Nav';

import '../styles/globals.scss';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (isNavOpen) {
      body.style.overflow = 'hidden'; // Disable scrolling
      body.style.paddingRight = '15px'; // Adjust for scrollbar width
    } else {
      body.style.overflow = ''; // Reset overflow
      body.style.paddingRight = ''; // Reset padding
    }

    return () => {
      body.style.overflow = ''; // Cleanup
      body.style.paddingRight = '';
    };
  }, [isNavOpen]);

  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <title>Mexican Best Life</title>
        <meta property="og:title" content="Mexican Best Life" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <body>
        <Nav setIsNavOpen={setIsNavOpen} />
        <div id="ContentWrapper">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
