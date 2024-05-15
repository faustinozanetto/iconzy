import React from 'react';
import { BaseIconProps, iconVariants } from './base-icon';
import { cn } from '../../lib/ui.lib';

export type ChevronRightIconProps = BaseIconProps;

export const ChevronRightIcon = React.forwardRef<SVGSVGElement, ChevronRightIconProps>(
  ({ className, size, ...props }, ref) => (
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
      <polyline points="9 6 15 12 9 18" />
    </svg>
  )
);

ChevronRightIcon.displayName = 'ChevronRightIcon';
