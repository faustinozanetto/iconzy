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
type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg';
type ColorSchemes = keyof typeof defaultColors;

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    /** Optional: Size of the button, defaults to md. */
    size?: ButtonSizes;
    /** Optional: Variant of the button, defaults to solid. */
    variant?: ButtonVariants;
    /** Optional: Color scheme of the button, defaults to primary. */
    colorScheme?: ColorSchemes;
};
type ButtonProps = BaseButtonProps & {
    /** Optional: Left icon of the button. */
    leftIcon?: JSX.Element;
    /** Optional: Right icon of the button. */
    rightIcon?: JSX.Element;
};
declare const Button: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    /** Optional: Size of the button, defaults to md. */
    size?: ButtonSizes | undefined;
    /** Optional: Variant of the button, defaults to solid. */
    variant?: ButtonVariants | undefined;
    /** Optional: Color scheme of the button, defaults to primary. */
    colorScheme?: "slate" | "gray" | "zinc" | "neutral" | "stone" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "primary" | undefined;
} & {
    /** Optional: Left icon of the button. */
    leftIcon?: JSX.Element | undefined;
    /** Optional: Right icon of the button. */
    rightIcon?: JSX.Element | undefined;
} & React.RefAttributes<HTMLButtonElement>>;

type IconButtonProps = BaseButtonProps & {
    /** Optional: Left icon of the button. */
    icon?: JSX.Element;
};
declare const IconButton: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    size?: ButtonSizes | undefined;
    variant?: ButtonVariants | undefined;
    colorScheme?: "slate" | "gray" | "zinc" | "neutral" | "stone" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "primary" | undefined;
} & {
    /** Optional: Left icon of the button. */
    icon?: JSX.Element | undefined;
} & React.RefAttributes<HTMLButtonElement>>;

type SeparatorProps = React__default.HTMLAttributes<HTMLHRElement>;
declare const Separator: React__default.FC<SeparatorProps>;

type ColorInputProps = Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'classsName' | 'onChange'> & {
    label: string;
    /**
     * Callback function called when the value changes.
     * @param value New value
     * @returns void.
     */
    onValueChanged: (value: string) => void;
};
declare const ColorInput: React__default.ForwardRefExoticComponent<Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "classsName" | "onChange"> & {
    label: string;
    /**
     * Callback function called when the value changes.
     * @param value New value
     * @returns void.
     */
    onValueChanged: (value: string) => void;
} & React__default.RefAttributes<HTMLInputElement>>;

type RangeInputProps = Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'classsName' | 'onChange'> & {
    label: string;
    /**
     * Callback function called when the value changes.
     * @param value New value
     * ;@returns void.
     */
    onValueChanged: (value: number) => void;
};
declare const RangeInput: React__default.ForwardRefExoticComponent<Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "onChange" | "classsName"> & {
    label: string;
    /**
     * Callback function called when the value changes.
     * @param value New value
     * ;@returns void.
     */
    onValueChanged: (value: number) => void;
} & React__default.RefAttributes<HTMLInputElement>>;

type SelectInputProps = Omit<React__default.SelectHTMLAttributes<HTMLSelectElement>, 'classsName'> & {
    children: React__default.ReactNode;
    label?: string;
};
declare const SelectInput: React__default.ForwardRefExoticComponent<Omit<React__default.SelectHTMLAttributes<HTMLSelectElement>, "classsName"> & {
    children: React__default.ReactNode;
    label?: string | undefined;
} & React__default.RefAttributes<HTMLSelectElement>>;

type SortCriteria = 'asc' | 'des';
type SelectInputSortProps = Omit<React__default.SelectHTMLAttributes<HTMLSelectElement>, 'classsName' | 'onChange'> & {
    label?: string;
    children: React__default.ReactNode;
    /** Initial value of the crtieria. */
    initialSortCriteria: SortCriteria;
    /**
     * Callback function called when the value changes.
     * @param value New value
     * @param criteria Criteria of the input, asc or des
     * @returns void.
     */
    onValueChanged: (value: string, criteria: SortCriteria) => void;
};
declare const SelectInputSort: React__default.FC<SelectInputSortProps>;

type TextInputInputProps = Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'classsName' | 'onChange'> & {
    label?: string;
    icon?: JSX.Element;
    /**
     * Callback function called when the value changes.
     * @param value New value
     * @returns void.
     */
    onValueChanged: (value: string) => void;
};
declare const TextInput: React__default.ForwardRefExoticComponent<Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "onChange" | "classsName"> & {
    label?: string | undefined;
    icon?: JSX.Element | undefined;
    /**
     * Callback function called when the value changes.
     * @param value New value
     * @returns void.
     */
    onValueChanged: (value: string) => void;
} & React__default.RefAttributes<HTMLInputElement>>;

export { Button, ButtonProps, ButtonSizes, ButtonVariants, ColorInput, ColorInputProps, ColorSchemes, IconButton, IconButtonProps, RangeInput, RangeInputProps, SelectInput, SelectInputProps, SelectInputSort, SelectInputSortProps, Separator, SeparatorProps, TextInput, TextInputInputProps, defaultColors };
