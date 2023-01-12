import * as React from 'react';
import React__default from 'react';

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
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
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
declare const Button: React.ForwardRefExoticComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    /** Optional: Left icon of the button. */
    leftIcon?: JSX.Element | undefined;
    /** Optional: Right icon of the button. */
    rightIcon?: JSX.Element | undefined;
    /** Optional: Size of the button, defaults to md. */
    size?: 'sm' | 'md' | 'lg' | undefined;
    /** Optional: Variant of the button, defaults to solid. */
    variant?: 'outline' | 'solid' | undefined;
    /** Optional: Color scheme of the button, defaults to primary. */
    colorScheme?: AvailableColorSchemes | undefined;
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
  label: string;
  onValueChanged: (value: string) => void;
};
declare const TextInput: React__default.ForwardRefExoticComponent<
  Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'classsName' | 'onChange'> & {
    label: string;
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
