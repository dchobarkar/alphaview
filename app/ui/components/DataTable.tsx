interface DataTableProps {
  data: Record<string, unknown>[]; // Array of objects
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <p className="text-center text-gray-500 py-6">
        No data available to display.
      </p>
    );
  }

  const columns = Object.keys(data[0]);

  return (
    <div className="overflow-auto border rounded-lg shadow mt-8">
      <table className="min-w-full table-auto text-sm text-left border-collapse">
        <thead className="bg-gray-100 text-gray-700 uppercase">
          <tr>
            {columns.map((col) => (
              <th key={col} className="px-4 py-2 border-b">
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className="odd:bg-white even:bg-gray-50 hover:bg-blue-50"
            >
              {columns.map((col) => (
                <td key={col} className="px-4 py-2 border-b whitespace-nowrap">
                  {String(row[col])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
