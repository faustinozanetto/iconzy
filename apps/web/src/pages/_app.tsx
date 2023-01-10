import '@styles/global.css';
import 'ui/styles.css';

import { Open_Sans } from '@next/font/google';

import type { AppProps } from 'next/app';
import React from 'react';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-sans' });

type PortfolioProps = AppProps;

const Portfolio: React.FC<PortfolioProps> = (props) => {
  const { pageProps, Component } = props;

  return (
    <main className={`${openSans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
};

export default Portfolio;
