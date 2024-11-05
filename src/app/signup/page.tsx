'use client'
import React, { useState } from 'react'
import { SignupContainerWrap } from './styled'
import PageTitle from '@/components/PageTitle/page'
import InputField from '@/components/InputFields/page'
import Image from 'next/image'

import logo from '../../assets/logo.png';
import CheckBoxInput from '@/components/CheckBoxInput/page'
import { useRouter } from 'next/navigation'
interface SignupFormProps {
  email_id: string,
  password: string
  confirm_password: string
  tc: boolean
}

const Signup = () => {

  const initialState = {
    email_id: '',
    password: '',
    confirm_password: '',
    tc: false
  }
  const navigate = useRouter()
  const [formData, setFormData] = useState<SignupFormProps>(initialState)

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  const onChangeCheckBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };
  const routeFn = (endpoint: string) => {
    navigate.push(endpoint)
  }

  return (
    <>
      <div className='p-3'>
        <Image src={logo} alt='logo' width={150} priority />
      </div>
      <SignupContainerWrap className='shadow position-absolute top-0 bottom-0 start-0 end-0 m-auto'>
        <PageTitle title='Sign up' />
        <InputField
          label='Email ID'
          name='email_id'
          value={formData.email_id}
          onChange={onChangeHandle}
          placeholder={'Enter your Email ID'}
        />
        <InputField
          label='Password'
          name='password'
          value={formData.password}
          onChange={onChangeHandle}
          placeholder={'Enter your Password'}
        />
        <InputField
          label='Confirm Password'
          name='confirm_password'
          value={formData.confirm_password}
          onChange={onChangeHandle}
          placeholder={'Enter your Password'}
        /> 
        <CheckBoxInput label='Accept Privacy Policy and Term and Conditions'
          name="tc"
          checked={formData.tc}
          onChange={onChangeCheckBoxHandler}
        />
        <button className='btn btn-secondary mb-2'>Sign up</button>
        <div className='text-center '>Already have a account ? <span className='text-primary pointer' onClick={() => routeFn('/signin')}>Click here</span></div>
      </SignupContainerWrap>
    </>
  )
}

export default Signup