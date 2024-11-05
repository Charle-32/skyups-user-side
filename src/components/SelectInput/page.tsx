import React from 'react';
import Select, { SingleValue } from 'react-select';


interface OptionType {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label?: string;
  name: string;
  value: OptionType | null;
  onChange: (option: SingleValue<OptionType>) => void;
  placeholder?: string;
  options: OptionType[];
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  options
}) => {
  return (
    <div>
      <div className='mb-3'>
        {label && <label>{label}</label>}
        <Select
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          options={options}
        // isClearable 
        />
      </div>
    </div>
  );
};

export default SelectField;
