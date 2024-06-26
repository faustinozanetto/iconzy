import React from 'react';
import { BaseIconProps, iconVariants } from './base-icon';
import { cn } from '../../lib/ui.lib';

export type CalendarIconProps = BaseIconProps;

export const CalendarIcon = React.forwardRef<SVGSVGElement, CalendarIconProps>(({ className, size, ...props }, ref) => (
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
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <rect x="4" y="5" width="16" height="16" rx="2" />
    <line x1="16" y1="3" x2="16" y2="7" />
    <line x1="8" y1="3" x2="8" y2="7" />
    <line x1="4" y1="11" x2="20" y2="11" />
    <line x1="11" y1="15" x2="12" y2="15" />
    <line x1="12" y1="15" x2="12" y2="18" />
  </svg>
));

CalendarIcon.displayName = 'CalendarIcon';
