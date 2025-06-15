"use client";

import { useState } from "react";

interface Props {
  requiredParams: string[];
  onSubmit: (params: Record<string, string>) => void;
}

const InputForm: React.FC<Props> = ({ requiredParams, onSubmit }) => {
  const [formState, setFormState] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      {requiredParams.map((param) => (
        <div key={param}>
          <label>{param}:</label>
          <input name={param} onChange={handleChange} required />
        </div>
      ))}
      <button className="bg-accent" type="submit">
        Fetch Data
      </button>
    </form>
  );
};

export default InputForm;
