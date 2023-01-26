import Navbar from '@modules/navbar/components/navbar';
import type { ReactNode } from 'react';
import React from 'react';

import BaseLayoutHead from './head/base-layout-head';

type BaseLayoutProps = {
  children: ReactNode;
  /** Optional: head props used for seo data. */
  headProps?: React.ComponentPropsWithoutRef<typeof BaseLayoutHead>;
};

const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
  const { children, headProps } = props;

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* HEAD */}
      <BaseLayoutHead {...headProps} />

      {/* Navbar */}
      <Navbar />

      {/* CONTENT */}
      <main className="grow bg-primary-700 dark:bg-primary-400">{children}</main>
    </div>
  );
};

export default BaseLayout;
