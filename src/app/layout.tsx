import React from 'react';
import '../styles/globals.css';

import { quicksand, robotoSlab, sora } from '@/assets/fonts';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${quicksand.variable} ${sora.variable} ${robotoSlab.variable} box-border font-quicksand`}
    >
      <body>{children}</body>
      <h4>January</h4>
    </html>
  );
}
