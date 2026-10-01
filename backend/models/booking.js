const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    serviceType: { type: String, required: true },
    preferredDate: { type: Date, required: true },
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);