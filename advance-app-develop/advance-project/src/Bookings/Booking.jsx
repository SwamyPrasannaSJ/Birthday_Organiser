import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { removeCart } from '../Redux/actions/action';
import '../Bookings/Booking.css'
import Navbar from '../Navbar/Navbar';

const Booking = () => {

    const allProd=useSelector(state=>state)
    const bookings=allProd.allProducts.cartProduct
    const dispatch=useDispatch();

    const [num,setNum]=useState(true)
    useEffect(() => {
      if(bookings==null){
        setNum(false)
      }else{
        setNum(true)
      }
    })

  return (
    <div>
      
      <Navbar/>
      <div><center><h1 id='s-title'>MY BOOKINGS</h1></center></div>
       {num?
          <div className='bookings'>
          {bookings.map(booking=>
              <div className='booking'>
                  <img src={booking.link}/>
                  <h1 id='s-name'>{booking.name}</h1>
                
                {/* <button onClick={
                  dispatch(editProducts(booking))
                  }>Approve</button> */}
                {/* <button onClick={
                  dispatch(removeCart(booking))
                }>Cancel</button> */}
                 <button onClick={()=>{

                confirm("Are you sure of cancelling the booking")
                dispatch(removeCart(booking))
                }
                }>Cancel</button>
              </div>
          )}
          </div> :" No bookings"

            }
    </div>
  )
}

export default Booking;
