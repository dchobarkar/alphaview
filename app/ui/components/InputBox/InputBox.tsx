const InputBox = ({
  inputList,
}: {
  inputList: {
    label: string;
    value: string;
    required: boolean;
    options: { name: string; value: string }[];
  }[];
}) => {
  return (
    <>
      {inputList.map((inputData) => (
        <label key={inputData.label} className="block">
          <span className="text-gray-700">{inputData.label}</span>
          <select
            name={inputData.value}
            className="block w-full mt-1 p-2 border rounded"
            required={inputData.required}
          >
            {inputData.options.map((optionData) => (
              <option key={optionData.value} value={optionData.value}>
                {optionData.name}
              </option>
            ))}
          </select>
        </label>
      ))}
    </>
  );
};

export default InputBox;
