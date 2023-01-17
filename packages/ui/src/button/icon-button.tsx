import clsx from 'clsx';
import * as React from 'react';
import type { BaseButtonProps } from './button';
import { BUTTON_COLOR_SCHEMES, ICON_BUTTON_SIZES } from './button-styles';

export type ButtonVariants = 'outline' | 'solid' | 'ghost';

export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg';

export type IconButtonProps = BaseButtonProps & {
  /** Optional: Left icon of the button. */
  icon?: JSX.Element;
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { icon, colorScheme = 'primary', size = 'md', variant = 'solid', ...rest } = props;

  // eslint-disable-next-line unused-imports/no-unused-vars
  const { className, ...excludedRest } = rest;

  return (
    <button
      ref={ref}
      type="button"
      className={clsx(
        `inline-flex items-center justify-center rounded-lg font-medium focus:outline-none focus:ring-4 transition-colors text-neutral-900 dark:text-neutral-50`,
        ICON_BUTTON_SIZES[size],
        BUTTON_COLOR_SCHEMES[colorScheme][variant],
        rest.className
      )}
      {...excludedRest}
    >
      <div className="inline-flex self-center">{icon}</div>
    </button>
  );
});

IconButton.displayName = 'Icon Button';
