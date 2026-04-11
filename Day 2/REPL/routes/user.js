const express = require("express");
const router = express.Router();

console.log("User routes loaded ✅");

// GET /api/users
router.get("/", (req, res) => {
  res.send("All users");
});

// GET /api/users/101
router.get("/:id", (req, res) => {
  res.send("User ID: " + req.params.id);
});

module.exports = router;