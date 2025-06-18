import React, { useId } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input = ({
  className,
  label,
  error,
  fullWidth = false,
  id,
  ...props
}: InputProps) => {
  const autoId = useId();
  const inputId = id || (label ? `input-${autoId}` : undefined);
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <div className={twMerge("flex flex-col gap-1", fullWidth ? "w-full" : "")}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-800">
          {label}
        </label>
      )}

      <input
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={twMerge(
          "rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          error ? "border-red-500 focus:ring-red-500" : "",
          fullWidth ? "w-full" : "",
          className
        )}
        {...props}
      />

      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
