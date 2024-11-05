import React, { useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';
import InputField from '@/components/InputFields/page';
import DateRange from '@/components/DateRangePicker/page';
import { SingleValue } from 'react-select';
import SelectField from '@/components/SelectInput/page';

interface CheckoutFormProps {
    first_name: string;
    last_name: string;
    date_of_birth: string;
    gender: OptionType;
    nationality: string;
    passport_no: string;
    passport_expiry_date: string;
}

interface OptionType {
    label: string;
    value: string;
}

interface AddNewFormProps {
    open: boolean;
    close: () => void;
    save: (data: CheckoutFormProps) => void;
}

const genderOption = [
    { value: '', label: 'Select' },
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' },
];

const AddNewForm: React.FC<AddNewFormProps> = ({ open, close, save }) => {
    const initialState: CheckoutFormProps = {
        first_name: '',
        last_name: '',
        date_of_birth: '',
        gender: genderOption[0],
        nationality: '',
        passport_no: '',
        passport_expiry_date: '',
    };

    const [formData, setFormData] = useState<CheckoutFormProps>(initialState);

    const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSelectChangeForGender = (option: SingleValue<OptionType>) => {
        console.log(option);
        
        if (option) {
            setFormData(prevState => ({
                ...prevState,
                gender: option,
            }));
        }
    };

    const onClickSave = () => {
        save(formData);
        setFormData(initialState)
    };

    return (
        <Modal show={open} onHide={close} size='lg'>
            <ModalHeader closeButton>
                <Modal.Title>Add New</Modal.Title>
            </ModalHeader>
            <ModalBody>
                <div className='row p-3'>
                    <div className='col-lg-6'>
                        <InputField
                            label='First Name'
                            name='first_name'
                            value={formData.first_name}
                            onChange={onChangeHandle}
                            placeholder='Enter first name'
                        />
                    </div>
                    <div className='col-lg-6'>
                        <InputField
                            label='Last Name'
                            name='last_name'
                            value={formData.last_name}
                            onChange={onChangeHandle}
                            placeholder='Enter last name'
                        />
                    </div>
                    <div className='col-lg-6'>
                        <SelectField
                            label="Gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleSelectChangeForGender}
                            placeholder="Select Gender"
                            options={genderOption}
                        />
                    </div>
                    <div className='col-lg-6'>
                        <DateRange
                            label="Date of Birth"
                            name="date_of_birth"
                            value={formData.date_of_birth}
                            onChange={onChangeHandle}
                        />
                    </div>
                    <div className='col-lg-4'>
                        <InputField
                            label='Nationality'
                            name='nationality'
                            value={formData.nationality}
                            onChange={onChangeHandle}
                            placeholder='Enter nationality'
                        />
                    </div>
                    <div className='col-lg-4'>
                        <InputField
                            label='Passport No.'
                            name='passport_no'
                            value={formData.passport_no}
                            onChange={onChangeHandle}
                            placeholder='Enter passport no'
                        />
                    </div>
                    <div className='col-lg-4'>
                        <DateRange
                            label="Passport Expiry Date"
                            name="passport_expiry_date"
                            value={formData.passport_expiry_date}
                            onChange={onChangeHandle}
                        />
                    </div>
                </div>
                <ModalFooter>
                    <button className='btn btn-primary' onClick={onClickSave}>Save</button>
                </ModalFooter>
            </ModalBody>
        </Modal>
    );
};

export default AddNewForm;
