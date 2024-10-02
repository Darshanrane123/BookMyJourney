import React, { useState } from 'react';
import './TrainBooking.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import TrainData from './TrainData.js'; // Importing train data

// List of stations
const stationList = [
  'C Shivaji Mah T', 'Dadar', 'Thane', 'Panvel', 'Roha',
  'Mangaon', 'Veer', 'Khed', 'Chiplun', 'Savarda',
  'Aravali Road', 'Sangmeshwar', 'Ratnagiri', 'Adavali',
  'Vilavade', 'Rajapur Road', 'Vaibhavwadi Road', 'Nandgaon Road',
  'Kankavali', 'Sindhudurg', 'Kudal', 'Zarap', 'Sawantwadi Road',
  'Madure', 'Pernem', 'Thivim', 'Karmali', 'Madgaon'
];

const TrainBooking = () => {

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [availableTrains, setAvailableTrains] = useState(TrainData);
  
  // Function to check if the selected date is tomorrow or later
  const isTomorrowOrLater = (selectedDate) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to midnight for comparison
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const selected = new Date(selectedDate);
    return selected >= tomorrow;
  };

  // Function to search and filter trains based on from, to, and date
  const handleSearch = () => {
    const foundTrains = TrainData.filter((train) => {
      const fromStation = train.stations.find((station) => station.stationName === from);
      const toStation = train.stations.find((station) => station.stationName === to);

      if (fromStation && toStation) {
        const fromIndex = train.stations.indexOf(fromStation);
        const toIndex = train.stations.indexOf(toStation);
        return fromIndex < toIndex;
      }
      return false;
    });
    setAvailableTrains(foundTrains);
  };

  // Swap "from" and "to" station logic
  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  // Function Calculate Journey Price
  function calculateJourneyPrice(fromStop, toStop, price) {
    if (fromStop == null || toStop == null) {
      return 'N/A';
    }

    const stopDifference = toStop - fromStop;
    if (stopDifference < 0) {
      return 'N/A'; // Invalid route
    }

    const finalCost = price + price * 0.5 * (stopDifference - 1);
    return isNaN(finalCost) ? 'N/A' : `₹${finalCost.toFixed(2)}`;
  }

  // Function to calculate the difference between departure and arrival times
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
      arrDate.setDate(arrDate.getDate() + 1);  // Add 1 day to arrival time
      diffMs = arrDate - depDate;
    }

    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    return `${diffHrs}hr ${diffMins}min`;
  }

  // Filter station options based on selections
  const filteredToStations = stationList.filter((station) => station !== from);
  const filteredFromStations = stationList.filter((station) => station !== to);

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

        {/* Select Date */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="train-input"
        />

        {/* Search Button, disable if date is not valid */}
        <button 
          onClick={handleSearch} 
          className="search-button"
          disabled={!isTomorrowOrLater(date)} // Disable if the selected date is not tomorrow or later
        >
          Search
        </button>
      </div>

      <div className="available-trains">
        <h3 style={{ color: 'red' }}>Available Trains</h3>
        {availableTrains && availableTrains.length > 0 ? (
          <ul className="train-list">
            {availableTrains.map((train, index) => (
              <li key={index} className="train-item">
                <div className="train-info">
                  {/* Train Name and Number */}
                  <div className="train-header" style={{ textAlign: 'center' }}>
                    <h4>{train.trainName} ({train.trainCode})</h4>
                  </div>
                  
                  {/* Timings and Source-Destination */}
                  <div className="train-timings">
                    <div className="timing">
                      <span>From: {from}</span>
                      <span>Departure: {train.stations.find(station => station.stationName === from)?.departure || 'N/A'}</span>
                    </div>

                    <p>Journey Time: {calculateJourneyTime(
                      train.stations.find(station => station.stationName === from)?.departure, 
                      train.stations.find(station => station.stationName === to)?.arrival
                    )}</p>
                    
                    <div className="timing">
                      <span>To: {to}</span>
                      <span>Arrival: {train.stations.find(station => station.stationName === to)?.arrival || 'N/A'}</span>
                    </div>
                    
                  </div>
                  
                  {/* Class-wise Availability */}
                  <div className="class-availability">
                    {train.classes.map((cls, idx) => {
                      
                      const fromStop = train.stations.find(station => station.stationName === from)?.stop;
                      const toStop = train.stations.find(station => station.stationName === to)?.stop;
                      const price = parseFloat(cls.price) || 0; // Ensures it's a number


                      return(
                      <div key={idx} className={`class-item ${cls.isTatkal ? 'tatkal' : ''}`}>
                        <p>{cls.classType}</p>
                        <p>Price: {calculateJourneyPrice(fromStop, toStop,price)}</p>
                        <p>Status: {cls.status}</p>
                      </div>
                    )})}
                  </div>
                  
                  {/* Travel Guarantee */}
                  {train.travelGuarantee && (
                    <div className="travel-guarantee">
                      <span>✔ Travel Guarantee</span>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No trains available.</p>
        )}
      </div>
    </div>
  );
};

export default TrainBooking;
