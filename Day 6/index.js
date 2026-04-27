const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Step 1: Connect Database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Database Connected Successfully");
  })
  .catch((err) => {
    console.log("❌ Database Connection Failed");
  });

// Step 2: Simple Route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Step 3: Start Server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});