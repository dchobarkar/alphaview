import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Column<T> {
  header: string;
  accessor: keyof T;
  cell?: (value: T[keyof T], row: T) => ReactNode;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  className?: string;
  isLoading?: boolean;
}

export function Table<T extends { id: string | number }>({
  data,
  columns,
  className,
  isLoading,
}: TableProps<T>) {
  if (isLoading) {
    return (
      <div className="w-full animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-12 bg-gray-100 rounded mb-2"></div>
        ))}
      </div>
    );
  }

  return (
    <div className={twMerge("w-full overflow-x-auto", className)}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              {columns.map((column, index) => (
                <td
                  key={index}
                  className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap"
                >
                  {column.cell
                    ? column.cell(row[column.accessor], row)
                    : String(row[column.accessor])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
