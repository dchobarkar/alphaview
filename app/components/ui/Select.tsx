import React, { useId } from "react";
import { twMerge } from "tailwind-merge";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  options: SelectOption[];
  placeholder?: string;
}

const Select = ({
  className,
  label,
  error,
  fullWidth = false,
  id,
  options,
  placeholder,
  ...props
}: SelectProps) => {
  const autoId = useId();
  const selectId = id || (label ? `select-${autoId}` : undefined);
  const errorId = error ? `${selectId}-error` : undefined;

  return (
    <div className={twMerge("flex flex-col gap-1", fullWidth ? "w-full" : "")}>
      {label && (
        <label htmlFor={selectId} className="text-sm font-medium text-gray-800">
          {label}
        </label>
      )}

      <select
        id={selectId}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={twMerge(
          "rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          error ? "border-red-500 focus:ring-red-500" : "",
          fullWidth ? "w-full" : "",
          className
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Select;
