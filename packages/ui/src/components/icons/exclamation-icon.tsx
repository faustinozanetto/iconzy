import { forwardRef } from 'react';
import { cn } from '../..';
import type { BaseIconProps } from './base-icon';
import { iconVariants } from './base-icon';

export type ExclamationIconProps = BaseIconProps;

const ExclamationIcon = forwardRef<SVGSVGElement, ExclamationIconProps>(({ className, size, ...props }, ref) => {
  return (
    <svg
      className={cn(iconVariants({ size }), 'stroke-current', className)}
      fill="none"
      ref={ref}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <circle cx="12" cy="12" r="9" />
      <path d="M12 9v4" />
      <path d="M12 16v.01" />
    </svg>
  );
});

ExclamationIcon.displayName = 'ExclamationIcon';

export { ExclamationIcon };
