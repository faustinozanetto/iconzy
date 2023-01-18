import '@styles/global.css';
import 'ui/styles.css';

import GoogleAnalytics from '@modules/google/components/google-analytics';
import IconsProvider from '@modules/icons/context/icons/icons-context';
import ThemeProvider from '@modules/theming/context/theme-context';
import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import React from 'react';
import { ToastProvider, ToastsContainer } from 'ui';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

type PortfolioProps = AppProps;

const IconozenApp: React.FC<PortfolioProps> = (props) => {
  const { pageProps, Component } = props;

  return (
    <main className={`${inter.variable} relative font-sans`}>
      <ThemeProvider>
        <ToastProvider>
          <IconsProvider>
            <GoogleAnalytics />
            <Component {...pageProps} />
            <ToastsContainer />
            <style jsx global>{`
              :root {
                --font-sans: ${inter.style.fontFamily};
              }
            `}</style>
          </IconsProvider>
        </ToastProvider>
      </ThemeProvider>
    </main>
  );
};

export default IconozenApp;
