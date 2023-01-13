import * as React from 'react';
import React__default from 'react';

declare const defaultColors: {
  slate: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  gray: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  zinc: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  neutral: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  stone: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  red: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  orange: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  amber: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  yellow: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  lime: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  green: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  emerald: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  teal: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  cyan: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  sky: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  blue: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  indigo: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  violet: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  purple: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  fuchsia: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  pink: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  rose: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  primary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
};

type ButtonVariants = 'outline' | 'solid' | 'ghost';
type ColorSchemes = keyof typeof defaultColors;
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  /** Optional: Left icon of the button. */
  leftIcon?: JSX.Element;
  /** Optional: Right icon of the button. */
  rightIcon?: JSX.Element;
  /** Optional: Size of the button, defaults to md. */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Optional: Variant of the button, defaults to solid. */
  variant?: ButtonVariants;
  /** Optional: Color scheme of the button, defaults to primary. */
  colorScheme?: ColorSchemes;
};
declare const Button: React.ForwardRefExoticComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    /** Optional: Left icon of the button. */
    leftIcon?: JSX.Element | undefined;
    /** Optional: Right icon of the button. */
    rightIcon?: JSX.Element | undefined;
    /** Optional: Size of the button, defaults to md. */
    size?: 'xs' | 'sm' | 'md' | 'lg' | undefined;
    /** Optional: Variant of the button, defaults to solid. */
    variant?: ButtonVariants | undefined;
    /** Optional: Color scheme of the button, defaults to primary. */
    colorScheme?:
      | 'slate'
      | 'gray'
      | 'zinc'
      | 'neutral'
      | 'stone'
      | 'red'
      | 'orange'
      | 'amber'
      | 'yellow'
      | 'lime'
      | 'green'
      | 'emerald'
      | 'teal'
      | 'cyan'
      | 'sky'
      | 'blue'
      | 'indigo'
      | 'violet'
      | 'purple'
      | 'fuchsia'
      | 'pink'
      | 'rose'
      | 'primary'
      | undefined;
  } & React.RefAttributes<HTMLButtonElement>
>;

type CardProps = React__default.HTMLAttributes<HTMLDivElement> & {
  children: React__default.ReactNode;
  /** Optional: Variant of the project card. */
  variant?: 'landscape' | 'portrait';
};
declare const Card: React__default.ForwardRefExoticComponent<
  React__default.HTMLAttributes<HTMLDivElement> & {
    children: React__default.ReactNode;
    /** Optional: Variant of the project card. */
    variant?: 'landscape' | 'portrait' | undefined;
  } & React__default.RefAttributes<HTMLAnchorElement>
>;

type SelectInputProps = Omit<React__default.SelectHTMLAttributes<HTMLSelectElement>, 'classsName'> & {
  children: React__default.ReactNode;
  label: string;
};
declare const SelectInput: React__default.ForwardRefExoticComponent<
  Omit<React__default.SelectHTMLAttributes<HTMLSelectElement>, 'classsName'> & {
    children: React__default.ReactNode;
    label: string;
  } & React__default.RefAttributes<HTMLSelectElement>
>;

type TextInputInputProps = Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'classsName' | 'onChange'> & {
  label?: string;
  icon?: JSX.Element;
  onValueChanged: (value: string) => void;
};
declare const TextInput: React__default.ForwardRefExoticComponent<
  Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'classsName'> & {
    label?: string | undefined;
    icon?: JSX.Element | undefined;
    onValueChanged: (value: string) => void;
  } & React__default.RefAttributes<HTMLInputElement>
>;

type SeparatorProps = React__default.HTMLAttributes<HTMLHRElement> & {};
declare const Separator: React__default.FC<SeparatorProps>;

type RangeInputProps = Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'classsName' | 'onChange'> & {
  label: string;
  onValueChanged: (value: number) => void;
};
declare const RangeInput: React__default.ForwardRefExoticComponent<
  Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'classsName' | 'onChange'> & {
    label: string;
    onValueChanged: (value: number) => void;
  } & React__default.RefAttributes<HTMLInputElement>
>;

type ColorInputProps = Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'classsName' | 'onChange'> & {
  label: string;
  onValueChanged: (value: string) => void;
};
declare const ColorInput: React__default.ForwardRefExoticComponent<
  Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'classsName' | 'onChange'> & {
    label: string;
    onValueChanged: (value: string) => void;
  } & React__default.RefAttributes<HTMLInputElement>
>;

export {
  Button,
  ButtonProps,
  Card,
  CardProps,
  ColorInput,
  ColorInputProps,
  RangeInput,
  RangeInputProps,
  SelectInput,
  SelectInputProps,
  Separator,
  SeparatorProps,
  TextInput,
  TextInputInputProps,
};
