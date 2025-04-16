'use client';
interface InputOption {
  name: string;
  value: string;
}

interface InputItem {
  label: string;
  value: string;
  required: boolean;
  options: InputOption[];
}

interface InputBoxProps {
  inputList: InputItem[];
  onChange?: (name: string, value: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ inputList, onChange }) => {
  return (
    <div className="space-y-4">
      {inputList.map((inputData) => (
        <div key={inputData.label} className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            {inputData.label}
            {inputData.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <select
            name={inputData.value}
            className="rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required={inputData.required}
            onChange={(e) => onChange?.(inputData.value, e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>
              -- Select {inputData.label} --
            </option>
            {inputData.options.map((optionData) => (
              <option key={optionData.value} value={optionData.value}>
                {optionData.name}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default InputBox;
