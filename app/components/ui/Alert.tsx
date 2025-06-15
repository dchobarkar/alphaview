import React from "react";
import { twMerge } from "tailwind-merge";

interface AlertProps {
  children: React.ReactNode;
  variant?: "success" | "error" | "warning" | "info";
  className?: string;
  onClose?: () => void;
}

const Alert = ({
  children,
  variant = "info",
  className,
  onClose,
}: AlertProps) => {
  const variants = {
    success: "bg-green-50 text-green-800 border-green-200",
    error: "bg-red-50 text-red-800 border-red-200",
    warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
    info: "bg-blue-50 text-blue-800 border-blue-200",
  };

  return (
    <div
      className={twMerge("rounded-md border p-4", variants[variant], className)}
    >
      <div className="flex">
        <div className="flex-1">{children}</div>
        {onClose && (
          <button
            type="button"
            className="ml-4 inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
            onClick={onClose}
          >
            <span className="sr-only">Close</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
