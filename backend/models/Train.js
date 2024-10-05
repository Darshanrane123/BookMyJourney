const mongoose = require('mongoose');

// Define schema for stations with additional fields
const stationSchema = new mongoose.Schema({
    stationCode: String,
    stationName: String,
    arrival: String,
    departure: String,
    haltTime: String,
    day: Number,
    distance: String,
    stop: Number
});

// Define schema for class details (classType and totalSeats)
const classDetailSchema = new mongoose.Schema({
    classType: String,
    totalSeats: Number
});

// Define schema for the train
const trainSchema = new mongoose.Schema({
    classDetails: [classDetailSchema], // Array of class details
    trainName: String,
    trainCode: String,
    stations: [stationSchema] // Array of station details
});

const Train = mongoose.model('Train', trainSchema);

module.exports = Train;
