"use client";
import { useToast } from "../../lib/utils/toastContext";
type ToastProps = { message: string; type: string; duration: number };

const Toast = ({ message, type }: ToastProps) => {
  return (
    <div
      className={`fixed top-4 right-4 [transition:opacity_.5s_ease_in_out] p-4 rounded-3xl shadow-md text-white border-[5px] border-solid border-green-700 ${
        type === "success"
          ? "bg-green-500"
          : type === "error"
          ? "bg-red-500"
          : "bg-[#737373]"
      }`}
    >
      {message}
    </div>
  );
};

export const ToastList = () => {
  const { toasts } = useToast();

  return (
    <>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
        />
      ))}
    </>
  );
};
