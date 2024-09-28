import React, { useState } from 'react';
import './HotelBooking.css'; // Assuming you have a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const popularDestinations = [
  { name: "Udaipur", image: "https://i.pinimg.com/736x/5e/24/65/5e24658429b29a43459eed63331c58d4.jpg" }, // City of Lakes
  { name: "Mysore", image: "https://i.pinimg.com/736x/17/15/99/1715996924a261668533ccf21d211673.jpg" }, // Mysore Palace
  { name: "kolkata", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7LIDzuxocrJgS7SiX2pwNxzDAc5tRRO6afVc8ZkZMeeLmhfSnSbkZQcraYnAqP_9CgA&usqp=CAU" },
  { name: "Sawantwadi", image: "https://beseeingyou.world/wp-content/uploads/2023/03/palace1-1.jpg" },
  
  { name: "Varanasi", image: "https://indianartzone.com/pub/media/catalog/product/2/0/20_05_21_05_39_48_whatsappimage2021-05-20at9.00.07am.jpeg" }, // Ghats
  { name: "Mumbai", image: "https://preview.redd.it/a8jr67xqpw731.jpg?width=640&crop=smart&auto=webp&s=7640e5c71f90262876c3d9867016c1b7b136382a" }, // Gateway of India
  { name: "Delhi", image: "https://success24.home.blog/wp-content/uploads/2019/08/afeb52c07e58f96cba1d02763c39e4c97831571091108765299.jpg" }, // India Gate
  { name: "Rishikesh", image: "https://i0.wp.com/www.humansofuttarakhand.com/wp-content/uploads/2020/09/Rishikesh-Yoga-Capital.jpg" }, // Yoga Capital
  
  { name: "Agra", image: "https://cdn.britannica.com/25/155325-050-79CFFB62/Taj-Mahal-Agra-India.jpg" }, // Taj Mahal
  { name: "Jaipur", image: "https://i1.wp.com/findingjules.com/wp-content/uploads/2022/12/Hawa-Mahel-Jaipur-Itinerary-2-1440x2160.jpg?ssl=1" }, // Hawa Mahal
  { name: "Goa", image: "https://i.pinimg.com/originals/2a/20/d1/2a20d147aab2a7afa7ed29562fe571da.jpg" }, // Beaches
  { name: "Kerala", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSJOjSFli2zCjCVMPFAeSI2ndpZddEeTPSEuYjWQMpPMmjmYjmRbrdNh70R6RHhrQmYQ&usqp=CAU" }, // Backwaters
];


const HotelBooking = () => {
  const [destination, setDestination] = useState('');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    // Logic to search hotel data
    console.log('Searching hotels in:', destination, 'from:', checkin, 'to:', checkout, 'Rooms:', rooms, 'Guests:', guests);
  };

  return (
    <>
    <div className="hotel-booking-container">
      <h2>Hotel Booking</h2>
      <div className="hotel-inputs">
        <div className="input-container">
        <label htmlFor="guests">Destination</label>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="hotel-input"
          />
        </div>
        <div className="input-container">
        <label htmlFor="guests">Checkin</label>
          <FontAwesomeIcon icon={faCalendarAlt} className="input-icon" />
          <input
            type="date"
            placeholder="Check-in"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            className="hotel-input"
          />
        </div>
        <div className="input-container">
        <label htmlFor="guests">Check-out</label>
          <FontAwesomeIcon icon={faCalendarAlt} className="input-icon" />
          <input
            type="date"
            placeholder="Check-out"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            className="hotel-input"
          />
        </div>
        <div className="rooms-guests-container">
          <div className="input-container">
            <label htmlFor="rooms">Rooms:</label>
            <input
              type="number"
              min="1"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              className="hotel-input number-input"
              id="rooms"
            />
          </div>
          <div className="input-container">
            <label htmlFor="guests">Guests:</label>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="hotel-input number-input"
              id="guests"
            />
          </div>
        </div>
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      
    </div>
    <div>
    <h3>Popular Destinations</h3>
      <div className="destinations-container">
        {popularDestinations.map((destination, index) => (
          <div className="destination-card" key={index}>
            <img src={destination.image} alt={destination.name} className="destination-image" />
            <h4>{destination.name}</h4>
          </div>
        ))}
      </div>

    </div>
    </>
  );
};

export default HotelBooking;
