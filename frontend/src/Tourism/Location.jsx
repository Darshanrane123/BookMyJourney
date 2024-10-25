// src/components/Location.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const Location = () => {
  const location = useLocation(); // Get the current location object
  const { station } = location.state || {}; // Destructure the station from state

  // If there's no station data, show a message
  if (!station) {
    return <h2>No station data found</h2>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2 style={{padding:"0px",margin:"0px"}}>{station.name}</h2> {/* Display the station name */}
      <img
        src={station.img_path} // Show the station image
        alt={station.name} // Use the station name for the alt text
        style={{ width: '300px', height: '200px', objectFit: 'cover' }} // Set image size
      />
      <p>{station.description}</p> {/* Display the station description */}
    </div>
  );
};

export default Location;
