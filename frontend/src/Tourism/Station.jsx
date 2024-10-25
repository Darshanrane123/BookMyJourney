import React from 'react';
import { Link } from 'react-router-dom';
import ButtonWithImage from './ButtonWithImage';

const Station = ({ stations }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap', // Allows items to wrap to the next line if necessary
        justifyContent: 'center', // Center the items in the container
        gap: '20px', // Space between the buttons
        padding: '20px',
      }}
    >
      {stations.length > 0 ? (
        stations.map((station) => (
          <Link
            key={station.id}
            to="/location"
            state={{ station }} // Pass the entire station object to the Location component
            style={{ textDecoration: 'none' }}
          >
            <ButtonWithImage
              text={station.name} // Show the station name on the button
              image={station.img_path} // Show the image for each station
            />
          </Link>
        ))
      ) : (
        <p>No stations available for the selected location. Please choose another location.</p>
      )}
    </div>
  );
};

export default Station;
