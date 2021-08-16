const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedGamesData` array in User.js
const gameSchema = new Schema({
    gameId: {
        type: String,
        required: true,
    },
    gameTitle: {
        type: String,
    },
    score: {
        type: Number,
    },
    highScore: {
        type: Number,
    },
    highScoreDate: { 
        type: String, 
    },
    playCount: {
        type: Number,
    },
});

module.exports = gameSchema;
