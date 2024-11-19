"use client";
import { createContext, useContext, useState, useCallback } from "react";

type ToastProps = {
  id: number;
  message: string;
  type: string;
  duration: number;
};

type ToastContextProps = {
  toasts: ToastProps[];
  addToast: (message: string, type?: string, duration?: number) => void;
};

const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = useCallback(
    (message: string, type = "info", duration = 3000) => {
      const id = Date.now();
      setToasts((prevToasts) => [
        ...prevToasts,
        { id, message, type, duration },
      ]);

      setTimeout(() => {
        setToasts((prevToasts) =>
          prevToasts.filter((toast) => toast.id !== id)
        );
      }, duration);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ toasts, addToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
