import React from "react";
import "./house.css"; // Import the CSS file
import healthcare from "./healthcare.json"; // Import the JSON file

const House = () => {
  return (
    <div>
      <h1 id="house-title">Available healthcare</h1>
      {healthcare.map((centre, index) => (
        <div key={index} className="house-card">
          <h2>{centre.name}</h2>
          <p>
            <strong>Specialization:</strong> {centre.specialization}
          </p>
          <p>
            <strong>Ailment:</strong> {centre.ailment}
          </p>
          <p>
            <strong>Hospital:</strong> {centre.hospital}
          </p>
          <p>
            <strong>Contact Number:</strong> {centre.contact_number}
          </p>
          <p>
            <strong>Location:</strong> {centre.location}
          </p>
          <p>
            <strong>Visit Hours:</strong> {centre.visit_hours}
          </p>
        </div>
      ))}
    </div>
  );
};

export default House;
