import React from 'react';
import Navbar from '../components/Navbar';

// eslint-disable-next-line react/prop-types
const Home = ({ onBookMyJourneyClick }) => {
  return (
    <div>
      {/* Pass the click handler to the Navbar */}
      <Navbar onBookMyJourneyClick={onBookMyJourneyClick} />
      {/* Other home content can go here */}
    </div>
  );
};

export default Home;
