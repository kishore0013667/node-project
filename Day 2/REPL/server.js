console.log("MAIN SERVER FILE ✅");

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("Middleware:", req.method, req.url);
  next();
});

// 🔥 Import routes
const userRoutes = require("./routes/user");

// 🔥 Mount routes
app.use("/api/users", userRoutes);

// ✅ Test route
app.get("/check", (req, res) => {
  res.send("CHECK WORKING");
});

// ============================
// 📁 FILE HANDLING APIs
// ============================

// ✅ Save data (POST)
app.post("/save", (req, res) => {
  const { text } = req.body;

  const filePath = path.join(__dirname, "data.txt");

  fs.writeFileSync(filePath, text);

  res.json({ message: "Data saved successfully ✅" });
});

// ✅ Read data (GET)
app.get("/read", (req, res) => {
  const filePath = path.join(__dirname, "data.txt");

  // check if file exists
  if (!fs.existsSync(filePath)) {
    return res.json({ message: "No data found ❌" });
  }

  const data = fs.readFileSync(filePath, "utf-8");

  res.json({ data });
});

// ============================

// Start server
app.listen(4000, () => {
  console.log("Server running on port 4000");
});