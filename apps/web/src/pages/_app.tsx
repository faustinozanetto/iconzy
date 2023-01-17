import '@styles/global.css';
import 'ui/styles.css';

import GoogleAnalytics from '@modules/google/components/google-analytics';
import IconsProvider from '@modules/icons/context/icons-context';
import ThemeProvider from '@modules/theming/context/theme-context';
import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import React from 'react';
import { ToastProvider, ToastsContainer } from 'ui';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

type PortfolioProps = AppProps;

const IconozenApp: React.FC<PortfolioProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { pageProps, Component } = props;

  return (
    <ThemeProvider>
      <ToastProvider>
        <IconsProvider>
          <main className={`${inter.variable} relative font-sans`}>
            <GoogleAnalytics />
            <Component {...pageProps} />
            <ToastsContainer />
          </main>
        </IconsProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default IconozenApp;
