/* eslint-disable @typescript-eslint/naming-convention */
import type React from 'react';

export type ActionMap<M extends Record<string, unknown>> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type ToastVariants = 'success' | 'error' | 'info';

export interface Toast {
  id: string;
  variant: ToastVariants;
  content: string;
}

export interface ToastState {
  toasts: Toast[];
}

export interface ToastContextState {
  state: ToastState;
  dispatch: React.Dispatch<ToastActions>;
}

export enum ToastActionType {
  ADD_TOAST,
  REMOVE_TOAST,
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type ToastPayload = {
  [ToastActionType.ADD_TOAST]: {
    toast: Toast;
  };
  [ToastActionType.REMOVE_TOAST]: {
    toast: Toast['id'];
  };
};

export type ToastActions = ActionMap<ToastPayload>[keyof ActionMap<ToastPayload>];
