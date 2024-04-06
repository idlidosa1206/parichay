import React from "react";
import "./job.css"; 
const Job = ({ position, location, stipend, description }) => {
  return (
    <div className="job-card">
      <h2>{position}</h2>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Stipend:</strong> {stipend}
      </p>
      <p>{description}</p>
    </div>
  );
};

export default Job;
