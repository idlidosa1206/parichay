import React, { useEffect, useState } from "react";
import educationData from "./edu.json";
import "./edu.css"

function EducationApp() {
  const [degrees, setDegrees] = useState([]);
  const [filteredDegrees, setFilteredDegrees] = useState([]);
  const [degreeFilter, setDegreeFilter] = useState("");
  const [universityFilter, setUniversityFilter] = useState("");
  const [mediumFilter, setMediumFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    setDegrees(educationData.degrees);
  }, []);

  useEffect(() => {
    // Filter degrees based on selected filters
    const filtered = degrees.filter((degree) => {
      if (
        degreeFilter &&
        degree.degree.toLowerCase() !== degreeFilter.toLowerCase()
      ) {
        return false;
      }
      if (
        universityFilter &&
        degree.university.toLowerCase() !== universityFilter.toLowerCase()
      ) {
        return false;
      }
      if (
        mediumFilter &&
        degree.medium.toLowerCase() !== mediumFilter.toLowerCase()
      ) {
        return false;
      }
      if (
        locationFilter &&
        degree.location.toLowerCase() !== locationFilter.toLowerCase()
      ) {
        return false;
      }
      return true;
    });
    setFilteredDegrees(filtered);
  }, [degrees, degreeFilter, universityFilter, mediumFilter, locationFilter]);

  return (
    <div>
      <h1>Education App</h1>
      <div>
        <label htmlFor="degree">Select Degree:</label>
        <select
          id="degree"
          value={degreeFilter}
          onChange={(e) => setDegreeFilter(e.target.value)}
        >
          <option value="">All Degrees</option>
          {/* Populate options dynamically */}
          {degrees.map((degree, index) => (
            <option key={index} value={degree.degree}>
              {degree.degree}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="university">Select University:</label>
        <select
          id="university"
          value={universityFilter}
          onChange={(e) => setUniversityFilter(e.target.value)}
        >
          <option value="">All Universities</option>
          {/* Populate options dynamically */}
          {degrees.map((degree, index) => (
            <option key={index} value={degree.university}>
              {degree.university}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="medium">Select Medium:</label>
        <select
          id="medium"
          value={mediumFilter}
          onChange={(e) => setMediumFilter(e.target.value)}
        >
          <option value="">All Mediums</option>
          {/* Populate options dynamically */}
          {degrees.map((degree, index) => (
            <option key={index} value={degree.medium}>
              {degree.medium}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="location">Select Location:</label>
        <select
          id="location"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="">All Locations</option>
          {/* Populate options dynamically */}
          {degrees.map((degree, index) => (
            <option key={index} value={degree.location}>
              {degree.location}
            </option>
          ))}
        </select>
      </div>
      <hr />
      {filteredDegrees.length > 0 ? (
        <div>
          <h2>Filtered Degrees:</h2>
          {filteredDegrees.map((degree, index) => (
            <div key={index} className="edus">
              <h3>{degree.degree}</h3>
              <p>University: {degree.university}</p>
              <p>Medium: {degree.medium}</p>
              <p>Location: {degree.location}</p>
              <p>Session Begin: {degree.session_begin}</p>
              <p>
                <a href={degree.register_link}>Register</a>
              </p>
              <p>Basic Requirements:</p>
              <ul>
                {degree.requirements.map((requirement, i) => (
                  <ul key={i}>{requirement}</ul>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>No degrees found based on selected filters.</p>
      )}
    </div>
  );
}

export default EducationApp;
