import React, { ChangeEvent } from 'react';

interface CheckBoxInputProps {
    name: string;
    checked: boolean; 
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
}

const CheckBoxInput: React.FC<CheckBoxInputProps> = ({ name, checked, onChange, label }) => {
    return (
        <div className='mb-3'>
            <input
            role="switch" 
                type='checkbox'
                id={name} 
                name={name}
                checked={checked}
                onChange={onChange}
            />
            {label && <label htmlFor={name} className="ms-2">{label}</label>} 
            
        </div>
    );
};

export default CheckBoxInput;
