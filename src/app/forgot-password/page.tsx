'use client'
import React, { useState } from 'react'
import PageTitle from '@/components/PageTitle/page'
import InputField from '@/components/InputFields/page'
import Image from 'next/image'

import logo from '../../assets/logo.png';
import { ForgotPasswordContainerWrap } from './styled'
import { useRouter } from 'next/navigation'
interface ForgotPasswordFormProps {
  email_id: string,
}

const ForgotPassword = () => {

  const initialState = {
    email_id: '',
  }
  const navigate = useRouter()
  const [formData, setFormData] = useState<ForgotPasswordFormProps>(initialState)

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  const routeFn = (endpoint: string) => {
    navigate.push(endpoint)
  }

  return (
    <>
      <div className='p-3'>
        <Image src={logo} alt='logo' width={150} priority />
      </div>
      <ForgotPasswordContainerWrap className='shadow position-absolute top-0 bottom-0 start-0 end-0 m-auto'>
        <PageTitle title='Forgot Password' />
        <InputField
          label='Email ID'
          name='email_id'
          value={formData.email_id}
          onChange={onChangeHandle}
          placeholder={'Enter your Email ID'}
        />
        <button className='btn btn-secondary mb-2'>Submit</button>
        <div className='text-center '>Back to <span className='text-primary pointer' onClick={() => routeFn('/signin')}>Sign In</span></div>
      </ForgotPasswordContainerWrap>
    </>
  )
}

export default ForgotPassword