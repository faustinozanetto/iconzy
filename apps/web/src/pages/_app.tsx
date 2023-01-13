import '@styles/global.css';
import 'ui/styles.css';

import { Inter } from '@next/font/google';

import type { AppProps } from 'next/app';
import React from 'react';
import ThemeProvider from '@modules/theming/context/theme-context';
import IconsProvider from '@modules/icons/context/icons-context';

const openSans = Inter({ subsets: ['latin'], variable: '--font-sans' });

type PortfolioProps = AppProps;

const IconozenApp: React.FC<PortfolioProps> = (props) => {
  const { pageProps, Component } = props;

  return (
    <ThemeProvider>
      <IconsProvider>
        <main className={`${openSans.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </IconsProvider>
    </ThemeProvider>
  );
};

export default IconozenApp;
