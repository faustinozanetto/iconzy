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

      {/* CONTENT */}
      <main className="grow bg-neutral-50 dark:bg-neutral-900">{children}</main>
    </div>
  );
};

export default BaseLayout;
