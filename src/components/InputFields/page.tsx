import React, { ChangeEvent } from 'react';

interface InputFieldProps {
    label?: string;
    name: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ name, value, onChange, placeholder, label }) => {
    return (
        <div>
            <div className='mb-3'>
                <label>{label}</label>
                <input
                    className='form-control'
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default InputField;
