import clsx from 'clsx';
import * as React from 'react';
import { ButtonSizes, ButtonVariants, BUTTON_COLOR_SCHEMES, BUTTON_SIZES, ColorSchemes } from './button-styles';

export type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  /** Optional: Size of the button, defaults to md. */
  size?: ButtonSizes;
  /** Optional: Variant of the button, defaults to solid. */
  variant?: ButtonVariants;
  /** Optional: Color scheme of the button, defaults to primary. */
  colorScheme?: ColorSchemes;
};

export type ButtonProps = BaseButtonProps & {
  /** Optional: Left icon of the button. */
  leftIcon?: JSX.Element;
  /** Optional: Right icon of the button. */
  rightIcon?: JSX.Element;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, leftIcon, rightIcon, colorScheme = 'primary', size = 'md', variant = 'solid', ...rest } = props;

  // eslint-disable-next-line unused-imports/no-unused-vars
  const { className, ...excludedRest } = rest;

  return (
    <button
      ref={ref}
      type="button"
      className={clsx(
        `inline-flex items-center justify-center rounded-lg font-medium focus:outline-none focus:ring-4 transition-colors text-neutral-900 dark:text-neutral-50`,
        BUTTON_SIZES[size],
        BUTTON_COLOR_SCHEMES[colorScheme][variant],
        rest.className
      )}
      {...excludedRest}
    >
      {leftIcon && <div className="inline-flex shrink-0 self-center pr-1">{leftIcon}</div>}
      {children}
      {rightIcon && <div className="inline-flex shrink-0 self-center pl-1">{rightIcon}</div>}
    </button>
  );
});

Button.displayName = 'Button';
