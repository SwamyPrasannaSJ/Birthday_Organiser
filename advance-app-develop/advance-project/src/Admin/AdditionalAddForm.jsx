import React, { useState } from "react";
import axios from "axios";
import "./VenueAddForm.css";

function AdditionalAddForm() {
  const [formData, setFormData] = useState({
    img: "",
    addonName: "",
    details: "",
  });

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
      const response = await axios({
        method: "post",
        url: "http://localhost:8081/postaddion",
        data: formData,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(formData);
      // Log response if needed
      // Reset form after successful submission
      setFormData({
        img: "",
        addonName: "",
        details: "",
      });
    } catch (error) {
      console.error("Error occurred:", error); // Log error if any
    }
  };

  return (
    <div className="venue-add-form-container">
      <h2>Add Additional Data</h2>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="addonName">Additional Name</label>
          <input
            type="text"
            id="addonName"
            name="addonName"
            placeholder="Enter additional name"
            value={formData.addonName}
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
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdditionalAddForm;
