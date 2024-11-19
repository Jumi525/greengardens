"use client";
import { useToast } from "../../../lib/utils/toastContext";

export default function Home() {
  const { addToast } = useToast();

  const handleSuccessToast = () => {
    addToast("Success! Operation completed.", "success");
  };

  const handleErrorToast = () => {
    addToast("Error! Something went wrong.", "error");
  };

  const handleInfoToast = () => {
    addToast("Info: New message received.", "info");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={handleSuccessToast}
        >
          Show Success Toast
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={handleErrorToast}
        >
          Show Error Toast
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleInfoToast}
        >
          Show Info Toast
        </button>
      </div>
    </div>
  );
}
