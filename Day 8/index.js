const express = require("express");
const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");

const app = express();

// ✅ IMPORTANT middleware
app.use(express.json());

// connect database
connectDB();

// use routes
app.use("/api/products", productRoutes);

// server start
app.listen(3000, () => {
  console.log("Server running on port 3000");
});