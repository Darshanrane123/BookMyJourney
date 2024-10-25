import React from 'react';

const ButtonWithImage = ({ text, image }) => {
  return (
    <div>
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
          width: '600px',
          transition: 'transform 0.3s ease, border-color 0.3s ease',
          border: '2px solid black',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)'; // Zoom effect on hover
          e.currentTarget.style.borderColor = 'red'; // Red border on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; // Reset zoom effect
          e.currentTarget.style.borderColor = 'black'; // Reset border color
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.borderColor = 'red'; // Red border on click
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.borderColor = 'black'; // Reset border after click
        }}
      >
        <img
          src={image}
          alt={text}
          style={{
            width: '400px',
            height: '400px',
            marginRight: '10px',
            border: '2px solid black',
            borderRadius: '5px',
          }}
        />
        <span
          style={{
            fontSize: '20px', // Customize text size
            fontWeight: 'bold', // Make the text bold
            color: '#333', // Customize text color
          }}
        >
          {text}
        </span>
      </button>
    </div>
  );
};

export default ButtonWithImage;
