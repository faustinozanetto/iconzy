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
    <div className="flex min-h-screen flex-col overflow-hidden subpixel-antialiased">
      {/* HEAD */}
      <BaseLayoutHead {...headProps} />

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <div className="flex flex-1 flex-col bg-neutral-100 dark:bg-neutral-900">{children}</div>
    </div>
  );
};

export default BaseLayout;
