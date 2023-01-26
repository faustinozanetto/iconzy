import '@styles/global.css';
import 'ui/styles.css';

import { Inter } from '@next/font/google';
import { domAnimation, LazyMotion } from 'framer-motion';
import type { AppProps } from 'next/app';
import React from 'react';

const InterFont = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

type PortfolioProps = AppProps;

const IconozenApp: React.FC<PortfolioProps> = ({ Component, ...rest }) => {
  return (
    <LazyMotion features={domAnimation}>
      <main className={`${InterFont.variable} relative scroll-smooth font-sans subpixel-antialiased`}>
        {/* <ThemeProvider> */}
        <Component {...rest.pageProps} />
        <style jsx global>{`
          :root {
            --font-sans: ${InterFont.style.fontFamily};
          }
        `}</style>
        {/* </ThemeProvider> */}
      </main>
    </LazyMotion>
  );
};

export default IconozenApp;
