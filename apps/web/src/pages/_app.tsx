import '@styles/global.css';
import 'ui/styles.css';

import GoogleAnalytics from '@modules/google/components/google-analytics';
import IconsProvider from '@modules/icons/context/icons/icons-context';
import ThemeProvider from '@modules/theming/context/theme-context';
import { Inter } from '@next/font/google';
import { domAnimation, LazyMotion } from 'framer-motion';
import type { AppProps } from 'next/app';
import React from 'react';
import { ToastProvider, ToastsContainer } from 'ui';

const InterFont = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

type PortfolioProps = AppProps;

const IconozenApp: React.FC<PortfolioProps> = ({ Component, ...rest }) => {
  return (
    <LazyMotion features={domAnimation}>
      <main className={`${InterFont.variable} relative scroll-smooth font-sans antialiased`}>
        <ThemeProvider>
          <ToastProvider>
            <GoogleAnalytics />
            <IconsProvider>
              <Component {...rest.pageProps} />
            </IconsProvider>
            <ToastsContainer />
            <style jsx global>{`
              :root {
                --font-sans: ${InterFont.style.fontFamily};
              }
            `}</style>
          </ToastProvider>
        </ThemeProvider>
      </main>
    </LazyMotion>
  );
};

export default IconozenApp;
