// Controller = logic

// ✅ BODY
const addProduct = (req, res) => {
  console.log("BODY DATA:", req.body);

  res.json({
    message: "Body received",
    data: req.body
  });
};

// ✅ PARAMS
const getProductById = (req, res) => {
  console.log("PARAM ID:", req.params.id);

  res.json({
    message: "Param received",
    id: req.params.id
  });
};

module.exports = {
  addProduct,
  getProductById
};