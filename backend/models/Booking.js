// models/Booking.js
const mongoose = require('mongoose');

const PassengerSchema = new mongoose.Schema({
  coach: { type: String, required: true },
  seatNumber: { type: Number, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
});

const BookingSchema = new mongoose.Schema({
  email: { type: String, required: true },
  bookingNumber: { type: Number, required: true, unique: true },
  trainNumber: { type: String, required: false },
  trainName: { type: String, required: false },
  date:{type:Date, required:true},
  from: { type: String, required: true },
  to: { type: String, required: true },
  classType: { type: String, required: true }, // New field for class type
  passengers: [PassengerSchema],
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
