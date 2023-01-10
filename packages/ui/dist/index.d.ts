import React from 'react';

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

export { ButtonProps };
