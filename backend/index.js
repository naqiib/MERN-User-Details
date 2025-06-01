// backend/index.js

const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env
const connectDB = require('./src/config/db'); // Import DB connection function
const detailRoutes = require('./src/routes/details'); // Import detail routes

const app = express();
const PORT = process.env.PORT || 5000; // Use port from .env or default to 5000

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(express.json()); // Body parser for JSON data (replaces body-parser package)
// app.use(express.urlencoded({ extended: true })); // If you need to handle URL-encoded form data

// Define API routes
app.use('/api/details', detailRoutes); // All routes in details.js will be prefixed with /api/details

// Basic route for testing server
app.get('/', (req, res) => {
    res.send('Backend API is running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});