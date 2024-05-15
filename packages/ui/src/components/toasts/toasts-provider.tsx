import React, { useReducer } from 'react';
import { toastsReducer } from '../../context/toasts/toasts-reducer';
import { ToastContext } from '../../context/toasts/toasts-context';

interface ToastsProviderProps {
  children: React.ReactNode;
}

export const ToastsProvider: React.FC<ToastsProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(toastsReducer, {
    toasts: [],
  });

  return <ToastContext.Provider value={{ state, dispatch }}>{children}</ToastContext.Provider>;
};
