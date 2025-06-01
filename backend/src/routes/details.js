// backend/src/routes/details.js

const express = require('express');
const router = express.Router();
const { addDetail, getDetails } = require('../controllers/detailController'); // Import controller functions

// Define routes and link them to controller functions
router.post('/', addDetail); // POST to /api/details to add a new detail
router.get('/', getDetails);  // GET from /api/details to get all details

module.exports = router;