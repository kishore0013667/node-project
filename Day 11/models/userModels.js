const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],   // ✅ Validation
  },
  email: {
    type: String,
    required: [true, "Email is required"],  // ✅ Validation
    unique: true,                           // ✅ Duplicate prevention
  },
  age: {
    type: Number,
  },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);