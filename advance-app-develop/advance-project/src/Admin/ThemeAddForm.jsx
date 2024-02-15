import React, { useState } from "react";
import axios from "axios";
import "./VenueAddForm.css";

function ThemeAddForm() {
  const [formData, setFormData] = useState({
    img: "",
    themeName: "",
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
        url: "http://localhost:8081/api/v1/auth/posttheme",
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
        themeName: "",
        details: "",
      });
    } catch (error) {
      console.error("Error occurred:", error); // Log error if any
    }
  };

  return (
    <div className="venue-add-form-container">
      <h2>Add Theme</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="img">Theme Image</label>
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
          <label htmlFor="themeName">Theme Name</label>
          <input
            type="text"
            id="themeName"
            name="themeName"
            placeholder="Enter Theme name"
            value={formData.themeName}
            onChange={handleChange}
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

export default ThemeAddForm;
