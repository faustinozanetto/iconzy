'use client';

import React from 'react';
import { ToastsProvider } from '@iconzy/ui';
import { ThemeProvider } from 'next-theme-kit';

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = (props) => {
  const { children } = props;

  return (
    <ThemeProvider useLocalStorage useSystem={false}>
      <ToastsProvider>{children}</ToastsProvider>
    </ThemeProvider>
  );
};

export default Providers;
