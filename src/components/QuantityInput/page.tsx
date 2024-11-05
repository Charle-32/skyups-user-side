import React from 'react';

interface QuantityInputProps {
    name?: string;
    value: number;
    onChange: (newValue: number) => void; // Changed to a function that handles the new value
    placeholder?: string;
    label?: string;
}

const QuantityInput: React.FC<QuantityInputProps> = ({ name, value, onChange, label }) => {
    const handleDecrement = () => {
        if (value > 0) {
            onChange(value - 1); // Decrease value and trigger onChange
        }
    };

    const handleIncrement = () => {
        onChange(value + 1);
    };

    return (
        <div className='mb-3'>
            <div className='d-flex justify-content-between align-items-center px-3 rounded quantity_input'>
                <label className='me-3'>{label}</label>
                <div className='d-flex  align-items-center '>
                    <button
                        type="button"
                        className='btn border-0'
                        onClick={handleDecrement}
                        disabled={value <= 0}
                        aria-label={`Decrease ${name || ''}`}
                    >
                        -
                    </button>
                    <div className='mx-2'>{value}</div>
                    <button
                        type="button"
                        className='btn border-0'
                        onClick={handleIncrement}
                        aria-label={`Increase ${name || ''}`}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuantityInput;
