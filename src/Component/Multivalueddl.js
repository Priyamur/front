import React, { useState } from 'react';
import Select from 'react-select';
 
const options = [
  { value: 'Option1', label: 'Option 1' },
  { value: 'Option2', label: 'Option 2' },
  { value: 'Option3', label: 'Option 3' },
];
 
const MultiSelectDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState(null);
 
  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
    
  };
 
  return (
    <Select 
      isMulti
      name="colors"
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
      placeholder="Choose your stream"
      onChange={handleChange}
      value={selectedOptions}
    />
  );
};

export default MultiSelectDropdown;