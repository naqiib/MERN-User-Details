// backend/src/controllers/detailController.js

const Detail = require('../models/Detail'); // Import the Detail model

// @desc    Add a new detail
// @route   POST /api/details
// @access  Public
exports.addDetail = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Basic validation
        if (!name || !email) {
            return res.status(400).json({ message: 'Please enter all required fields (name, email).' });
        }

        const newDetail = new Detail({
            name,
            email,
            message
        });

        const savedDetail = await newDetail.save();
        res.status(201).json({
            message: 'Detail added successfully!',
            detail: savedDetail
        });
    } catch (error) {
        if (error.code === 11000) { // MongoDB duplicate key error (for unique email)
            return res.status(409).json({ message: 'Email already exists. Please use a different email.' });
        }
        console.error('Error adding detail:', error);
        res.status(500).json({ message: 'Server error. Could not add detail.' });
    }
};

// @desc    Get all details
// @route   GET /api/details
// @access  Public
exports.getDetails = async (req, res) => {
    try {
        const details = await Detail.find().sort({ createdAt: -1 }); // Get latest first
        res.status(200).json(details);
    } catch (error) {
        console.error('Error fetching details:', error);
        res.status(500).json({ message: 'Server error. Could not retrieve details.' });
    }
};

// You can add more controller functions here (e.g., updateDetail, deleteDetail)