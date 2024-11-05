import React, { ChangeEvent } from 'react';
import Select, { SingleValue } from 'react-select';

interface PhoneNumberInputProps {
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  country_code_name: string;  
  country_code_value: OptionType | null; 
  onChangeCountryCode: (option: SingleValue<OptionType>) => void; 
  options: OptionType[];  
}

interface OptionType {
  value: string;
  label: string; 
}


const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ 
  name, 
  value, 
  onChange, 
  placeholder, 
  country_code_name, 
  country_code_value, 
  onChangeCountryCode, 
  options }) => {
  return (
    <div>
      <div className='mb-3'>
        <div className="input-group mb-3 border-0">
          <div className="input-group-prepend border-0">
            <span className="input-group-text border-0 p-0" id="basic-addon1 ">
              <Select
                className='border-0'
                name={country_code_name}
                value={country_code_value} 
                onChange={onChangeCountryCode} 
                options={options} 
              />
            </span>
          </div>
          <input
            className='form-control'
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneNumberInput;
