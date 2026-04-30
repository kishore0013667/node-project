const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);

// Protected route
router.get("/dashboard", auth, (req, res) => {
  res.json({
    msg: "Welcome Dashboard",
    user: req.user
  });
});

module.exports = router;