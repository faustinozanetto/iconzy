export type ActionMap<M extends { [index: string]: unknown }> = {
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

export type Toast = {
  id: string;
  variant: ToastVariants;
  content: string;
};

export type ToastState = {
  toasts: Toast[];
};

export type ToastContextState = {
  state: ToastState;
  dispatch: React.Dispatch<ToastActions>;
};

export enum ToastActionType {
  ADD_TOAST,
  REMOVE_TOAST,
}

type ToastPayload = {
  [ToastActionType.ADD_TOAST]: {
    toast: Toast;
  };
  [ToastActionType.REMOVE_TOAST]: {
    toast: Toast['id'];
  };
};

export type ToastActions = ActionMap<ToastPayload>[keyof ActionMap<ToastPayload>];
