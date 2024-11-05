'use client'
import React, { useState } from 'react'
import { ResetPasswordContainerWrap } from './styled'
import PageTitle from '@/components/PageTitle/page'
import InputField from '@/components/InputFields/page'
import Image from 'next/image'

import logo from '../../assets/logo.png';
interface ResetPasswordFormProps {
  password: string
  cpassword: string,
}

const ResetPassword = () => {

  const initialState = {
    password: '',
    cpassword: ''
  }

  const [formData, setFormData] = useState<ResetPasswordFormProps>(initialState)

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <>
      <div className='p-3'>
        <Image src={logo} alt='logo' width={150} priority />
      </div>
      <ResetPasswordContainerWrap className='shadow position-absolute top-0 bottom-0 start-0 end-0 m-auto'>
        <PageTitle title='Reset Password' />
        <InputField
          label='Password'
          name='password'
          value={formData.password}
          onChange={onChangeHandle}
          placeholder={'Enter your Password'}
        />
        <InputField
          label='Confirm Password'
          name='cpassword'
          value={formData.cpassword}
          onChange={onChangeHandle}
          placeholder={'Enter your Password'}
        />
        <button className='btn btn-secondary mb-2'>Submit</button>
      </ResetPasswordContainerWrap>
    </>
  )
}

export default ResetPassword