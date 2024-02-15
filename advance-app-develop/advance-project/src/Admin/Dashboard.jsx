import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "./Chart";
import "./Dashboard.css";

function Dashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/v1/auth/getbooking"
        );
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchData();
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
  // Define state variables for party data

  return (
    <div className="admin-dashboard">
      <div className="admin-nav">
        <h1>Admin Dashboard - Infinite Fiesta</h1>
        <Chart />
      </div>
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>Dashboard</h3>
        </div>
        <ul className="sidebar-menu">
          <li>
            <a href="/venueaddform">Venues</a>
          </li>
          <li>
            <a href="/partyaddform">Parties</a>
          </li>
          <li>
            <a href="/themeadd">Themes</a>
          </li>
          <li>
            <a href="/addtionaladd">Addtional</a>
          </li>
          <li>
            <a href="#users">Users</a>
          </li>
          <li>
            <a href="/login">Logout</a>
          </li>
        </ul>
      </div>

      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Venue</th>
              <th>Theme</th>
              <th>Additional Requirements</th>
              <th>Number of People</th>
              <th>Cake Requirement</th>
              <th>Duration</th>
              <th>Invitation Requirements</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.venue}</td>
                <td>{booking.theme}</td>
                <td>{booking.additionalRequirements}</td>
                <td>{booking.numberOfPeople}</td>
                <td>{booking.cakeRequirement}</td>
                <td>{booking.duration}</td>
                <td>{booking.invitationRequirements}</td>
                <td>{booking.date}</td>
                <td>
                  <button onClick={() => handleCancelBooking(booking.id)}>
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
