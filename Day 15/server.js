// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");

const connectDB = require("./config/db");
connectDB();

app.use("/api", authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});