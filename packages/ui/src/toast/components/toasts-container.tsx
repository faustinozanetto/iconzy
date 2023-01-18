import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useToastContext } from '../context/toast-context';
import { Toast } from './toast';

export const ToastsContainer: React.FC = () => {
  const { state } = useToastContext();

  return (
    <div className="fixed z-50 flex flex-col bottom-0 right-0 left-0 pointer-events-none">
      <div className="max-w-xl mx-auto">
        <AnimatePresence>
          {state.toasts &&
            state.toasts.map((toast) => {
              return <Toast key={toast.id} toast={toast} />;
            })}
        </AnimatePresence>
      </div>
    </div>
  );
};
