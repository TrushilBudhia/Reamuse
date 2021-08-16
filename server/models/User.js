const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Import schema from Game.js
const gameSchema = require('./Game');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    // set savedGamesData to be an array of data that adheres to the gameSchema
    savedGamesData: [gameSchema],
  },
  // Setting virtuals to true
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Hashing the password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// When we query a user, we'll also get another field called `savedGamesData` with the number of games challenged by the user
userSchema.virtual('gameCount').get(function () {
  return this.savedGamesData.length;
});

const User = model('User', userSchema);

module.exports = User;
