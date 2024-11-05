import React, { ChangeEvent } from 'react';

interface DateRangeProps {
    name: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    min?: string
    label?: string
}

const DateRange: React.FC<DateRangeProps> = ({ name, value, onChange, min, label }) => {

    return (
        <div className='mb-3'>

            <label>{label}</label>
            <input
                type='date'
                className='form-control'
                name={name}
                value={value}
                onChange={onChange}
                min={min} // Set the minimum date to today
            />
        </div>
    );
};

export default DateRange;
