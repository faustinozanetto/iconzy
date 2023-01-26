import '@styles/global.css';
import 'ui/styles.css';

import { Poppins } from '@next/font/google';
import { domAnimation, LazyMotion } from 'framer-motion';
import type { AppProps } from 'next/app';
import React from 'react';

const PoppinsFont = Poppins({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

type PortfolioProps = AppProps;

const IconozenApp: React.FC<PortfolioProps> = ({ Component, ...rest }) => {
  return (
    <LazyMotion features={domAnimation}>
      <main className={`${PoppinsFont.variable} relative scroll-smooth font-sans subpixel-antialiased`}>
        {/* <ThemeProvider> */}
        <Component {...rest.pageProps} />
        <style jsx global>{`
          :root {
            --font-sans: ${PoppinsFont.style.fontFamily};
          }
        `}</style>
        {/* </ThemeProvider> */}
      </main>
    </LazyMotion>
  );
};

export default IconozenApp;
