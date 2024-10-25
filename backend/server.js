const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
//const User = require('./models/User'); // Your User model
const Booking = require('./models/Booking')
// Set up environment variables
const app = express();
const port = 5000;
const jwtSecret = 'key'; // Replace with your own secret key

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Train_Details', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB:', err));

// Middleware
app.use(cors());
app.use(express.json());

// User schema for MongoDB
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

// Model for MongoDB
const User = mongoose.model('User', userSchema);

// Route for signup
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json('User already exists.');
    }

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json('User created successfully!');
  } catch (error) {
    res.status(500).json('Server error.');
  }
});

// Route for login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json('Invalid email or password.');
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json('Invalid email or password.');
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });
    
    res.status(200).json({ token, name: user.name });
  } catch (error) {
    res.status(500).json('Server error.');
  }
});


// Import the Train model
const Train = require('./models/Train'); // Update path if needed

// Search route
app.post('/api/search', async (req, res) => {
    const { from, to, date } = req.body; // Get 'from', 'to', and 'date' from the request body
    const serdate= `"${date}"`
    const newdate= date
    console.log(date)
    console.log(serdate)
    console.log(newdate)

    try {
        // Perform the MongoDB aggregation query
        const trains1 = await Train.find(
                {
                   "stations.stationName": { "$all": [from, to] }
                 },
                 {
                     "trainName": 1,
                     "trainCode": 1,
                     "stations": {
                         "$filter": {
                             "input": "$stations",
                             "as": "station",
                             "cond": {
                                 "$in": ["$station.stationName", [from, to]]
                             }
                         }
                     }
                 }
             );
        const trains = await Train.aggregate([
            {
                $match: {
                    "stations.stationName": { $all: [from ,to]}// Ensure both "from" and "to" stations are present
                }
            },
            {
                $lookup: {
                    from: "TrainInfo", // Lookup from TrainInfo collection
                    localField: "trainCode", // Join based on trainCode
                    foreignField: "trainCode",
                    as: "trainInfo"
                }
            },
            {
                $unwind: "$trainInfo" // Unwind the trainInfo array
            },
            {
                $match: {
                    "trainInfo.Date": date // Ensure date format matches the format stored in TrainInfo
                }
            },
            {
                $unwind: "$trainInfo.classes" // Unwind the classes array inside TrainInfo
            },
            {
                $group: {
                    _id: {
                        trainCode: "$trainCode",
                        trainName: "$trainName",
                        stations: "$stations" // Group by trainCode, trainName, and stations
                    },
                    classDetails: {
                        $addToSet: { // Use $addToSet to avoid duplicate class details
                            classType: "$trainInfo.classes.classType",
                            totalSeats: "$trainInfo.classes.seats"
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    trainCode: "$_id.trainCode",
                    trainName: "$_id.trainName",
                    stations: {
                        $filter: {
                            input: "$_id.stations",
                            as: "station",
                            cond: { $in: ["$$station.stationName", [from,to]] } // Filter out unnecessary stations
                        }
                    },
                    classDetails: 1
                }
            },
            {
                $match: {
                    $expr: {
                        $lt: [
                            { $indexOfArray: ["$stations.stationName", from] }, // Ensure 'from' station comes before 'to'
                            { $indexOfArray: ["$stations.stationName", to] }
                        ]
                    }
                }
            }
        ]);

        // Send the train data back to the client
        res.json(trains);
    } catch (error) {
        console.error('Error fetching train data:', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});



app.post('/api/checkUser', async (req, res) => {
    const { email, password, bookingDetails } = req.body;

    try {
        // Find the user in the database
        const user = await User.findOne({ email });

        // If user is not found, return invalid user response
        if (!user) {
            return res.json({ validUser: false });
        }

        // Compare the provided password with the stored hashed password
        const isValid = await bcrypt.compare(password, user.password);

        if (isValid) {
            // Extract booking details
            const { trainNumber, trainName, from, to, classType, passengers } = bookingDetails;

            // Ensure passengers are sent in the request
            if (!passengers || passengers.length === 0) {
                return res.status(400).json({ error: 'Passengers data is required' });
            }

            // Prepare booking data
            const newBooking = new Booking({
                email: email,
                bookingNumber: Math.floor(100000 + Math.random() * 900000), // Generating a random booking number
                trainNumber: trainNumber,
                trainName: trainName,
                date: bookingDetails.date, // Make sure to include the date
                from: from,
                to: to,
                classType: classType,
                passengers: passengers.map((passenger, index) => {
                    const { coach, seatNumber } = getCoachAndSeat(classType, index);
                    return {
                        coach: coach,
                        seatNumber: seatNumber,
                        name: passenger.name,
                        age: passenger.age,
                        gender: passenger.gender
                    };
                })
            });

            // Save the booking in the database
            await newBooking.save();

            return res.json({ validUser: true, booking: newBooking });
        }

        // Return invalid user response
        return res.json({ validUser: false });
    } catch (error) {
        console.error('Error checking user or saving booking:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


  
// Helper function to get coach based on classType
const getCoachAndSeat = (classType, index) => {
    const classMapping = {
        '1A': ['B1', 'B2'],   // First AC coaches
        '2A': ['B3', 'B4'],   // Second AC coaches
        '3A': ['B5', 'B6'],   // Third AC coaches
        'SL': ['S1', 'S2', 'S3', 'S4', 'S5'],  // Sleeper Class coaches
        '2S': ['D1', 'D2'],   // Second Sitting
        'EV': ['EV1'],        // Executive Class
        'CC': ['C1', 'C2'],   // Chair Car
    };

    const coaches = classMapping[classType] || ['Unknown'];
    const coachIndex = Math.floor(index / 72); // Assume 72 seats per coach
    const seatNumber = (index % 72) + 1;

    return {
        coach: coaches[coachIndex] || 'Unknown',
        seatNumber
    };
};




app.get('/api/bookings', async (req, res) => {
    const { email } = req.query; // Get the email from query parameters
    try {
      const bookings = await Booking.find({ email: email }); // Fetch bookings matching the email
      if (bookings.length > 0) {
        res.status(200).json(bookings); // Send back the found bookings
      } else {
        res.status(404).json({ message: 'No bookings found for this email.' }); // Handle no bookings found
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while fetching bookings.' }); // Handle server error
    }
  });



// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


