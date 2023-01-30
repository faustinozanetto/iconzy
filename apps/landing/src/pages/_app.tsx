import '@styles/global.css';
import 'ui/styles.css';

import { Inter } from '@next/font/google';
import { domAnimation, LazyMotion } from 'framer-motion';
import type { AppProps } from 'next/app';
import React from 'react';

const InterFont = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

type PortfolioProps = AppProps;

const IconozenApp: React.FC<PortfolioProps> = ({ Component, ...rest }) => {
  return (
    <LazyMotion features={domAnimation}>
      <main className={`${InterFont.variable} scroll-smooth font-sans antialiased`}>
        <Component {...rest.pageProps} />
      </main>
    </LazyMotion>
  );
};

export default IconozenApp;
