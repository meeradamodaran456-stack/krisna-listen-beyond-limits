const mongoose = require('mongoose');

const ListeningHistorySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    songId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Song'
    },
    mood: {
        type: String,
        required: true
    },
    playedAt: {
        type: Date,
        default: Date.now
    },
    duration: {
        type: Number,
        required: true // Duration in seconds
    }
});

module.exports = mongoose.model('ListeningHistory', ListeningHistorySchema);