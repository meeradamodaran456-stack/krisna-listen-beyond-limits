// UserListeningHistory.js

class UserListeningHistory {
    constructor(songPlayed, duration, mood, timestamp) {
        this.songPlayed = songPlayed; // Name of the song played
        this.duration = duration; // Duration of the song in seconds
        this.mood = mood; // Mood associated with the song
        this.timestamp = timestamp; // Timestamp of when user listened to the song
    }
}

module.exports = UserListeningHistory;