import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Book.css";

const ViewBooking = () => {
  const allProd = useSelector((state) => state);
  const bookings = allProd.allProducts.cartProduct;
  const dispatch = useDispatch();
  const [num, setNum] = useState(true);
  useEffect(() => {
    if (bookings == null) {
      setNum(false);
    } else {
      setNum(true);
    }
  });

  return (
    <div>
      <div>
        <center>
          <h1 id="s-title">ALL BOOKINGS</h1>
        </center>
      </div>
      {num ? (
        <div className="bookings">
          {bookings.map((booking) => (
            <div className="booking">
              <img src={booking.link} />
              <h1 id="s-name">{booking.name}</h1>
              <p id="s-price">₹{booking.price}</p>
              <p id="s-price">{booking.location}</p>
              <p id="s-price">{booking.dur}</p>
              <p id="s-price">{booking.statu}</p>
            </div>
          ))}
        </div>
      ) : (
        " No bookings"
      )}
    </div>
  );
};

export default ViewBooking;
