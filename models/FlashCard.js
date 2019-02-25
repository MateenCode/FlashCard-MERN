const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  Rank: {
    type: Number,
    default: 0
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
