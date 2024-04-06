import React from "react";
import "./house.css"; // Import the CSS file
import houseData from "./houses.json"; // Import the JSON file

const House = () => {
  return (
    <div>
      <h1 id="house-title">Houses available</h1>
      {houseData.map((house, index) => (
        <div key={index} className="house-card">
          <h2>{house.title}</h2>
          <p>
            <strong>Location:</strong> {house.location}
          </p>
          <p>
            <strong>Price:</strong> {house.price}
          </p>
          <p>{house.description}</p>
        </div>
      ))}
    </div>
  );
};

export default House;
