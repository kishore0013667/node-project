// routes/authRoutes.js
const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authController");
const { getDashboard } = require("../controllers/dashboardController");
const checkToken = require("../middleware/checkToken");

router.post("/register", register);
router.post("/login", login);
router.get("/dashboard", checkToken, getDashboard);

module.exports = router;