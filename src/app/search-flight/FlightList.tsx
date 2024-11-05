'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

import logo from '../../assets/logo.png';
const FlightList = () => {

    const navigate = useRouter()
    const routeFn = (endpoint: string) => {
        navigate.push(endpoint)
    }

    return (
        <div>
            <div className='d-lg-flex text-center gap-3 justify-content-between p-3 rounded shadow mb-3'>
                <div className=' p-3'>
                    <Image src={logo} alt='logo' width={30} height={30} />
                </div>
                <div>
                    <h5>10:25</h5>
                    <div>BOM</div>
                </div>
                <div className='text-center'>
                    <div className='px-5 '><small>4 hr 00 min</small></div>
                    <hr className='m-0 p-0'></hr>
                    <div className='px-5 '><small>non stop </small></div>

                </div>
                <div>
                    <h5>14:25</h5>
                    <div>STV</div>
                </div>
                <div>
                    <div>
                        <h4>$ 109.00</h4>
                    </div>
                    <button className='btn btn-primary' onClick={() => routeFn('/checkout-ticket')}>Select</button>
                </div>
            </div>
        </div>
    )
}

export default FlightList