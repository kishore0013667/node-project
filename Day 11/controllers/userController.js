const User = require("../models/userModel");

const createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    // ✅ Manual validation (extra safety)
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and Email are required",
      });
    }

    // ✅ Check duplicate email manually
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    // ✅ Create user
    const user = await User.create({ name, email, age });

    // ✅ Success response
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports = { createUser };