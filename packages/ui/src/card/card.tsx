import clsx from 'clsx';
import React from 'react';

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  /** Optional: Variant of the project card. */
  variant?: 'landscape' | 'portrait';
};

export const Card = React.forwardRef<HTMLAnchorElement, CardProps>((props, ref) => {
  const { children, variant = 'portrait', ...rest } = props;

  return (
    <div
      className={clsx(
        `group cursor-pointer overflow-hidden rounded-lg bg-neutral-50 shadow-lg dark:bg-neutral-800 ${rest.className}`,
        variant === 'portrait' && 'w-full md:max-w-sm',
        variant === 'landscape' && 'grid grid-cols-2'
      )}
      {...rest}
    >
      {/* Bottom Information */}
      <div className="flex w-full flex-col space-y-1 p-4 text-neutral-900 dark:text-neutral-100">{children}</div>
    </div>
  );
});

Card.displayName = 'Card';
