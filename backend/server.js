const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

// Set up environment variables
const app = express();
const port = 5000;
const jwtSecret = 'key'; // Replace with your own secret key

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {
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

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
