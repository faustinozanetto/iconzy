import clsx from 'clsx';
import * as React from 'react';

type AvailableColorSchemes =
  | 'primary'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink';

type ColorSchemes = {
  [key in AvailableColorSchemes]: { outline: string; solid: string };
};

const PARSED_COLOR_SCHEMES: ColorSchemes = {
  primary: {
    outline: 'hover:bg-primary-300 hover:text-primary-800 focus:ring-primary-300',
    solid: 'bg-primary-200 text-primary-800 hover:bg-primary-300 focus:ring-primary-300',
  },
  red: {
    outline: 'hover:bg-red-300 hover:text-red-800 focus:ring-red-300',
    solid: 'bg-red-200 text-red-800 hover:bg-red-300 focus:ring-red-300',
  },
  pink: {
    outline: 'hover:bg-pink-300 hover:text-pink-800 focus:ring-pink-300',
    solid: 'bg-pink-200 text-pink-800 hover:bg-pink-300 focus:ring-pink-300',
  },
  orange: {
    outline: 'hover:bg-orange-300 hover:text-orange-800 focus:ring-orange-300',
    solid: 'bg-orange-200 text-orange-800 hover:bg-orange-300 focus:ring-orange-300',
  },
  yellow: {
    outline: 'hover:bg-yellow-300 hover:text-yellow-800 focus:ring-yellow-300',
    solid: 'bg-yellow-200 text-yellow-800 hover:bg-yellow-300 focus:ring-yellow-300',
  },
  green: {
    outline: 'hover:bg-green-300 hover:text-green-800 focus:ring-green-300',
    solid: 'bg-green-200 text-green-800 hover:bg-green-300 focus:ring-green-300',
  },
  teal: {
    outline: 'hover:bg-teal-300 hover:text-teal-800 focus:ring-teal-300',
    solid: 'bg-teal-200 text-teal-800 hover:bg-teal-300 focus:ring-teal-300',
  },
  blue: {
    outline: 'hover:bg-blue-300 hover:text-blue-800 focus:ring-blue-300',
    solid: 'bg-blue-200 text-blue-800 hover:bg-blue-300 focus:ring-blue-300',
  },
  indigo: {
    outline: 'hover:bg-indigo-300 hover:text-indigo-800 focus:ring-indigo-300',
    solid: 'bg-indigo-200 text-indigo-800 hover:bg-indigo-300 focus:ring-indigo-300',
  },
  purple: {
    outline: 'hover:bg-purple-300 hover:text-purple-800 focus:ring-purple-300',
    solid: 'bg-purple-200 text-purple-800 hover:bg-purple-300 focus:ring-purple-300',
  },
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  /** Optional: Left icon of the button. */
  leftIcon?: JSX.Element;
  /** Optional: Right icon of the button. */
  rightIcon?: JSX.Element;
  /** Optional: Size of the button, defaults to md. */
  size?: 'sm' | 'md' | 'lg';
  /** Optional: Variant of the button, defaults to solid. */
  variant?: 'outline' | 'solid';
  /** Optional: Color scheme of the button, defaults to primary. */
  colorScheme?: AvailableColorSchemes;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, leftIcon, rightIcon, colorScheme = 'primary', size = 'md', variant = 'solid', ...rest } = props;

  const getButtonSizes = (): string => {
    switch (size) {
      case 'sm':
        return 'py-2.5 px-3 text-base';
      case 'md':
        return 'px-5 py-2.5 text-md';
      case 'lg':
        return 'px-10 py-3.5 text-lg';
      default:
        return 'py-3 px-2.5 text-base';
    }
  };

  const getButtonVariants = (): string => {
    return variant === 'solid' ? PARSED_COLOR_SCHEMES[colorScheme].solid : PARSED_COLOR_SCHEMES[colorScheme].outline;
  };

  const { className, ...excludedRest } = rest;

  return (
    <button
      ref={ref}
      type="button"
      className={clsx(
        `inline-flex items-center justify-center rounded-lg text-base font-semibold transition-all focus:outline-none focus:ring-4`,
        getButtonSizes(),
        getButtonVariants(),
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
