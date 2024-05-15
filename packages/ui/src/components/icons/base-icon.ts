import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

export const iconVariants = cva('', {
  variants: {
    size: {
      sm: 'h-4 w-4',
      base: 'h-5 w-5',
      lg: 'h-6 w-6',
    },
  },
  defaultVariants: {
    size: 'base',
  },
});

export type BaseIconProps = React.HTMLAttributes<SVGSVGElement> & VariantProps<typeof iconVariants>;
