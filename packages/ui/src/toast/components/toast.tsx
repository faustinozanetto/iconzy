import clsx from 'clsx';
import { m } from 'framer-motion';
import React from 'react';
import { Toast as ToastData } from '../context/reducer/types';

type ToastProps = {
  toast: ToastData;
};

export const Toast: React.FC<ToastProps> = (props) => {
  const { toast } = props;

  const toastIcon =
    toast.variant === 'success' ? (
      <svg
        className="h-5 w-5 stroke-neutral-800 dark:stroke-neutral-50"
        xmlns="http://www.w3.org/2000/svg"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="#ffffff"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ) : (
      <svg
        className="h-5 w-5 stroke-neutral-800 dark:stroke-neutral-50"
        xmlns="http://www.w3.org/2000/svg"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="#ffffff"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle r="10" cy="12" cx="12" />
        <line y2="12" x2="12" y1="8" x1="12" />
        <line y2="16" x2="12.01" y1="16" x1="12" />
      </svg>
    );

  return (
    <m.li
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: 'auto',
        opacity: 1,
        transition: {
          type: 'spring',
          bounce: 0.3,
        },
      }}
      exit={{ height: 0, opacity: 0 }}
      transition={{
        duration: 0.6,
        type: 'spring',
        bounce: 0,
      }}
      className="flex flex-col items-center m-2"
    >
      <div
        className={clsx(
          'flex p-4 rounded-md items-start overflow-hidden shadow-md text-neutral-800 dark:text-neutral-50',
          toast.variant === 'success' ? 'bg-green-200 dark:bg-green-700' : 'bg-red-200 dark:bg-red-700'
        )}
      >
        <div className="flex-shrink-0 mr-2">{toastIcon}</div>
        <div className="flex-1 max-w-full">
          <p className="text-sm font-medium">{toast.content}</p>
        </div>
      </div>
    </m.li>
  );
};
