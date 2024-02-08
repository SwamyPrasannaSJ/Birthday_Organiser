import React from 'react'
import { Link } from 'react-router-dom'
import "./Admin.css"

export default function Admin() {
  return (
    <>
        <div className='admin'>
            <Link to='/viewBookings' id='a-link'>View All Bookings</Link>
            <Link to='/deleteBookings'id='a-link'>Delete Bookings</Link>
        </div>
    </>
  )
}