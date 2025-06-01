// backend/src/models/Detail.js

const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true, // Ensures email is unique
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please use a valid email address'] // Basic email regex
    },
    message: {
        type: String,
        required: false, // Message is optional
        maxlength: [500, 'Message cannot be more than 500 characters']
    }
}, {
    timestamps: true // Adds `createdAt` and `updatedAt` fields automatically
});

module.exports = mongoose.model('Detail', detailSchema);