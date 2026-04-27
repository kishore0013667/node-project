const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProductById
} = require("../controllers/productController");

// POST → BODY
router.post("/add", addProduct);

// GET → PARAMS
router.get("/:id", getProductById);

module.exports = router;