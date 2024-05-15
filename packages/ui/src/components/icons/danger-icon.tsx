import React from 'react';
import { cn } from '../../lib/ui.lib';
import { BaseIconProps, iconVariants } from './base-icon';

export type DangerIconProps = BaseIconProps;

export const DangerIcon = React.forwardRef<SVGSVGElement, DangerIconProps>(({ className, size, ...props }, ref) => (
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
    <circle r="10" cy="12" cx="12" />
    <line y2="12" x2="12" y1="8" x1="12" />
    <line y2="16" x2="12.01" y1="16" x1="12" />
  </svg>
));

DangerIcon.displayName = 'DangerIcon';
