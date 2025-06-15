import React from "react";
import { twMerge } from "tailwind-merge";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  actions?: React.ReactNode;
}

const SectionHeader = ({
  title,
  description,
  className,
  actions,
}: SectionHeaderProps) => {
  return (
    <div className={twMerge("mb-8", className)}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
          {description && (
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          )}
        </div>

        {actions && <div className="flex items-center gap-4">{actions}</div>}
      </div>
    </div>
  );
};

export default SectionHeader;
