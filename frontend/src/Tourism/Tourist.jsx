import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './tourist.css';
import SearchBar from './SearchBar';
import Station from './Station';
import Location from './Location';
import { station } from './data'; // Import your station data

function Tourist() {
  const [selectedLocation, setSelectedLocation] = useState(''); // State to track selected location

  // Handle location selection from SearchBar
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  // Filter stations based on the selected location
  const filteredStations = station.filter(station => station.station === selectedLocation);

  return (
    <Router>
      <div className="App">
        <SearchBar onLocationSelect={handleLocationSelect} />
        <Routes>
          <Route path="/location" element={<Location />} />
          <Route path="/" element={<Station stations={filteredStations} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Tourist;
