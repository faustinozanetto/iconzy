import type { defaultColors } from '../utils';

export type ButtonVariants = 'outline' | 'solid' | 'ghost';
export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ColorSchemes = keyof typeof defaultColors | 'plain';

export type AvailableColorSchemes = {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  [key in ColorSchemes]: { [key in ButtonVariants]: string };
};

type AvaiableSizeVariants = {
  [key in ButtonSizes]: string;
};

export const BUTTON_SIZES: AvaiableSizeVariants = {
  xs: 'px-2 h-6 min-w-[1.5rem] text-[0.75rem]',
  sm: 'px-3 h-8 min-w-[2rem] text-[0.875rem]',
  md: 'px-4 h-10 min-w-[2.5rem] text-[1rem]',
  lg: 'px-6 h-12 min-w-[3rem] text-[1.125rem]',
  xl: 'px-6 h-16 min-w-[3.5rem] text-[1.125rem]',
};

export const BUTTON_COLOR_SCHEMES: AvailableColorSchemes = {
  plain: {
    outline:
      'border-4 border-slate-300 dark:border-slate-600 hover:bg-slate-400 hover:border-slate-400 focus-visible:ring-slate-300 dark:hover:bg-slate-600 dark:focus-visible:ring-slate-500',
    solid: 'bg-white hover:bg-neutral-50 focus-visible:ring-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800',
    ghost: 'hover:bg-slate-400 focus-visible:ring-slate-300 dark:hover:bg-slate-900',
  },
  slate: {
    outline:
      'border-4 border-slate-300 dark:border-slate-600 hover:bg-slate-400 hover:border-slate-400 focus-visible:ring-slate-300 dark:hover:bg-slate-600 dark:focus-visible:ring-slate-500',
    solid: 'bg-slate-300 hover:bg-slate-400 focus-visible:ring-slate-300 dark:bg-slate-700 dark:hover:bg-slate-900',
    ghost: 'hover:bg-slate-400 focus-visible:ring-slate-300 dark:hover:bg-slate-900',
  },
  gray: {
    outline:
      'border-4 border-gray-300 dark:border-gray-600 hover:bg-gray-400 hover:border-gray-400 focus-visible:ring-gray-300 dark:hover:bg-gray-600 dark:focus-visible:ring-gray-500',
    solid: 'bg-gray-300 hover:bg-gray-400 focus-visible:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-900',
    ghost: 'hover:bg-gray-400 focus-visible:ring-gray-300 dark:hover:bg-gray-900',
  },
  zinc: {
    outline:
      'border-4 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-400 hover:border-zinc-400 focus-visible:ring-zinc-300 dark:hover:bg-zinc-600 dark:focus-visible:ring-zinc-500',
    solid: 'bg-zinc-300 hover:bg-zinc-400 focus-visible:ring-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-900',
    ghost: 'hover:bg-zinc-400 focus-visible:ring-zinc-300 dark:hover:bg-zinc-900',
  },
  neutral: {
    outline:
      'border-4 border-neutral-300 dark:border-neutral-600 hover:bg-neutral-400 hover:border-neutral-400 focus-visible:ring-neutral-300 dark:hover:bg-neutral-600 dark:focus-visible:ring-neutral-500',
    solid:
      'bg-neutral-300 hover:bg-neutral-400 focus-visible:ring-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-900',
    ghost: 'hover:bg-neutral-400 focus-visible:ring-neutral-300 dark:hover:bg-neutral-900 ',
  },
  stone: {
    outline:
      'border-4 border-stone-300 dark:border-stone-600 hover:bg-stone-400 hover:border-stone-400 focus-visible:ring-stone-300 dark:hover:bg-stone-600 dark:focus-visible:ring-stone-500',
    solid: 'bg-stone-300 hover:bg-stone-400 focus-visible:ring-stone-300 dark:bg-stone-700 dark:hover:bg-stone-900',
    ghost: 'hover:bg-stone-400 focus-visible:ring-stone-300 dark:hover:bg-stone-900',
  },
  red: {
    outline:
      'border-4 border-red-300 dark:border-red-600 hover:bg-red-400 hover:border-red-400 focus-visible:ring-red-300 dark:hover:bg-red-600 dark:focus-visible:ring-red-500',
    solid: 'bg-red-300 hover:bg-red-400 focus-visible:ring-red-300 dark:bg-red-700 dark:hover:bg-red-900',
    ghost: 'hover:bg-red-400 focus-visible:ring-red-300 dark:hover:bg-red-900',
  },
  orange: {
    outline:
      'border-4 border-orange-300 dark:border-orange-600 hover:bg-orange-400 hover:border-orange-400 focus-visible:ring-orange-300 dark:hover:bg-orange-600 dark:focus-visible:ring-orange-500',
    solid:
      'bg-orange-300 hover:bg-orange-400 focus-visible:ring-orange-300 dark:bg-orange-700 dark:hover:bg-orange-900',
    ghost: 'hover:bg-orange-400 focus-visible:ring-orange-300 dark:hover:bg-orange-900',
  },
  amber: {
    outline:
      'border-4 border-amber-300 dark:border-amber-600 hover:bg-amber-400 hover:border-amber-400 focus-visible:ring-amber-300 dark:hover:bg-amber-600 dark:focus-visible:ring-amber-500',
    solid: 'bg-amber-300 hover:bg-amber-400 focus-visible:ring-amber-300 dark:bg-amber-700 dark:hover:bg-amber-900',
    ghost: 'hover:bg-amber-400 focus-visible:ring-amber-300 dark:hover:bg-amber-900',
  },
  yellow: {
    outline:
      'border-4 border-yellow-300 dark:border-yellow-600 hover:bg-yellow-400 hover:border-yellow-400 focus-visible:ring-yellow-300 dark:hover:bg-yellow-600 dark:focus-visible:ring-yellow-500',
    solid:
      'bg-yellow-300 hover:bg-yellow-400 focus-visible:ring-yellow-300 dark:bg-yellow-700 dark:hover:bg-yellow-900',
    ghost: 'hover:bg-yellow-400 focus-visible:ring-yellow-300 dark:hover:bg-yellow-900',
  },
  lime: {
    outline:
      'border-4 border-lime-300 dark:border-lime-600 hover:bg-lime-400 hover:border-lime-400 focus-visible:ring-lime-300 dark:hover:bg-lime-600 dark:focus-visible:ring-lime-500',
    solid: 'bg-lime-300 hover:bg-lime-400 focus-visible:ring-lime-300 dark:bg-lime-700 dark:hover:bg-lime-900',
    ghost: 'hover:bg-lime-400 focus-visible:ring-lime-300 dark:hover:bg-lime-900',
  },
  green: {
    outline:
      'border-4 border-green-300 dark:border-green-600 hover:bg-green-400 hover:border-green-400 focus-visible:ring-green-300 dark:hover:bg-green-600 dark:focus-visible:ring-green-500',
    solid: 'bg-green-300 hover:bg-green-400 focus-visible:ring-green-300 dark:bg-green-700 dark:hover:bg-green-900',
    ghost: 'hover:bg-green-400 focus-visible:ring-green-300 dark:hover:bg-green-900',
  },
  emerald: {
    outline:
      'border-4 border-emerald-300 dark:border-emerald-600 hover:bg-emerald-400 hover:border-emerald-400 focus-visible:ring-emerald-300 dark:hover:bg-emerald-600 dark:focus-visible:ring-emerald-500',
    solid:
      'bg-emerald-300 hover:bg-emerald-400 focus-visible:ring-emerald-300 dark:bg-emerald-700 dark:hover:bg-emerald-900',
    ghost: 'hover:bg-emerald-400 focus-visible:ring-emerald-300 dark:hover:bg-emerald-900',
  },
  teal: {
    outline:
      'border-4 border-teal-300 dark:border-teal-600 hover:bg-teal-400 hover:border-teal-400 focus-visible:ring-teal-300 dark:hover:bg-teal-600 dark:focus-visible:ring-teal-500',
    solid: 'bg-teal-300 hover:bg-teal-400 focus-visible:ring-teal-300 dark:bg-teal-700 dark:hover:bg-teal-900',
    ghost: 'hover:bg-teal-400 focus-visible:ring-teal-300 dark:hover:bg-teal-900',
  },
  cyan: {
    outline:
      'border-4 border-cyan-300 dark:border-cyan-600 hover:bg-cyan-400 hover:border-cyan-400 focus-visible:ring-cyan-300 dark:hover:bg-cyan-600 dark:focus-visible:ring-cyan-500',
    solid: 'bg-cyan-300 hover:bg-cyan-400 focus-visible:ring-cyan-300 dark:bg-cyan-700 dark:hover:bg-cyan-900',
    ghost: 'hover:bg-cyan-400 focus-visible:ring-cyan-300 dark:hover:bg-cyan-900',
  },
  sky: {
    outline:
      'border-4 border-sky-300 dark:border-sky-600 hover:bg-sky-400 hover:border-sky-400 focus-visible:ring-sky-300 dark:hover:bg-sky-600 dark:focus-visible:ring-sky-500',
    solid: 'bg-sky-300 hover:bg-sky-400 focus-visible:ring-sky-300 dark:bg-sky-700 dark:hover:bg-sky-900',
    ghost: 'hover:bg-sky-400 focus-visible:ring-sky-300 dark:hover:bg-sky-900 ',
  },
  blue: {
    outline:
      'border-4 border-blue-300 dark:border-blue-600 hover:bg-blue-400 hover:border-blue-400 focus-visible:ring-blue-300 dark:hover:bg-blue-600 dark:focus-visible:ring-blue-500',
    solid: 'bg-blue-300 hover:bg-blue-400 focus-visible:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-900',
    ghost: 'hover:bg-blue-400 focus-visible:ring-blue-300 dark:hover:bg-blue-900',
  },
  indigo: {
    outline:
      'border-4 border-indigo-300 dark:border-indigo-600 hover:bg-indigo-400 hover:border-indigo-400 focus-visible:ring-indigo-300 dark:hover:bg-indigo-600 dark:focus-visible:ring-indigo-500',
    solid:
      'bg-indigo-300 hover:bg-indigo-400 focus-visible:ring-indigo-300 dark:bg-indigo-700 dark:hover:bg-indigo-900',
    ghost: 'hover:bg-indigo-400 focus-visible:ring-indigo-300 dark:hover:bg-indigo-900',
  },
  violet: {
    outline:
      'border-4 border-violet-300 dark:border-violet-600 hover:bg-violet-400 hover:border-violet-400 focus-visible:ring-violet-300 dark:hover:bg-violet-600 dark:focus-visible:ring-violet-500',
    solid:
      'bg-violet-300 hover:bg-violet-400 focus-visible:ring-violet-300 dark:bg-violet-700 dark:hover:bg-violet-900',
    ghost: 'hover:bg-violet-400 focus-visible:ring-violet-300 dark:hover:bg-violet-900',
  },
  purple: {
    outline:
      'border-4 border-purple-300 dark:border-purple-600 hover:bg-purple-400 hover:border-purple-400 focus-visible:ring-purple-300 dark:hover:bg-purple-600 dark:focus-visible:ring-purple-500',
    solid:
      'bg-purple-300 hover:bg-purple-400 focus-visible:ring-purple-300 dark:bg-purple-700 dark:hover:bg-purple-900',
    ghost: 'hover:bg-purple-400 focus-visible:ring-purple-300 dark:hover:bg-purple-900',
  },
  fuchsia: {
    outline:
      'border-4 border-fuchsia-300 dark:border-fuchsia-600 hover:bg-fuchsia-400 hover:border-fuchsia-400 focus-visible:ring-fuchsia-300 dark:hover:bg-fuchsia-600 dark:focus-visible:ring-fuchsia-500',
    solid:
      'bg-fuchsia-300 hover:bg-fuchsia-400 focus-visible:ring-fuchsia-300 dark:bg-fuchsia-700 dark:hover:bg-fuchsia-900',
    ghost: 'hover:bg-fuchsia-400 focus-visible:ring-fuchsia-300 dark:hover:bg-fuchsia-900',
  },
  pink: {
    outline:
      'border-4 border-pink-300 dark:border-pink-600 hover:bg-pink-400 hover:border-pink-400 focus-visible:ring-pink-300 dark:hover:bg-pink-600 dark:focus-visible:ring-pink-500',
    solid: 'bg-pink-300 hover:bg-pink-400 focus-visible:ring-pink-300 dark:bg-pink-700 dark:hover:bg-pink-900',
    ghost: 'hover:bg-pink-400 focus-visible:ring-pink-300 dark:hover:bg-pink-900',
  },
  rose: {
    outline:
      'border-4 border-rose-300 dark:border-rose-600 hover:bg-rose-400 hover:border-rose-400 focus-visible:ring-rose-300 dark:hover:bg-rose-600 dark:focus-visible:ring-rose-500',
    solid: 'bg-rose-300 hover:bg-rose-400 focus-visible:ring-rose-300 dark:bg-rose-700 dark:hover:bg-rose-900',
    ghost: 'hover:bg-rose-400 focus-visible:ring-rose-300 dark:hover:bg-rose-900',
  },
  primary: {
    outline:
      'border-4 border-primary-300 dark:border-primary-600 hover:bg-primary-400 hover:border-primary-400 focus-visible:ring-primary-300 dark:hover:bg-primary-600 dark:focus-visible:ring-primary-500',
    solid:
      'bg-primary-300 hover:bg-primary-400 focus-visible:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-900',
    ghost: 'hover:bg-primary-400 focus-visible:ring-primary-300 dark:hover:bg-primary-900',
  },
};
