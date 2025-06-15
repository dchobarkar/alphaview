import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import Input from "./Input";
import Button from "./Button";

interface FormField {
  name: string;
  label: string;
  type?: "text" | "number" | "email" | "password" | "select";
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  validation?: {
    pattern?: RegExp;
    message?: string;
  };
}

interface FormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => void;
  submitLabel?: string;
  className?: string;
  isLoading?: boolean;
  error?: string;
  children?: ReactNode;
}

const Form = ({
  fields,
  onSubmit,
  submitLabel = "Submit",
  className,
  isLoading,
  error,
  children,
}: FormProps) => {
  const [formData, setFormData] = React.useState<Record<string, string>>({});
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateField = (
    field: FormField,
    value: string
  ): string | undefined => {
    if (field.required && !value) {
      return `${field.label} is required`;
    }

    if (field.validation?.pattern && !field.validation.pattern.test(value)) {
      return field.validation.message || `${field.label} is invalid`;
    }

    return undefined;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    fields.forEach((field) => {
      const error = validateField(field, formData[field.name] || "");
      if (error) {
        newErrors[field.name] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={twMerge("space-y-6", className)}>
      {error && (
        <div className="p-4 text-red-500 bg-red-50 rounded-md">{error}</div>
      )}

      <div className="space-y-4">
        {fields.map((field) => (
          <Input
            key={field.name}
            label={field.label}
            id={field.name}
            name={field.name}
            type={field.type || "text"}
            value={formData[field.name] || ""}
            onChange={handleChange}
            placeholder={field.placeholder}
            required={field.required}
            error={errors[field.name]}
            fullWidth
          />
        ))}
      </div>

      {children}

      <Button type="submit" isLoading={isLoading} fullWidth>
        {submitLabel}
      </Button>
    </form>
  );
};

export default Form;
