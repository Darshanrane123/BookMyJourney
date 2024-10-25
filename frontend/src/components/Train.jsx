import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Train.css';
import axios from 'axios'; // Make sure to install axios using npm or yarn
// import Booking from '../../../Backend/models/Booking';
import RazorpayButton from './RasorpayButton';


const stationList = [
    'C Shivaji Mah T', 'Dadar', 'Thane', 'Panvel', 'Roha',
    'Mangaon', 'Veer', 'Khed', 'Chiplun', 'Savarda',
    'Aravali Road', 'Sangmeshwar', 'Ratnagiri', 'Adavali',
    'Vilavade', 'Rajapur Road', 'Vaibhavwadi Road', 'Nandgaon Road',
    'Kankavali', 'Sindhudurg', 'Kudal', 'Zarap', 'Sawantwadi Road',
    'Madure', 'Pernem', 'Thivim', 'Karmali', 'Madgaon'
];

const Train = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [filteredFromStations, setFilteredFromStations] = useState(stationList);
    const [filteredToStations, setFilteredToStations] = useState(stationList);
    const [selectedClass, setSelectedClass] = useState(null); // State for selected class
    const [trainData, setTrainData] = useState([]); // To store the fetched train data
    const [loading, setLoading] = useState(false); // Loading state for API request
    const [error, setError] = useState(null); // Error state for handling issues
    const [journeyDetails, setJourneyDetails] = useState({ halts: 0, journeyTime: '0h 0m' });
    //const [numPassengers, setNumPassengers] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); // State for password
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility
    const [numPassengers, setNumPassengers] = useState(1); // Default to one passenger
    const [passengers, setPassengers] = useState([
        { name: '', age: '', gender: 'Male' } // Initial state for one passenger
    ]);


    const loadRazorpay = async (price,e,selectedClass) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => initiatePayment(price,e,selectedClass);
      document.body.appendChild(script);
    };
  
    const initiatePayment = async (price,e,selectedClass) => {
      const paymentData = await axios.post('http://localhost:5001/api/payment/orders', {
        amount: price, // Amount in rupees
        currency: 'INR',
      });
  
      const options = {
        key: 'rzp_test_xKSUvKQo7L8FWF', // Replace with your Razorpay key
        amount: paymentData.data.amount,
        currency: paymentData.data.currency,
        order_id: paymentData.data.id,
        name: 'Test Transaction',
        description: 'Test Payment',
        handler: (response) => {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
          handleBookClick(e, selectedClass); // Call handleBookClick after successful payment

        },
        prefill: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          contact: '91 8624099361',
        },
        theme: {
          color: '#e32d2d',
        },
      };
  
      const rzp = new window.Razorpay(options);
      rzp.open();
    };


        // // Handler for passenger count change
        // const handlePassengerChange = (e) => {
        //     setNumPassengers(parseInt(e.target.value, 10)); // Update number of passengers
        // };
    
        // // Render fields for each passenger
        // const renderPassengerFields = () => {
        //     const fields = [];
        //     for (let i = 1; i <= numPassengers; i++) {
        //         fields.push(
        //             <div key={i} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '20px', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
        //                 <h4 style={{ marginBottom: '10px', color: '#333' }}>Passenger {i}</h4>
        //                 <p style={{ marginBottom: '10px' }}>
        //                     <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Name: </label>
        //                     <input type="text" name={`name${i}`} required style={{ padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} />
        //                 </p>
        //                 <p style={{ marginBottom: '10px' }}>
        //                     <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Age: </label>
        //                     <input type="number" name={`age${i}`} min="1" max="100" required style={{ padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} />
        //                 </p>
        //                 <p style={{ marginBottom: '10px' }}>
        //                     <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Gender: </label>
        //                     <select name={`gender${i}`} required style={{ padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}>
        //                         <option value="Male">Male</option>
        //                         <option value="Female">Female</option>
        //                         <option value="Other">Other</option>
        //                     </select>
        //                 </p>
        //             </div>
        //         );
                
                
        //     }
        //     return fields;
        // };
        


        // Function to update the passenger data in state
    const handlePassengerChange = (index, field, value) => {
      const updatedPassengers = [...passengers];
      updatedPassengers[index][field] = value; // Update the specific field for the passenger
      setPassengers(updatedPassengers);
  };


  const handleNumPassengersChange = (e) => {
    const newNumPassengers = parseInt(e.target.value, 10);
    setNumPassengers(newNumPassengers); // Update number of passengers

    // Adjust passengers array based on new number
    if (newNumPassengers > passengers.length) {
        // Add new passenger objects
        const additionalPassengers = Array.from({ length: newNumPassengers - passengers.length }, () => ({
            name: '',
            age: '',
            gender: 'Male',
        }));
        setPassengers([...passengers, ...additionalPassengers]);
    } else {
        // Trim the passengers array
        setPassengers(passengers.slice(0, newNumPassengers));
    }
};

  // Your renderPassengerFields function will go here
  const renderPassengerFields = () => {
      const fields = [];
      for (let i = 0; i < numPassengers; i++) {
          fields.push(
              <div key={i} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '20px', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
                  <h4 style={{ marginBottom: '10px', color: '#333' }}>Passenger {i + 1}</h4>
                  <p style={{ marginBottom: '10px' }}>
                      <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Name: </label>
                      <input 
                          type="text" 
                          required 
                          value={passengers[i].name} 
                          onChange={(e) => handlePassengerChange(i, 'name', e.target.value)} 
                          style={{ padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} 
                      />
                  </p>
                  <p style={{ marginBottom: '10px' }}>
                      <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Age: </label>
                      <input 
                          type="number" 
                          min="1" 
                          max="100" 
                          required 
                          value={passengers[i].age} 
                          onChange={(e) => handlePassengerChange(i, 'age', e.target.value)} 
                          style={{ padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} 
                      />
                  </p>
                  <p style={{ marginBottom: '10px' }}>
                      <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Gender: </label>
                      <select 
                          required 
                          value={passengers[i].gender} 
                          onChange={(e) => handlePassengerChange(i, 'gender', e.target.value)} 
                          style={{ padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                      </select>
                  </p>
              </div>
          );
      }
      return fields;
  };


    // Determine min and max dates for the date input
    const today = new Date();
    const minDate = today.toISOString().split('T')[0];
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 30); // Allow up to 30 days in advance
    const maxDateStr = maxDate.toISOString().split('T')[0];

    // Update filtered stations based on selected from and to values
    useEffect(() => {
        const newFilteredFromStations = stationList.filter(station => station !== to);
        setFilteredFromStations(newFilteredFromStations);
        const newFilteredToStations = stationList.filter(station => station !== from);
        setFilteredToStations(newFilteredToStations);
    }, [from, to]);

    // Function to handle station swapping
    const handleSwap = () => {
        setFrom(to);
        setTo(from);
    };

    // Function to check if the selected date is tomorrow or later
    const isTomorrowOrLater = (selectedDate) => {
        const selected = new Date(selectedDate);
        return selected >= new Date(today.setDate(today.getDate() + 1));
    };

    // Handle search button click
    // const handleSearch = async () => {
    //     setLoading(true); // Start loading
    //     setError(null); // Reset error

    //     try {
    //         const response = await fetch('http://localhost:5005/api/search', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 from,
    //                 to,
    //             }),
    //         });

    //         const data = await response.json();
    //         if (response.ok) {
    //             setTrainData(data); // Store the fetched train date
    //             console.log('Trains found:', data);
    //         } else {
    //             throw new Error(data.message || 'Failed to fetch train data');
    //         }
    //     } catch (error) {
    //         setError(error.message || 'Error fetching train data');
    //         console.error('Error fetching train data:', error);
    //     } finally {
    //         setLoading(false); // Stop loading
    //     }
    // };
    function convertDateFormat(inputDate) {
        console.log("Input date for conversion:", inputDate);
        const [day, month, year] = inputDate.split("-"); // Make sure input is in dd-mm-yyyy format
        
        console.log("Day:", day, "Month:", month, "Year:", year);
        return `${day}-${month}-${year}`; // Return formatted as yyyy-mm-dd
    }
    
    
      
      // Example usage
    //   const userInputDate = "04-10-2024";
      
    const handleBookClick = async (e, selectedClass) => {
      e.preventDefault();

      
  
      console.log(selectedClass.trainCode);
      console.log(selectedClass.trainName);
      console.log(from);
      console.log(to);
      console.log(selectedClass.classType);
      console.log(passengers);
      console.log(`date is ${date}`)
      
      try {
          const bookingDetails = {
              trainNumber: selectedClass.trainCode, // Correctly refer to the train code
              trainName: selectedClass.trainName,   // Correctly refer to the train name
              date,
              from: from,                           // Change from1 to from
              to: to,                               // Change to1 to to
              classType: selectedClass.classType,
              passengers,

          };
  
          // Send a POST request to your backend
          const response = await axios.post('http://localhost:5000/api/checkUser', {
              email,
              password,
              bookingDetails,
          });
  
          // Check if the response indicates a valid user
          if (response.data.validUser) {
              // Handle valid user scenario (e.g., proceed with booking)
              console.log('User is valid. Proceeding with booking...');
              alert(`Booking successful! Your booking number is: ${response.data.booking.bookingNumber}`);
              setSelectedClass(null); // Assuming you have setSelectedClass in your state
            setNumPassengers(0); // Reset number of passengers
            setEmail(''); // Clear email
            setPassword(''); // Clear password
              // Optionally, you can redirect to a booking confirmation page or reset the form here.
          } else {
              // Handle invalid user scenario (e.g., show error message)
              alert('Invalid email or password');
          }
      } catch (error) {
          console.error('Error checking user:', error);
          alert('An error occurred while processing your booking. Please try again.');
      }
  };
  


    const handleSearch = async () => {
        setLoading(true); // Start loading
        setError(null); // Reset error
        const mongoFormattedDate = convertDateFormat(date); // Convert the input date to MongoDB format
        console.log('MongoDate:', mongoFormattedDate); // Output: "2024-10-04"
    
        try {
            const response = await fetch('http://localhost:5000/api/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    from,
                    to,
                    date: mongoFormattedDate, // Send the date in correct format with the key `date`
                }),
            });

            console.log(date)
    
            const data = await response.json();
            if (response.ok) {
                setTrainData(data); // Store the fetched train data
                console.log('Trains found:', data);
            } else {
                throw new Error(data.message || 'Failed to fetch train data');
            }
        } catch (error) {
            setError(error.message || 'Error fetching train data');
            console.error('Error fetching train data:', error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    const handleBooking=(train,classDetail,price)=>{
      console.log(train, classDetail, price); // This should log the arguments to check if they are correct.


        setSelectedClass({
            classType: classDetail.classType,
            trainCode: train.trainCode,
            trainName: train.trainName,
            price1: price
        })

    }
    
    // Function to calculate halts and journey time
    function calculateJourneyTime(departure, arrival) {
        if (!departure || !arrival) {
            return 'N/A';
        }
    
        const [depHours, depMinutes] = departure.split(':').map(Number);
        const [arrHours, arrMinutes] = arrival.split(':').map(Number);
    
        const depDate = new Date();
        const arrDate = new Date();
    
        depDate.setHours(depHours, depMinutes);
        arrDate.setHours(arrHours, arrMinutes);
    
        let diffMs = arrDate - depDate;
        if (diffMs < 0) {
            arrDate.setDate(arrDate.getDate() + 1);
            diffMs = arrDate - depDate;
        }
    
        const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
        const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
        return `${diffHrs}hr ${diffMins}min`;
    }

    return (
        <div className="train-booking-container">
            <h4>Train Booking</h4>
            <div className="train-inputs">
                {/* Select From Station */}
                <select
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="train-input"
                >
                    <option value="">From/Source</option>
                    {filteredFromStations.map((station, index) => (
                        <option key={index} value={station}>
                            {station}
                        </option>
                    ))}
                </select>

                {/* Swap Icon */}
                <FontAwesomeIcon 
                    icon={faArrowRightArrowLeft} 
                    className="swap-icon" 
                    onClick={handleSwap} 
                />

                {/* Select To Station */}
                <select
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="train-input"
                >
                    <option value="">To/Destination</option>
                    {filteredToStations.map((station, index) => (
                        <option key={index} value={station}>
                            {station}
                        </option>
                    ))}
                </select>

                {/* Select Date with min and max */}
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="train-input"
                    min={minDate} // Set minimum date
                    max={maxDateStr} // Set maximum date
                />

                {/* Search Button */}
                <button style={{marginTop:'-2px'}}
                    onClick={handleSearch} 
                    className="search-button"
                    disabled={!isTomorrowOrLater(date)} 
                >
                    Search
                </button>
            </div>

            {/* Loading Indicator */}
            {loading && <p>Loading...</p>}

            {/* Error Message */}
            {error && <p className="error-message">{error}</p>}

            <div className="train-results">
  {trainData.length > 0 ? (
    <div>
      <h5>Available Trains:</h5>
      {trainData.map((train, index) => (
        <div key={index} className="train-item">
          <h2>{train.trainName} ({train.trainCode})</h2>
          
          {/* Display stations (From and To) */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <label>From: </label>
              <span>{train.stations[0]?.stationName || "N/A"}</span>
            </div>
            <div>
              <label>To: </label>
              <span>{train.stations[1]?.stationName || "N/A"}</span>
            </div>
          </div>

          {/* Display journey details */}
          <div>
            <p>Number of Halts: {train.stations[1]?.stop - train.stations[0]?.stop - 1}</p>
            <p>Journey Time: {calculateJourneyTime(train.stations[0]?.departure, train.stations[train.stations.length - 1]?.arrival)}</p>
          </div>

          {/* Display class type and available seats as buttons */}
          <div className="class-types">
            {train.classDetails.map((classDetail, classIndex) => {
              // Determine base price based on classType
              let basePrice;
              switch (classDetail.classType) {
                case '1A':
                  basePrice = 90;
                  break;
                case '2A':
                  basePrice = 80;
                  break;
                case '3A':
                  basePrice = 70;
                  break;
                case 'SL':
                  basePrice = 50;
                  break;
                case '2S':
                  basePrice = 100;
                  break;
                case 'EV':
                  basePrice = 185;
                  break;
                case 'CC':
                  basePrice = 160;
                  break;
                default:
                  basePrice = 0;
              }

              // Calculate the number of halts
              const halts = train.stations[1]?.stop - train.stations[0]?.stop - 1;

              // Increase price by 10% for each halt
              const adjustedPrice = halts > 0 ? basePrice * (1 + (halts * 0.4)) : basePrice;

              return (
                <div
                  key={classIndex}
                  className="class-button"
                  onClick={() => {handleBooking(train, classDetail, adjustedPrice.toFixed(2))}}
                  style={{ margin: '5px', padding: '10px', cursor: 'pointer' , }}
                >
                <div>Class : {classDetail.classType} </div>
                <div>Seats Available : {classDetail.totalSeats}</div> 
                <div>Price : ₹{adjustedPrice.toFixed(2)}</div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  ) : (
    !loading && <p>No trains available for the selected route.</p>
  )}
</div>
{selectedClass && selectedClass.price !== 'N/A' ? (
  <div>
    <h2>Train Name: {selectedClass.trainName}</h2>
    <h2>Train Number: {selectedClass.trainCode}</h2>
    <h3>Class: {selectedClass.classType}</h3>

    <label>Number of Passengers</label>
    <input
      type="number"
      list="numb"
      min="1"
      max="6"
      onChange={handleNumPassengersChange}  // Use onChange instead of onClick for input
    />
    <datalist id="numb">
      <option value="1" />
      <option value="2" />
      <option value="3" />
      <option value="4" />
      <option value="5" />
      <option value="6" />
    </datalist>

    {/* Render dynamic passenger fields */}
    {numPassengers > 0 && (
      <div>
        {renderPassengerFields()}
      </div>
    )}

    <h3>Price : {selectedClass.price1 * numPassengers}</h3>

    <label>Email:</label>
    <input
      type="email"
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <label>Password:</label>
    <input
      type="password"
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <hr />

    <button
      className="class-button"
      style={{ textAlign: 'center', justifyContent: 'center' }}
      disabled={numPassengers <= 0 || !email || !password}  // Disable button if inputs are invalid
      onClick={async (e) => {
         loadRazorpay(selectedClass.price1 * numPassengers, e ,selectedClass); 
        
    }}    >
      Book
    </button>
  </div>
) : null}


        </div>
    );
};

export default Train;
