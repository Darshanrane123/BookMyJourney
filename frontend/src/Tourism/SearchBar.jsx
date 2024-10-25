import React, { useState } from 'react';

const SearchBar = ({ onLocationSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  // Predefined options for the dropdown
  const options = [
    'C Shivaji Mah T', 'Dadar', 'Thane', 'Panvel', 'Roha',
    'Mangaon', 'Veer', 'Khed', 'Chiplun', 'Savarda',
    'Aravali Road', 'Sangmeshwar', 'Ratnagiri', 'Adavali',
    'Vilavade', 'Rajapur Road', 'Vaibhavwadi Road', 'Nandgaon Road',
    'Kankavali', 'Sindhudurg', 'Kudal', 'Zarap', 'Sawantwadi Road',
    'Madure', 'Pernem', 'Thivim', 'Karmali', 'Madgaon'
  ];

  // Handle input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setShowDropdown(event.target.value !== ''); // Show dropdown if there's input
  };

  // Handle option click
  const handleOptionClick = (option) => {
    setSearchTerm(option); // Set the search bar to the selected option
    setShowDropdown(false); // Hide the dropdown
    onLocationSelect(option); // Pass selected location to the parent component
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    backgroundColor: '', // Update this to your desired background color
  };

  return (
    <>
      
      <div style={{ position: 'relative', width: '200px', margin: '0 auto', marginBlockEnd:'30px' , marginBlockStart:'30px'}}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search..."
          style={inputStyle}
        />
        {showDropdown && (
          <ul
            style={{
              position: 'absolute',
              width: '100%',
              backgroundColor: 'white',
              border: '1px solid #ccc',
              marginTop: '5px',
              listStyleType: 'none',
              padding: '0',
              zIndex: 1001,
            }}
          >
            {options
              .filter(option => option.toLowerCase().includes(searchTerm.toLowerCase())) // Filter options based on search term
              .slice(0, 3) // Limit to 3 options
              .map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  style={{
                    padding: '8px',
                    cursor: 'pointer',
                    borderBottom: index < options.length - 1 ? '1px solid #ccc' : 'none',
                    backgroundColor: '#f0f0f0', // Optional: hover background color
                  }}
                >
                  {option}
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchBar;
