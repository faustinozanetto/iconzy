import type { ToastState, ToastActions } from '../../types/toasts.types';
import { ToastActionType } from '../../types/toasts.types';

export const toastsReducer = (state: ToastState, action: ToastActions): ToastState => {
  switch (action.type) {
    case ToastActionType.ADD_TOAST: {
      return {
        ...state,
        toasts: [...state.toasts, action.payload.toast],
      };
    }
    case ToastActionType.REMOVE_TOAST: {
      const updatedToasts = state.toasts.filter((toast) => toast.id !== action.payload.toast);
      return {
        ...state,
        toasts: updatedToasts,
      };
    }
    default:
      throw new Error('The action you requested does not exists!');
  }
};
