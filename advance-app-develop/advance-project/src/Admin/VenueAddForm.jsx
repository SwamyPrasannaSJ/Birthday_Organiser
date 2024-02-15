import React, { useState, useEffect } from "react";
import axios from "axios";
import "./VenueAddForm.css";

function VenueAddForm() {
  const [formData, setFormData] = useState({
    img: "",
    venueName: "",
    details: "",
  });

  const [venues, setVenues] = useState([]); // To store the list of venues
  const [selectedVenueId, setSelectedVenueId] = useState(""); // To store the selected venue ID for editing

  useEffect(() => {
    // Fetch the list of venues when the component mounts
    const fetchVenues = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/v1/auth/getvenue"
        );
        setVenues(response.data);
      } catch (error) {
        console.error("Error fetching venues:", error);
      }
    };

    fetchVenues();
  }, []);

  const handleVenueChange = (event) => {
    // Update the selected venue ID when the dropdown changes
    setSelectedVenueId(event.target.value);

    // Fetch venue details and populate the form
    const fetchVenueDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/v1/auth/getvenue"
        );
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching venue details:", error);
      }
    };

    fetchVenueDetails();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (selectedVenueId) {
        // If selectedVenueId is present, update the existing venue
        await axios.put(
          `http://localhost:8081/api/v1/auth/updatevenue/${selectedVenueId}`,
          formData
        );
      } else {
        // If selectedVenueId is not present, add a new venue
        await axios.post(
          "http://localhost:8081/api/v1/auth/postvenue",
          formData
        );
      }

      // Reset form after successful submission
      setFormData({
        img: "",
        venueName: "",
        details: "",
      });
      setSelectedVenueId(""); // Reset selectedVenueId after submission
    } catch (error) {
      console.error("Error occurred:", error); // Log error if any
    }
  };

  return (
    <div className="venue-add-form-container">
      <h2>{selectedVenueId ? "Edit Venue" : "Add Venue"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="selectVenue">Select Venue to Edit</label>
          <select
            id="selectVenue"
            name="selectVenue"
            onChange={handleVenueChange}
            value={selectedVenueId}
          >
            <option value="">Select Venue</option>
            {venues.map((venue) => (
              <option key={venue.id} value={venue.id}>
                {venue.venueName}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="img">Venue Image</label>
          <input
            type="text"
            id="img"
            name="img"
            placeholder="Enter image URL"
            value={formData.img}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="venueName">Venue Name</label>
          <input
            type="text"
            id="venueName"
            name="venueName"
            placeholder="Enter venue name"
            value={formData.venueName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="details">Details</label>
          <textarea
            id="details"
            name="details"
            placeholder="Enter venue details"
            value={formData.details}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-submit">
          {selectedVenueId ? "Update" : "Add Venue"}
        </button>
      </form>
    </div>
  );
}

export default VenueAddForm;
