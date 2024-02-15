import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeCart } from "../Redux/actions/action";
import "../Bookings/Booking.css"; // Import your CSS file for additional styling
import Navbar from "../Navbar/Navbar";
import axios from "axios"; // Import axios for making API calls

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch bookings data from the backend API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/v1/auth/getbooking" // Update the API endpoint to fetch bookings
        );
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchData(); // Invoke the fetchData function
  }, []);

  const handleCancelBooking = async (bookingId) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      try {
        // Make a DELETE request to cancel the booking
        await axios.delete(
          `http://localhost:8081/api/v1/auth/deletebooking/${bookingId}`
        );

        // Update the state to reflect the canceled booking
        setBookings(bookings.filter((booking) => booking.id !== bookingId));
      } catch (error) {
        console.error("Error canceling booking:", error);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <center>
          <h1 id="s-title">MY BOOKINGS</h1>
        </center>
      </div>
      {bookings.length > 0 ? (
        <div className="bookings">
          {bookings.map((booking) => (
            <div key={booking.id} className="booking-card">
              <div className="booking-details">
                <h2>Venue: {booking.venue}</h2>
                <p>Theme: {booking.theme}</p>
                <p>Additional Requirements: {booking.additionalRequirements}</p>
                <p>Number of People: {booking.numberOfPeople}</p>
                <p>Cake Requirement: {booking.cakeRequirement}</p>
                <p>Duration: {booking.duration}</p>
                <p>Invitation Requirements: {booking.invitationRequirements}</p>
                <p>Date: {booking.date}</p>
              </div>
              <div className="booking-actions">
                <button onClick={() => handleCancelBooking(booking.id)}>
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        "No bookings"
      )}
    </div>
  );
};

export default Booking;
