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
import { faHeadset, faSnowflake, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = ({ onBookMyJourneyClick }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      const { token, name } = response.data;

      // Store the token and user's name in local storage
      localStorage.setItem('token', token);
      localStorage.setItem('userName', name);

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
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="navbar-container">
        <button className="navbar-button" onClick={onBookMyJourneyClick}>
          BookMYJourney
        </button>

        <div className="navbar-spacer"></div>

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
