// MultiSelect.js
import React from "react";

const MultiSelect = ({ options, selectedValues, onChange }) => {
  const handleSelectChange = (e) => {
    const selectedOptions = Array.from(e.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    onChange(selectedOptions);
  };

  return (
    <select
      multiple
      value={selectedValues}
      onChange={handleSelectChange}
      className="border rounded p-2"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default MultiSelect;
