import React, { useState } from 'react';
import './BusBooking.css'; // Assuming you have a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BusBooking = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    // Logic to search bus data
    console.log('Searching buses from:', from, 'to:', to, 'on:', date);
  };

  const handleSwap = () => {
    // Swap the source and destination values
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="bus-booking-container">
      <h2>Bus Booking</h2>
      <div className="bus-inputs">
        <input
          type="text"
          placeholder="From/Source"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="bus-input"
        />
        <FontAwesomeIcon 
          icon={faArrowRightArrowLeft} 
          className="swap-icon" 
          onClick={handleSwap} 
        />
        <input
          type="text"
          placeholder="To/Destination"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="bus-input"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bus-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
    </div>
  );
};

export default BusBooking;
