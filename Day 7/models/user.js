const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  subscriptionType: {
    type: String,
    enum: ["basic", "standard", "premium"],
    default: "basic"
  },
  watchHistory: [
    {
      title: String,
      watchedAt: Date
    }
  ]
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;