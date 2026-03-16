const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/auth', require('./routes/auth'));  // Authentication routes
app.use('/music', require('./routes/music'));  // Music routes
app.use('/subscription', require('./routes/subscription'));  // Subscription routes
app.use('/chatbot', require('./routes/chatbot'));  // Chatbot routes
app.use('/analytics', require('./routes/analytics'));  // Analytics routes

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
