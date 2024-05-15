import React from 'react';
import { BaseIconProps, iconVariants } from './base-icon';
import { cn } from '../../lib/ui.lib';

export type InfoIconProps = BaseIconProps;

export const InfoIcon = React.forwardRef<SVGSVGElement, InfoIconProps>(({ className, size, ...props }, ref) => (
  <svg
    ref={ref}
    className={cn(iconVariants({ size }), 'stroke-neutral-900 dark:stroke-neutral-50', className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" stroke="none" />
    <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
    <line y2="9" x2="16" y1="9" x1="8" />
    <line y2="13" x2="14" y1="13" x1="8" />
  </svg>
));

InfoIcon.displayName = 'InfoIcon';
