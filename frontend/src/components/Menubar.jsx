import React from 'react';
import './Menubar.css'; // Assuming you have a CSS file for styling

const Menubar = ({ onSectionChange }) => {
  return (
    <div className="menu-container">
      <div className="menu-item" onClick={() => onSectionChange('buses')}>
        <img src="/Buses.jpeg" alt="Buses" className="menu-image" />
        <label className="menu-label">Buses</label>
      </div>

      <div className="menu-item" onClick={() => onSectionChange('trains')}>
        <img src="/Trains.jpeg" alt="Trains" className="menu-image" />
        <label className="menu-label">Trains</label>
      </div>

      <div className="menu-item" onClick={() => onSectionChange('flights')}>
        <img src="/Flights.jpeg" alt="Flights" className="menu-image" />
        <label className="menu-label">Flights</label>
      </div>

      <div className="menu-item" onClick={() => onSectionChange('hotels')}>
        <img src="/Hotels.jpeg" alt="Hotels" className="menu-image" />
        <label className="menu-label">Hotels</label>
      </div>
    </div>
  );
};

export default Menubar;