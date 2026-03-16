// Subscription model for Krisna Listen Beyond Limits

const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    plan: { type: String, required: true, enum: ['Premium Student', 'Lite', 'Standard', 'Duo', 'Family', 'Platinum'] },
    features: { type: [String], required: true },
    price: { type: Number, required: true }
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;