import React from 'react';
import { cn } from '../../lib/ui.lib';
import { BaseIconProps, iconVariants } from './base-icon';

export type ShareIconProps = BaseIconProps;

export const ShareIcon = React.forwardRef<SVGSVGElement, ShareIconProps>(({ className, size, ...props }, ref) => (
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
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="18" cy="18" r="3" />
    <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />
    <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
  </svg>
));

ShareIcon.displayName = 'ShareIcon';
