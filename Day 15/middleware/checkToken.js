// middleware/checkToken.js
const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header) {
      return res.status(401).json({ msg: "No token" });
    }

    const token = header.split(" ")[1]; // Bearer TOKEN

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();

  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = checkToken;