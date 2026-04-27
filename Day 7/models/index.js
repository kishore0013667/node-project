const Product = require("./models/Product");

// Add product
const addProduct = async () => {
  try {
    const newProduct = await Product.create({
      name: "iPhone 15",
      price: 80000,
      brand: "Apple",
      category: "Mobile",
      stock: 10
    });

    console.log("✅ Product Added:", newProduct);
  } catch (err) {
    console.log("❌ Error:", err);
  }
};

addProduct();