import clsx from 'clsx';
import * as React from 'react';

import type { defaultColors } from '../utils';

export type ButtonVariants = 'outline' | 'solid' | 'ghost';

export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg';

export type ColorSchemes = keyof typeof defaultColors;

export type AvailableColorSchemes = {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  [key in ColorSchemes]: { [key in ButtonVariants]: string };
};

const colorSchemesStyles: AvailableColorSchemes = {
  slate: {
    outline:
      'border-4 border-slate-300 dark:border-slate-600 hover:bg-slate-300 hover:text-slate-900 focus:ring-slate-300 dark:text-slate-200  dark:hover:bg-slate-600 dark:focus:ring-slate-500',
    solid:
      'bg-slate-200 text-slate-900 hover:bg-slate-300 focus:ring-slate-300 dark:bg-slate-700 dark:hover:bg-slate-900 dark:text-slate-200',
    ghost: 'text-slate-900 hover:bg-slate-300 focus:ring-slate-300 dark:hover:bg-slate-900 dark:text-slate-200',
  },
  gray: {
    outline:
      'border-4 border-gray-300 dark:border-gray-600 hover:bg-gray-300 hover:text-gray-900 focus:ring-gray-300 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-500',
    solid:
      'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-900 dark:text-gray-200',
    ghost: 'text-gray-900 hover:bg-gray-300 focus:ring-gray-300 dark:hover:bg-gray-900 dark:text-gray-200',
  },
  zinc: {
    outline:
      'border-4 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-300 hover:text-zinc-900 focus:ring-zinc-300 dark:text-zinc-200  dark:hover:bg-zinc-600 dark:focus:ring-zinc-500',
    solid:
      'bg-zinc-200 text-zinc-900 hover:bg-zinc-300 focus:ring-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-900 dark:text-zinc-200',
    ghost: 'text-zinc-900 hover:bg-slate-300 focus:ring-zinc-300 dark:hover:bg-zinc-900 dark:text-zinc-200',
  },
  neutral: {
    outline:
      'border-4 border-neutral-300 dark:border-neutral-600 hover:bg-neutral-300 hover:text-neutral-900 focus:ring-neutral-300 dark:text-neutral-200  dark:hover:bg-neutral-600 dark:focus:ring-neutral-500',
    solid:
      'bg-neutral-200 text-neutral-900 hover:bg-neutral-300 focus:ring-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-900 dark:text-neutral-200',
    ghost:
      'text-neutral-900 hover:bg-neutral-300 focus:ring-neutral-300 dark:hover:bg-neutral-900 dark:text-neutral-200',
  },
  stone: {
    outline:
      'border-4 border-stone-300 dark:border-stone-600 hover:bg-stone-300 hover:text-stone-900 focus:ring-stone-300 dark:text-stone-200  dark:hover:bg-stone-600 dark:focus:ring-stone-500',
    solid:
      'bg-stone-200 text-stone-900 hover:bg-stone-300 focus:ring-stone-300 dark:bg-stone-700 dark:hover:bg-stone-900 dark:text-stone-200',
    ghost: 'text-stone-900 hover:bg-stone-300 focus:ring-stone-300 dark:hover:bg-stone-900 dark:text-stone-200',
  },
  red: {
    outline:
      'border-4 border-red-300 dark:border-red-600 hover:bg-red-300 hover:text-red-900 focus:ring-red-300 dark:text-red-200 dark:hover:bg-red-600 dark:focus:ring-red-500',
    solid:
      'bg-red-200 text-red-900 hover:bg-red-300 focus:ring-red-300 dark:bg-red-700 dark:hover:bg-red-900 dark:text-red-200',
    ghost: 'text-red-900 hover:bg-red-300 focus:ring-red-300 dark:hover:bg-red-900 dark:text-red-200',
  },
  orange: {
    outline:
      'border-4 border-orange-300 dark:border-orange-600 hover:bg-orange-300 hover:text-orange-900 focus:ring-orange-300 dark:text-orange-200  dark:hover:bg-orange-600 dark:focus:ring-orange-500',
    solid:
      'bg-orange-200 text-orange-900 hover:bg-orange-300 focus:ring-orange-300 dark:bg-orange-700 dark:hover:bg-orange-900 dark:text-orange-200',
    ghost: 'text-orange-900 hover:bg-orange-300 focus:ring-orange-300 dark:hover:bg-orange-900 dark:text-orange-200',
  },
  amber: {
    outline:
      'border-4 border-amber-300 dark:border-amber-600 hover:bg-amber-300 hover:text-amber-900 focus:ring-amber-300 dark:text-amber-200  dark:hover:bg-amber-600 dark:focus:ring-amber-500',
    solid:
      'bg-amber-200 text-amber-900 hover:bg-amber-300 focus:ring-amber-300 dark:bg-amber-700 dark:hover:bg-amber-900 dark:text-amber-200',
    ghost: 'text-amber-900 hover:bg-amber-300 focus:ring-amber-300 dark:hover:bg-amber-900 dark:text-amber-200',
  },
  yellow: {
    outline:
      'border-4 border-yellow-300 dark:border-yellow-600 hover:bg-yellow-300 hover:text-yellow-900 focus:ring-yellow-300 dark:text-yellow-200  dark:hover:bg-yellow-600 dark:focus:ring-yellow-500',
    solid:
      'bg-yellow-200 text-yellow-900 hover:bg-yellow-300 focus:ring-yellow-300 dark:bg-yellow-700 dark:hover:bg-yellow-900 dark:text-yellow-200',
    ghost: 'text-yellow-900 hover:bg-yellow-300 focus:ring-yellow-300 dark:hover:bg-yellow-900 dark:text-yellow-200',
  },
  lime: {
    outline:
      'border-4 border-lime-300 dark:border-lime-600 hover:bg-lime-300 hover:text-lime-900 focus:ring-lime-300 dark:text-lime-200 dark:hover:bg-lime-600 dark:focus:ring-lime-500',
    solid:
      'bg-lime-200 text-lime-900 hover:bg-lime-300 focus:ring-lime-300 dark:bg-lime-700 dark:hover:bg-lime-900 dark:text-lime-200',
    ghost: 'text-lime-900 hover:bg-lime-300 focus:ring-lime-300 dark:hover:bg-lime-900 dark:text-lime-200',
  },
  green: {
    outline:
      'border-4 border-green-300 dark:border-green-600 hover:bg-green-300 hover:text-green-900 focus:ring-green-300 dark:text-green-200  dark:hover:bg-green-600 dark:focus:ring-green-500',
    solid:
      'bg-green-200 text-green-900 hover:bg-green-300 focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-900 dark:text-green-200',
    ghost: 'text-green-900 hover:bg-green-300 focus:ring-green-300 dark:hover:bg-green-900 dark:text-green-200',
  },
  emerald: {
    outline:
      'border-4 border-emerald-300 dark:border-emerald-600 hover:bg-emerald-300 hover:text-emerald-900 focus:ring-emerald-300 dark:text-emerald-200  dark:hover:bg-emerald-600 dark:focus:ring-emerald-500',
    solid:
      'bg-emerald-200 text-emerald-900 hover:bg-emerald-300 focus:ring-emerald-300 dark:bg-emerald-700 dark:hover:bg-emerald-900 dark:text-emerald-200',
    ghost:
      'text-emerald-900 hover:bg-emerald-300 focus:ring-emerald-300 dark:hover:bg-emerald-900 dark:text-emerald-200',
  },
  teal: {
    outline:
      'border-4 border-teal-300 dark:border-teal-600 hover:bg-teal-300 hover:text-teal-900 focus:ring-teal-300 dark:text-teal-200  dark:hover:bg-teal-600 dark:focus:ring-teal-500',
    solid:
      'bg-teal-200 text-teal-900 hover:bg-teal-300 focus:ring-teal-300 dark:bg-teal-700 dark:hover:bg-teal-900 dark:text-teal-200',
    ghost: 'text-teal-900 hover:bg-teal-300 focus:ring-teal-300 dark:hover:bg-teal-900 dark:text-teal-200',
  },
  cyan: {
    outline:
      'border-4 border-cyan-300 dark:border-cyan-600 hover:bg-cyan-300 hover:text-cyan-900 focus:ring-cyan-300 dark:text-cyan-200 dark:hover:bg-cyan-600 dark:focus:ring-cyan-500',
    solid:
      'bg-cyan-200 text-cyan-900 hover:bg-cyan-300 focus:ring-cyan-300 dark:bg-cyan-700 dark:hover:bg-cyan-900 dark:text-cyan-200',
    ghost: 'text-cyan-900 hover:bg-cyan-300 focus:ring-cyan-300 dark:hover:bg-cyan-900 dark:text-cyan-200',
  },
  sky: {
    outline:
      'border-4 border-sky-300 dark:border-sky-600 hover:bg-sky-300 hover:text-sky-900 focus:ring-sky-300 dark:text-sky-200 dark:hover:bg-sky-600 dark:focus:ring-sky-500',
    solid:
      'bg-sky-200 text-sky-900 hover:bg-sky-300 focus:ring-sky-300 dark:bg-sky-700 dark:hover:bg-sky-900 dark:text-sky-200',
    ghost: 'text-sky-900 hover:bg-sky-300 focus:ring-sky-300 dark:hover:bg-sky-900 dark:text-sky-200',
  },
  blue: {
    outline:
      'border-4 border-blue-300 dark:border-blue-600 hover:bg-blue-300 hover:text-blue-900 focus:ring-blue-300 dark:text-blue-200 dark:hover:bg-blue-600 dark:focus:ring-blue-500',
    solid:
      'bg-blue-200 text-blue-900 hover:bg-blue-300 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-900 dark:text-blue-200',
    ghost: 'text-blue-900 hover:bg-blue-300 focus:ring-blue-300 dark:hover:bg-blue-900 dark:text-blue-200',
  },
  indigo: {
    outline:
      'border-4 border-indigo-300 dark:border-indigo-600 hover:bg-indigo-300 hover:text-indigo-900 focus:ring-indigo-300 dark:text-indigo-200  dark:hover:bg-indigo-600 dark:focus:ring-indigo-500',
    solid:
      'bg-indigo-200 text-indigo-900 hover:bg-indigo-300 focus:ring-indigo-300 dark:bg-indigo-700 dark:hover:bg-indigo-900 dark:text-indigo-200',
    ghost: 'text-indigo-900 hover:bg-indigo-300 focus:ring-indigo-300 dark:hover:bg-indigo-900 dark:text-indigo-200',
  },
  violet: {
    outline:
      'border-4 border-violet-300 dark:border-violet-600 hover:bg-violet-300 hover:text-violet-900 focus:ring-violet-300 dark:text-violet-200  dark:hover:bg-violet-600 dark:focus:ring-violet-500',
    solid:
      'bg-violet-200 text-violet-900 hover:bg-violet-300 focus:ring-violet-300 dark:bg-violet-700 dark:hover:bg-violet-900 dark:text-violet-200',
    ghost: 'text-violet-900 hover:bg-violet-300 focus:ring-violet-300 dark:hover:bg-violet-900 dark:text-violet-200',
  },
  purple: {
    outline:
      'border-4 border-purple-300 dark:border-purple-600 hover:bg-purple-300 hover:text-purple-900 focus:ring-purple-300 dark:text-purple-200  dark:hover:bg-purple-600 dark:focus:ring-purple-500',
    solid:
      'bg-purple-200 text-purple-900 hover:bg-purple-300 focus:ring-purple-300 dark:bg-purple-700 dark:hover:bg-purple-900 dark:text-purple-200',
    ghost: 'text-purple-900 hover:bg-purple-300 focus:ring-purple-300 dark:hover:bg-purple-900 dark:text-purple-200',
  },
  fuchsia: {
    outline:
      'border-4 border-fuchsia-300 dark:border-fuchsia-600 hover:bg-fuchsia-300 hover:text-fuchsia-900 focus:ring-fuchsia-300 dark:text-fuchsia-200  dark:hover:bg-fuchsia-600 dark:focus:ring-fuchsia-500',
    solid:
      'bg-fuchsia-200 text-fuchsia-900 hover:bg-fuchsia-300 focus:ring-fuchsia-300 dark:bg-fuchsia-700 dark:hover:bg-fuchsia-900 dark:text-fuchsia-200',
    ghost:
      'text-fuchsia-900 hover:bg-fuchsia-300 focus:ring-fuchsia-300 dark:hover:bg-fuchsia-900 dark:text-fuchsia-200',
  },
  pink: {
    outline:
      'border-4 border-pink-300 dark:border-pink-600 hover:bg-pink-300 hover:text-pink-900 focus:ring-pink-300 dark:text-pink-200 dark:hover:bg-pink-600 dark:focus:ring-pink-500',
    solid:
      'bg-pink-200 text-pink-900 hover:bg-pink-300 focus:ring-pink-300 dark:bg-pink-700 dark:hover:bg-pink-900 dark:text-pink-200',
    ghost: 'text-pink-900 hover:bg-pink-300 focus:ring-pink-300 dark:hover:bg-pink-900 dark:text-pink-200',
  },
  rose: {
    outline:
      'border-4 border-rose-300 dark:border-rose-600 hover:bg-rose-300 hover:text-rose-900 focus:ring-rose-300 dark:text-rose-200 dark:hover:bg-rose-600 dark:focus:ring-rose-500',
    solid:
      'bg-rose-200 text-rose-900 hover:bg-rose-300 focus:ring-rose-300 dark:bg-rose-700 dark:hover:bg-rose-900 dark:text-rose-200',
    ghost: 'text-rose-900 hover:bg-rose-300 focus:ring-rose-300 dark:hover:bg-rose-900 dark:text-rose-200',
  },
  primary: {
    outline:
      'border-4 border-primary-300 dark:border-primary-600 hover:bg-primary-300 hover:text-primary-900 focus:ring-primary-300 dark:text-primary-200  dark:hover:bg-primary-600 dark:focus:ring-primary-500',
    solid:
      'bg-primary-200 text-primary-900 hover:bg-primary-300 focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-900 dark:text-primary-200',
    ghost:
      'text-primary-900 hover:bg-primary-300 focus:ring-primary-300 dark:hover:bg-primary-900 dark:text-primary-200',
  },
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  /** Optional: Left icon of the button. */
  leftIcon?: JSX.Element;
  /** Optional: Right icon of the button. */
  rightIcon?: JSX.Element;
  /** Optional: Size of the button, defaults to md. */
  size?: ButtonSizes;
  /** Optional: Variant of the button, defaults to solid. */
  variant?: ButtonVariants;
  /** Optional: Color scheme of the button, defaults to primary. */
  colorScheme?: ColorSchemes;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, leftIcon, rightIcon, colorScheme = 'primary', size = 'md', variant = 'solid', ...rest } = props;

  const getButtonSizes = (): string => {
    switch (size) {
      case 'xs':
        return 'p-[4px] text-[10px]';
      case 'sm':
        return 'px-[5px] py-[4px] text-[12px]';
      case 'md':
        return 'px-5 py-2.5 text-md';
      case 'lg':
        return 'px-10 py-3.5 text-lg';
    }
  };

  const getButtonVariants = (): string => {
    return colorSchemesStyles[colorScheme][variant];
  };

  // eslint-disable-next-line unused-imports/no-unused-vars
  const { className, ...excludedRest } = rest;

  return (
    <button
      ref={ref}
      type="button"
      className={clsx(
        `inline-flex items-center justify-center rounded-lg font-medium focus:outline-none focus:ring-4`,
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
