// import React, { useState } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeadset, faSnowflake, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
// import './Navbar.css';

// const Navbar = ({ onBookMyJourneyClick }) => {
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isSignup, setIsSignup] = useState(false);
//   const [userData, setUserData] = useState({ name: '', email: '', password: '' });
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const toggleLoginPopup = () => {
//     setIsLoginOpen(!isLoginOpen);
//     setUserData({ name: '', email: '', password: '' }); // Reset user data
//   };

//   const switchToSignup = () => {
//     setIsSignup(true);
//   };

//   const switchToLogin = () => {
//     setIsSignup(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

  

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/signup', userData);
//       alert('Signup successful!');
//       toggleLoginPopup();
//     } catch (error) {
//       alert('Error signing up: ' + error.response.data);
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault(); // Prevent default form submission

//     try {
//         const response = await axios.post('http://localhost:5000/login', {
//             email: userData.email,
//             password: userData.password,
//         });

//         // Destructure the token and name from the response data
//         const { token, name } = response.data;

//         // Store the token and user's name in local storage
//         localStorage.setItem('token', token);
//         localStorage.setItem('userName', name);

//         // Update login state
//         setIsLoggedIn(true);

//         // Optionally toggle a popup or redirect
//         toggleLoginPopup(); // Assuming this handles UI changes
//         // Or you can redirect to a dashboard or home page
//         // window.location.href = '/dashboard'; // Uncomment this if you want to redirect
//     } catch (error) {
//         // Display error message if login fails
//         alert('Error logging in: ' + error.response.data);
//     }
// };


//   const userName = localStorage.getItem('userName');
  
  

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userName');

//     setIsLoggedIn(false);
//   };

//   return (
//     <>
//       <div className="navbar-container">
//         <button className="navbar-button" onClick={onBookMyJourneyClick}>
//           BookMYJourney
//         </button>

//         <div className="navbar-spacer"></div>

//         <div className="navbar-section">
//           <FontAwesomeIcon icon={faSnowflake} className="navbar-icon" />
//           <label className="navbar-label">Offers</label>
//         </div>

//         <div className="navbar-section">
//           <FontAwesomeIcon icon={faHeadset} className="navbar-icon" />
//           <label className="navbar-label">Customer Care</label>
//         </div>

//         <div className="navbar-small-spacer"></div>

//         {isLoggedIn ? (
//           <button className="navbar-button" onClick={handleLogout}>
            
//             Logout
//           </button>
//         ) : (
//           <button className="navbar-button" onClick={toggleLoginPopup}>
//             <FontAwesomeIcon icon={faUser} className="user-icon" />
//             Login / Signup
//           </button>

            
//         )}
//       </div>

//       <hr className="navbar-divider" />

//       {/* Popup for Login/Signup */}
//       {isLoginOpen && (
//         <div className="popup-container">
//           <FontAwesomeIcon icon={faTimes} className="popup-close" onClick={toggleLoginPopup} />

//           <div className="popup-box">
//             {isSignup ? (
//               <>
//                 <h2>Sign Up</h2>
//                 <form onSubmit={handleSignup}>
//                   <div className="form-group">
//                     <label>Name:</label>
//                     <input type="text" name="name" value={userData.name} onChange={handleInputChange} className="input-login" placeholder="Enter your name" required />
//                   </div>
//                   <div className="form-group">
//                     <label>Email:</label>
//                     <input type="email" name="email" value={userData.email} onChange={handleInputChange} className="input-login" placeholder="Enter your email" required />
//                   </div>
//                   <div className="form-group">
//                     <label>Password:</label>
//                     <input type="password" name="password" value={userData.password} onChange={handleInputChange} className="input-login" placeholder="Enter your password" required />
//                   </div>
//                   <br></br>
//                   <button type="submit" className="navbar-button">Sign Up</button>
//                 </form>
//                 <p>
//                   Already have an account?{' '}
//                   <span className="link" onClick={switchToLogin}>
//                     Login here
//                   </span>
//                 </p>
//               </>
//             ) : (
//               <>
//                 <h2>Login</h2>
//                 <form onSubmit={handleLogin}>
//                   <div className="form-group">
//                     <label>Email:</label>
//                     <input type="email" name="email" value={userData.email} onChange={handleInputChange} className="input-login" placeholder="Enter your email" required />
//                   </div>
//                   <div className="form-group">
//                     <label>Password:</label>
//                     <input type="password" name="password" value={userData.password} onChange={handleInputChange} className="input-login" placeholder="Enter your password" required />
//                   </div>
//                   <br></br>
//                   <button type="submit" className="navbar-button">Login</button>
//                 </form>
//                 <p>
//                   Don't have an account?{' '}
//                   <span className="link" onClick={switchToSignup}>
//                     Sign up here
//                   </span>
//                 </p>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

/******************************************************************************************************************************** */
import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faSnowflake, faUser, faTimes, faTicket, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = ({ onBookMyJourneyClick }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? true : false); // Check if user is logged in from local storage
  const [bookingDetails, setBookingDetails] = useState(null); // To store booking details
  const [searchEmail, setSearchEmail] = useState(''); // Email input for search
  const [searchError, setSearchError] = useState(''); // Error handling for search
  const [showBookingSection, setShowBookingSection] = useState(false); // Control when to show the booking section

  const toggleLoginPopup = () => {
    setIsLoginOpen(!isLoginOpen);
    setUserData({ name: '', email: '', password: '' }); // Reset user data
  };

  const switchToSignup = () => {
    setIsSignup(true);
    setUserData({ name: '', email: '', password: '' }); // Reset user data on switch
  };

  const switchToLogin = () => {
    setIsSignup(false);
    setUserData({ name: '', email: '', password: '' }); // Reset user data on switch
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/signup', userData);
      alert('Signup successful!');
      toggleLoginPopup();
    } catch (error) {
      alert('Error signing up: ' + (error.response?.data || error.message));
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email: userData.email,
        password: userData.password,
      });

      // Destructure the token and name from the response data
      const { token, name, email } = response.data;

      // Store the token and user's name in local storage
      localStorage.setItem('token', token);
      localStorage.setItem('userName', name);
      localStorage.setItem('email', email);

      // Update login state
      setIsLoggedIn(true);

      // Close login popup
      toggleLoginPopup();
    } catch (error) {
      // Display error message if login fails
      alert('Error logging in: ' + (error.response?.data || error.message));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('email');
    setIsLoggedIn(false);
    setShowBookingSection(false); // Hide booking section when logged out
  };

  const handleShowBooking = () => {
    // Only show the booking section if the user is logged in
    if (isLoggedIn) {
      setShowBookingSection(true);
    } else {
      alert('Please login first to see your bookings.');
      setIsLoginOpen(true); // Show login popup if not logged in
    }
  };

  const handleBookingSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/api/bookings?email=${searchEmail}`);
      setBookingDetails(response.data); // Assuming response.data contains the booking details
      console.log(response.data);
      setSearchError(''); // Clear any previous errors
    } catch (error) {
      console.log(error)
      setBookingDetails(null); // Clear previous booking details
      setSearchError('No bookings found or an error occurred.');
    }
  };

  const handleShowNews =() =>{
    window.open('/News.html', '_blank');
  }

  return (
    <>
      <div className="navbar-container">
        <button className="navbar-button" onClick={onBookMyJourneyClick}>
          BookMYJourney
        </button>

        <div className="navbar-spacer"></div>
        <div className="navbar-section">
          <FontAwesomeIcon icon={faGlobe} className="navbar-icon" />
          <label className="navbar-label" onClick={handleShowNews}>News</label>
        </div>
        <div className="navbar-section">
          <FontAwesomeIcon icon={faTicket} className="navbar-icon" />
          <label className="navbar-label" onClick={handleShowBooking}>My Booking</label>
        </div>

        <div className="navbar-section">
          <FontAwesomeIcon icon={faSnowflake} className="navbar-icon" />
          <label className="navbar-label">Offers</label>
        </div>

        <div className="navbar-section">
          <FontAwesomeIcon icon={faHeadset} className="navbar-icon" />
          <label className="navbar-label">Customer Care</label>
        </div>

        <div className="navbar-small-spacer"></div>

        {isLoggedIn ? (
          <button className="navbar-button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="navbar-button" onClick={toggleLoginPopup}>
            <FontAwesomeIcon icon={faUser} className="user-icon" />
            Login / Signup
          </button>
        )}
      </div>

      <hr className="navbar-divider" />

      {/* Popup for Booking Search */}
      {showBookingSection && (
        <div className="booking-section">
          <FontAwesomeIcon icon={faTimes} className="popup-close" onClick={() => setShowBookingSection(false)} />
          <div className="popup-box">
            <h2>Search Your Booking</h2>
            <form onSubmit={handleBookingSearch}>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="searchEmail"
                  value={searchEmail}
                  onChange={(e) => setSearchEmail(e.target.value)}
                  className="input-login"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <br />
              <button type="submit" className="navbar-button">Search Booking</button>
            </form>

            {searchError && <p className="error-message">{searchError}</p>}

            {bookingDetails && bookingDetails.length > 0 ? (
  <div className="booking-details">
    <h3>Booking Details:</h3>
    {bookingDetails.map((booking, index) => (
      <div key={index} className="booking-item">
        <p><strong>Booking ID:</strong> {booking.bookingNumber}</p>
        <p><strong>Journey:</strong> {booking.from} to {booking.to}</p>
        <p><strong>Date:</strong> {booking.date}</p>
        <p><strong>Class Type:</strong> {booking.classType}</p>
        <p><strong>Train Name:</strong> {booking.trainName}</p>
        <p><strong>Train Number:</strong> {booking.trainNumber}</p>

        <h4>Passenger Details:</h4>
        {booking.passengers && booking.passengers.length > 0 ? (
          <ul>
            {booking.passengers.map((passenger, passengerIndex) => (
              <li key={passengerIndex}>
                <p><strong>Name:</strong> {passenger.name}</p>
                <p><strong>Age:</strong> {passenger.age}</p>
                <p><strong>Gender:</strong> {passenger.gender}</p>
                <p><strong>Seat Number:</strong> {passenger.seatNumber}</p>
                <p><strong>Coach:</strong> {passenger.coach}</p>
                
              </li>
            ))}
          </ul>
          
        ) : (
          <p>No passengers found for this booking.</p>
        )} <hr></hr>
      
      </div>
    ))}
  </div>
) : (
  <p>No bookings found.</p>
)}

          </div>
        </div>
      )}

      {/* Popup for Login/Signup */}
      {isLoginOpen && (
        <div className="popup-container">
          <FontAwesomeIcon icon={faTimes} className="popup-close" onClick={toggleLoginPopup} />

          <div className="popup-box">
            {isSignup ? (
              <>
                <h2>Sign Up</h2>
                <form onSubmit={handleSignup}>
                  <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={userData.name} onChange={handleInputChange} className="input-login" placeholder="Enter your name" required />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={userData.email} onChange={handleInputChange} className="input-login" placeholder="Enter your email" required />
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" value={userData.password} onChange={handleInputChange} className="input-login" placeholder="Enter your password" required />
                  </div>
                  <br />
                  <button type="submit" className="navbar-button">Sign Up</button>
                </form>
                <p>
                  Already have an account?{' '}
                  <span className="link" onClick={switchToLogin}>
                    Login here
                  </span>
                </p>
              </>
            ) : (
              <>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={userData.email} onChange={handleInputChange} className="input-login" placeholder="Enter your email" required />
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" value={userData.password} onChange={handleInputChange} className="input-login" placeholder="Enter your password" required />
                  </div>
                  <br />
                  <button type="submit" className="navbar-button">Login</button>
                </form>
                <p>
                  Don't have an account?{' '}
                  <span className="link" onClick={switchToSignup}>
                    Sign up here
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
