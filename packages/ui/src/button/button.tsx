import clsx from 'clsx';
import * as React from 'react';
import { ButtonSizes, ButtonVariants, BUTTON_COLOR_SCHEMES, BUTTON_SIZES, ColorSchemes } from './button-styles';

export type BaseButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> & {
  children?: React.ReactNode;
  /** Optional: Size of the button, defaults to md. */
  size?: ButtonSizes;
  /** Optional: Variant of the button, defaults to solid. */
  variant?: ButtonVariants;
  /** Optional: Color scheme of the button, defaults to primary. */
  colorScheme?: ColorSchemes;
  isDisabled?: boolean;
};

export type ButtonProps = BaseButtonProps & {
  /** Optional: Left icon of the button. */
  leftIcon?: JSX.Element;
  /** Optional: Right icon of the button. */
  rightIcon?: JSX.Element;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    leftIcon,
    rightIcon,
    colorScheme = 'primary',
    size = 'md',
    variant = 'solid',
    isDisabled = false,
    ...rest
  } = props;

  // eslint-disable-next-line unused-imports/no-unused-vars
  const { className, ...excludedRest } = rest;

  return (
    <button
      ref={ref}
      type="button"
      disabled={isDisabled}
      className={clsx(
        `inline-flex appearance-none items-center justify-center select-none relative whitespace-nowrap align-middle leading-[1.2] rounded-lg font-medium focus-visible:outline-none focus-visible:ring-4 transition-colors text-neutral-900 dark:text-neutral-50 disabled:cursor-not-allowed`,
        BUTTON_SIZES[size],
        BUTTON_COLOR_SCHEMES[colorScheme][variant],
        rest.className
      )}
      {...excludedRest}
    >
      {leftIcon && <span className="inline-flex shrink-0 self-center mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="inline-flex shrink-0 self-center ml-2">{rightIcon}</span>}
    </button>
  );
});

Button.displayName = 'Button';
