import React from 'react';
import { useToastContext } from '../context/toast-context';
import { Toast } from './toast';

export const ToastsContainer: React.FC = () => {
  const { state } = useToastContext();

  return (
    <div className="fixed z-50 flex flex-col bottom-0 right-0 left-0">
      <div className="max-w-xl mx-auto">
        {state.toasts &&
          state.toasts.map((toast) => {
            return <Toast key={toast.id} toast={toast} />;
          })}
      </div>
    </div>
  );
};
