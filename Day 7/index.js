const express = require("express");
const connectDB = require("./config/db");
const Product = require("./models/productModel");

const app = express();
app.use(express.json());

// connect database
connectDB();


// ✅ STEP 7 → ADD THIS (POST API)
app.post("/add-product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ✅ STEP 8 → ADD THIS (GET API)
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ✅ STEP 9 → START SERVER
app.listen(3000, () => {
  console.log("Server running on port 3000");
});