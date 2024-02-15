import React, { useState } from "react";
import "./Party.css";
function Party() {
  const [parties, setParties] = useState([]);

  // Function to add a new party
  const addParty = () => {
    // Implement logic to add a new party
  };

  // Function to delete a party
  const deleteParty = (id) => {
    // Implement logic to delete the party with the given id
  };
  return (
    <div className="party-dashboard">
      <div className="party-nav">
        <h1>ADD PARTY</h1>
      </div>

      {/* Form to add a new party */}
      <form onSubmit={addParty}>
        <input type="text" placeholder="Party Name" />
        <input type="text" placeholder="Date" />
        <input type="text" placeholder="Location" />
        <button type="submit">Add Party</button>
      </form>

      {/* List of parties */}
      <div className="party-list">
        {parties.map((party, index) => (
          <div key={index} className="party-item">
            <h3>{party.name}</h3>
            <p>Date: {party.date}</p>
            <p>Location: {party.location}</p>
            <button onClick={() => deleteParty(party.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Party;
