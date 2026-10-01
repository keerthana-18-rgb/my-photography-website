const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: __dirname + '/.env' });

const Booking = require('./models/booking');
const Contact = require('./models/contact');

const app = express();
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:5174',
    process.env.FRONTEND_URL,
].filter(Boolean);

app.use(express.json());
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
            return;
        }
        callback(null, true);
    },
    credentials: true,
}));

// Connect to MongoDB (Replace with your MongoDB Atlas connection string or local URI)
const PORT = Number(process.env.PORT) || 5001;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/photographyDB';

mongoose.connect(MONGO_URI, {
    serverSelectionTimeoutMS: 15000,
    socketTimeoutMS: 45000
})
    .then(() => console.log('Connected to MongoDB Successfully'))
    .catch((err) => console.error('Database connection error:', err));

// 1. API Route for Bookings
app.post('/api/book', async (req, res) => {
    try {
        const { serviceType, preferredDate, fullName, phone } = req.body;
        const newBooking = new Booking({ serviceType, preferredDate, fullName, phone });
        await newBooking.save();
        res.status(201).json({ success: true, message: 'Booking request saved successfully!' });
    } catch (error) {
        console.log('Detailed Booking Error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// 2. API Route for Contact Messages
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const newContact = new Contact({ name, email, subject, message });
        await newContact.save();
        res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.log('Detailed Contact Error:', error);
        res.status(500).json({ success: false, error: error.message || 'Server error while sending message.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});