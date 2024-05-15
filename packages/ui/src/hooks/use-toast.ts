import { ToastActionType, type Toast } from '../types/toasts.types';
import { useToastContext } from './use-toast-context';

interface UseToastReturn {
  toast: (data: Omit<Toast, 'id'>, duration?: number) => void;
}

/**
 * Hook that returns a function to create toasts.
 * @returns The function to create toast.
 */
export const useToast = (): UseToastReturn => {
  const { dispatch } = useToastContext();

  const toast = (data: Omit<Toast, 'id'>, duration = 3000): void => {
    const toastId = Math.random().toString(12).substring(2, 10);
    dispatch({
      type: ToastActionType.ADD_TOAST,
      payload: {
        toast: { ...data, id: toastId },
      },
    });

    setTimeout(() => {
      dispatch({
        type: ToastActionType.REMOVE_TOAST,
        payload: {
          toast: toastId,
        },
      });
    }, duration);
  };

  return { toast };
};
