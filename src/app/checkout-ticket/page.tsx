'use client'
import React, { useState } from 'react'
import { CheckoutTicketWrap } from './styled'
import AddNewFrom from './AddNewFrom'
import InputField from '@/components/InputFields/page';

import logo from '../../assets/logo.png';
import Image from 'next/image';
interface ContactDatailsFormProps {
    email_id: string;
    phone_no: string;
}

interface PassengerDetail {
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

const CheckoutTicket = () => {

    const initialState: ContactDatailsFormProps = {
        email_id: '',
        phone_no: '',
    };
    const [formData, setFormData] = useState<ContactDatailsFormProps>(initialState);
    const [addNewPopup, setAddNewPopup] = useState(false)
    type PassengerDetailsArrayProps = PassengerDetail[];
    const [passengerArr, setPassengerArr] = useState<PassengerDetailsArrayProps>([])
    const onClickAddNew = () => {
        setAddNewPopup(pre => !pre)
    }
    const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleSave = (newData: PassengerDetail) => {
        console.log(newData);
        setPassengerArr(prevArr => [...prevArr, newData]);
        setAddNewPopup(false);
    };

    return (
        <CheckoutTicketWrap>
            <AddNewFrom open={addNewPopup} close={onClickAddNew} save={handleSave} />
            <div className='container'>
                <div className='row mb-3'>
                    <div className='col-lg-12 '>
                        <div className='fs-4 mb-3'>
                            Flight Details
                        </div>

                        <div className='d-lg-flex text-center gap-3 justify-content-between p-3 shadow rounded mb-3'>
                            <div className=' p-3'>
                                <Image src={logo} alt='logo' width={30} height={30} />
                            </div>
                            <div>
                                <h5>10:25</h5>
                                <small>BOM</small>
                            </div>
                            <div className='text-center'>
                                <small className='px-5 '><small>4 hr 00 min</small></small>
                                <hr className='m-0 p-0'></hr>
                                <small className='px-5 '><small>non stop </small></small>

                            </div>
                            <div>
                                <h5>14:25</h5>
                                <small>STV</small>
                            </div>
                            <div>
                                <h5>$ 109.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-12 '>
                        <div className=' mb-3'>
                            <div className='d-flex justify-content-between'>
                                <div className='fs-4'> Contact Details</div>
                            </div>
                        </div>

                        <div className='shadow  p-3 rounded'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <InputField
                                        label='Email ID'
                                        name='email_id'
                                        value={formData.email_id}
                                        onChange={onChangeHandle}
                                        placeholder='Enter your email id'
                                    />
                                </div>
                                <div className='col-lg-6'>
                                    <InputField
                                        label='Phone no.'
                                        name='phone_no'
                                        value={formData.phone_no}
                                        onChange={onChangeHandle}
                                        placeholder='Enter your Phone number'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-3'>
                    <div className=' mb-3'>
                        <div className='d-flex justify-content-between'>
                            <div className='fs-4'> Passenger Details</div>
                            <button className='btn' onClick={onClickAddNew}>+ Add</button>
                        </div>
                    </div>

                    {passengerArr.length > 0 && passengerArr.map((ele, index) =>


                        <div key={index} className=' gap-3 justify-content-between p-3 shadow rounded mb-3'>
                            <div className=' row'>
                                <div className='fw-bold mb-2'>Passenger : {index + 1}</div>
                                <hr />
                                <div className='col-lg-4 mb-3'>
                                    <small className='fw-bold'>Name : </small>
                                    <div className='fs-5'>{ele.first_name} {ele.last_name}</div>
                                </div>
                                <div className='col-lg-4 mb-3'>
                                    <small className='fw-bold'>Gender : </small>
                                    <div className='fs-5'>{ele.gender.value}</div>
                                </div>
                                <div className='col-lg-4 mb-3'>
                                    <small className='fw-bold'>DOB : </small>
                                    <div className='fs-5'>{ele.date_of_birth}</div>
                                </div>
                                <div className='col-lg-4 mb-3'>
                                    <small className='fw-bold'>Nationality : </small>
                                    <div className='fs-5'>{ele.nationality}</div>
                                </div>
                                <div className='col-lg-4 mb-3'>
                                    <small className='fw-bold'>Passport No. : </small>
                                    <div className='fs-5'>{ele.passport_no}</div>
                                </div>
                                <div className='col-lg-4 mb-3'>
                                    <small className='fw-bold'>Passport Expiry Date. : </small>
                                    <div className='fs-5'>{ele.passport_expiry_date}</div>
                                </div>
                            </div>
                        </div>
                    ) || <div className='fw-bold text-center p-3'>No passenger details added yet!</div>}
                </div>

                <div className='mb-5 text-end'>
                    <button className='btn btn-primary'>Confim</button>
                </div>
            </div>

        </CheckoutTicketWrap>
    )
}

export default CheckoutTicket