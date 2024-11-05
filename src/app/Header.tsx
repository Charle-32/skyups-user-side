'use client'
import Image from 'next/image';
import React from 'react';
import logo from '../assets/logo.png';
import { HeaderContainerWrap } from './styled';
import { useRouter } from 'next/navigation';



const Header = () => {

    const navigate = useRouter()
    return (
        <HeaderContainerWrap>
            <div className=' fixed-top  herade_container'>
                <div className='container p-3'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='logos pointer' onClick={()=>navigate.push('/')}>
                            <Image src={logo} alt='logo' width={30} height={30} /><span className='ms-2'>Skyups.com</span>
                        </div>
                        <button className='btn btn-outline-secondary'>Check Status</button>
                    </div>
                </div>
            </div>
        </HeaderContainerWrap>
    );
}

export default Header;
