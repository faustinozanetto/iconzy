import { createContext } from 'react';
import type { ToastContextState } from '../../types/toasts.types';

export const ToastContext = createContext<ToastContextState>({} as ToastContextState);
