'use client';

import React from 'react';
import { AnimatePresence } from 'framer-motion';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { cn } from '../..';
import { useToastContext } from '../../hooks/use-toast-context';
import Toast from './toast';

export const toastContainerVariants = cva('pointer-events-none fixed z-[999] flex flex-col w-full', {
  variants: {
    position: {
      'top-left': 'top-0 left-0',
      'top-right': 'top-0 right-0',
      'bottom-left': 'bottom-0 left-0',
      'bottom-right': 'bottom-0 right-0',
      'top-center': 'top-0 left-1/2 -translate-x-1/2',
      'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
    },
  },
  defaultVariants: {
    position: 'bottom-center',
  },
});

export type ToatsContainerStyleProps = VariantProps<typeof toastContainerVariants>;

export type ToastsContainerProps = ToatsContainerStyleProps;

export const ToastsContainer: React.FC<ToastsContainerProps> = (props) => {
  const { position } = props;
  const { state } = useToastContext();

  return (
    <div className={cn(toastContainerVariants({ position }))}>
      <ul>
        <AnimatePresence initial={false}>
          {state.toasts.map((toast) => (
            <Toast key={toast.id} toast={toast} />
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};
