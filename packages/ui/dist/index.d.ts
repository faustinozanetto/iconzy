import * as React$1 from 'react';
import React__default from 'react';

type FadeAnimatedProps = {
    children: React__default.ReactNode;
};
declare const FadeAnimated: React__default.FC<FadeAnimatedProps>;

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

type BaseButtonProps = Omit<React$1.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> & {
    children?: React$1.ReactNode;
    /** Optional: Size of the button, defaults to md. */
    size?: ButtonSizes;
    /** Optional: Variant of the button, defaults to solid. */
    variant?: ButtonVariants;
    /** Optional: Color scheme of the button, defaults to primary. */
    colorScheme?: ColorSchemes;
    isDisabled?: boolean;
};
type ButtonProps = BaseButtonProps & {
    /** Optional: Left icon of the button. */
    leftIcon?: JSX.Element;
    /** Optional: Right icon of the button. */
    rightIcon?: JSX.Element;
};
declare const Button: React$1.ForwardRefExoticComponent<Omit<React$1.ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> & {
    children?: React$1.ReactNode;
    /** Optional: Size of the button, defaults to md. */
    size?: ButtonSizes | undefined;
    /** Optional: Variant of the button, defaults to solid. */
    variant?: ButtonVariants | undefined;
    /** Optional: Color scheme of the button, defaults to primary. */
    colorScheme?: "slate" | "gray" | "zinc" | "neutral" | "stone" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "primary" | undefined;
    isDisabled?: boolean | undefined;
} & {
    /** Optional: Left icon of the button. */
    leftIcon?: JSX.Element | undefined;
    /** Optional: Right icon of the button. */
    rightIcon?: JSX.Element | undefined;
} & React$1.RefAttributes<HTMLButtonElement>>;

type IconButtonProps = BaseButtonProps & {
    /** Optional: Left icon of the button. */
    icon?: JSX.Element;
};
declare const IconButton: React$1.ForwardRefExoticComponent<React$1.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React$1.ReactNode;
    size?: ButtonSizes | undefined;
    variant?: ButtonVariants | undefined;
    colorScheme?: "slate" | "gray" | "zinc" | "neutral" | "stone" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "primary" | undefined;
} & {
    /** Optional: Left icon of the button. */
    icon?: JSX.Element | undefined;
} & React$1.RefAttributes<HTMLButtonElement>>;

type SeparatorProps = Omit<React__default.HTMLAttributes<HTMLHRElement>, 'className'>;
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
declare const ColorInput: React__default.ForwardRefExoticComponent<Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "onChange" | "classsName"> & {
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
declare const RangeInput: React__default.ForwardRefExoticComponent<Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "classsName" | "onChange"> & {
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
    children: React__default.ReactNode;
    label?: string;
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

declare const ToastsContainer: React__default.FC;

type ActionMap<M extends {
    [index: string]: unknown;
}> = {
    [Key in keyof M]: M[Key] extends undefined ? {
        type: Key;
    } : {
        type: Key;
        payload: M[Key];
    };
};
type ToastVariants = 'success' | 'error';
type Toast = {
    id: string;
    variant: ToastVariants;
    content: string;
};
type ToastState = {
    toasts: Toast[];
};
type ToastContextState = {
    state: ToastState;
    dispatch: React.Dispatch<ToastActions>;
};
declare enum ToastActionType {
    ADD_TOAST = 0,
    REMOVE_TOAST = 1
}
type ToastPayload = {
    [ToastActionType.ADD_TOAST]: {
        toast: Toast;
    };
    [ToastActionType.REMOVE_TOAST]: {
        toast: Toast['id'];
    };
};
type ToastActions = ActionMap<ToastPayload>[keyof ActionMap<ToastPayload>];

type ToastProviderProps = {
    children: React__default.ReactNode;
};
/**
 * Hook that returns the toast context.
 * @returns The context if valid.
 */
declare const useToastContext: () => ToastContextState;
/**
 * Hook that returns a function to create toasts.
 * @returns The function to create toast.
 */
declare const useToast: () => {
    toast: (toast: Omit<Toast, 'id'>, duration?: number) => void;
};
declare const ToastProvider: React__default.FC<ToastProviderProps>;

export { Button, ButtonProps, ButtonSizes, ButtonVariants, ColorInput, ColorInputProps, ColorSchemes, FadeAnimated, IconButton, IconButtonProps, RangeInput, RangeInputProps, SelectInput, SelectInputProps, SelectInputSort, SelectInputSortProps, Separator, SeparatorProps, TextInput, TextInputInputProps, ToastProvider, ToastsContainer, defaultColors, useToast, useToastContext };
