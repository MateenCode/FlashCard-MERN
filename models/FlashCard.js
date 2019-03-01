const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const flashcardScehma = new Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  toggle: {
    type: Boolean,
    default: false
  },
  rank: {
    type: Number,
    default: 0
  }
});

module.exports = Item = mongoose.model("flashcard", flashcardScehma);
