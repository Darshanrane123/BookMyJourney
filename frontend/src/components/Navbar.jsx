import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faSnowflake, faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // External CSS for styling

const Navbar = ({ onBookMyJourneyClick }) => {
  return (
    <>
      <div className="navbar-container">
        {/* BookMYJourney button */}
        <button className="navbar-button" onClick={onBookMyJourneyClick}>
          BookMYJourney
        </button>

        {/* Spacer */}
        <div className="navbar-spacer"></div>

        {/* Offers Section */}
        <div className="navbar-section">
          <FontAwesomeIcon icon={faSnowflake} className="navbar-icon" />
          <label className="navbar-label">Offers</label>
        </div>

        {/* Customer Care Section */}
        <div className="navbar-section">
          <FontAwesomeIcon icon={faHeadset} className="navbar-icon" />
          <label className="navbar-label">Customer Care</label>
        </div>

        {/* Spacer */}
        <div className="navbar-small-spacer"></div>

        {/* Login/Signin button with User Icon */}
        <button className="navbar-button">
          <FontAwesomeIcon icon={faUser} className="user-icon" />
          Login / Signup
        </button>
      </div>

      {/* Horizontal divider */}
      <hr className="navbar-divider" />
    </>
  );
};

export default Navbar;  