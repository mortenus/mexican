'use client';
import React, { useState, useEffect } from 'react';
import Nav from '@/components/Nav';

import '../styles/globals.scss';
import Footer from '@/components/Footer';

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
      <body>
        <Nav setIsNavOpen={setIsNavOpen} />
        <div id="ContentWrapper">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
