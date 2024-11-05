'use client'
import React from 'react'
import FlightList from './FlightList'
import { useSelector } from 'react-redux'

const SearchFlight = () => {
    const searchInfo = useSelector(state => state)
    console.log(searchInfo);
    
    const flightListView = () => {
        const list = []
        for (let index = 0; index < 20; index++) {
            list.push(<FlightList key={index} />)
        }
        return list
    }
    return (
        <div className='container'>
            <div className=''>
                {flightListView()}
            </div>
        </div>
    )
}

export default SearchFlight