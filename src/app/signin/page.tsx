'use client'
import React, { useState } from 'react'
import { SigninContainerWrap } from './styled'
import PageTitle from '@/components/PageTitle/page'
import InputField from '@/components/InputFields/page'
import Image from 'next/image'

import logo from '../../assets/logo.png';
import { useRouter } from 'next/navigation'
interface SignInFormProps {
  email_id: string,
  password: string
}

const Signin = () => {

  const initialState = {
    email_id: '',
    password: ''
  }
  const navigate = useRouter()
  const [formData, setFormData] = useState<SignInFormProps>(initialState)

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
      <SigninContainerWrap className='shadow position-absolute top-0 bottom-0 start-0 end-0 m-auto'>
        <PageTitle title='Sign in' />
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
        <div className='text-end text-primary pointer' onClick={() => routeFn('/forgot-password')}>Forgot Password?</div>
        <button className='btn btn-secondary mb-2'>Sign in</button>
        <div className='text-center '>Create a new account ? <span className='text-primary pointer' onClick={() => routeFn('/signup')}>Click here</span></div>
      </SigninContainerWrap>
    </>
  )
}

export default Signin