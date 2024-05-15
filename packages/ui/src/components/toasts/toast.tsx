import { clsx } from 'clsx';
import React from 'react';
import { motion } from 'framer-motion';
import type { Toast as ToastData } from '../../types/toasts.types';
import { CheckIcon, ExclamationIcon } from '../icons';

interface ToastProps {
  toast: ToastData;
}
const Toast: React.FC<ToastProps> = (props) => {
  const { toast } = props;

  const getToastIcon = () => {
    switch (toast.variant) {
      case 'info': {
        return (
          <svg
            className="h-5 w-5 stroke-current"
            fill="none"
            height="50px"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="50px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
            <line x1="8" x2="16" y1="9" y2="9" />
            <line x1="8" x2="14" y1="13" y2="13" />
          </svg>
        );
      }
      case 'success': {
        return <CheckIcon />;
      }
      case 'error': {
        return <ExclamationIcon />;
      }
    }
  };

  return (
    <motion.li
      animate={{
        height: 'auto',
        opacity: 1,
        transition: {
          type: 'spring',
          bounce: 0.3,
        },
      }}
      className="m-2 flex flex-col items-center"
      exit={{ height: 0, opacity: 0 }}
      initial={{ height: 0, opacity: 0 }}
      transition={{
        duration: 0.6,
        type: 'spring',
        bounce: 0,
      }}
    >
      <div
        className={clsx(
          'flex items-center overflow-hidden rounded-lg p-4 text-background backdrop-blur-md border',
          toast.variant === 'success' && 'bg-success/85',
          toast.variant === 'error' && 'bg-destructive/85',
          toast.variant === 'info' && 'bg-informative/85'
        )}
      >
        <div className="mr-2 flex-shrink-0">{getToastIcon()}</div>
        <p className="text-sm font-medium md:text-base">{toast.content}</p>
      </div>
    </motion.li>
  );
};

export default Toast;
