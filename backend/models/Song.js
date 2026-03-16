'use strict';

const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    mood: {
        type: String,
        required: true
    },
    audioQuality: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
