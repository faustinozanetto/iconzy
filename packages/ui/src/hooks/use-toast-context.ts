import { useContext } from 'react';
import { ToastContext } from '../context/toasts/toasts-context';
import type { ToastContextState } from '../types/toasts.types';

/**
 * Hook that returns the toast context.
 * @returns The context if valid.
 */
export const useToastContext = (): ToastContextState => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('Tried to use ThemeContext with no context avaiable!');
  return context;
};
