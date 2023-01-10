import * as React from 'react';

type AvailableColorSchemes = 'primary' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'indigo' | 'purple' | 'pink';
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
declare const Button: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    /** Optional: Left icon of the button. */
    leftIcon?: JSX.Element | undefined;
    /** Optional: Right icon of the button. */
    rightIcon?: JSX.Element | undefined;
    /** Optional: Size of the button, defaults to md. */
    size?: "sm" | "md" | "lg" | undefined;
    /** Optional: Variant of the button, defaults to solid. */
    variant?: "outline" | "solid" | undefined;
    /** Optional: Color scheme of the button, defaults to primary. */
    colorScheme?: AvailableColorSchemes | undefined;
} & React.RefAttributes<HTMLButtonElement>>;

export { Button, ButtonProps };
