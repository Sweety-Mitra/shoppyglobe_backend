const express = require("express");
const {
  getProducts,
  getProductById,
  createProduct,
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts);          // Get all products
router.get("/:id", getProductById);    // Get single product
router.post("/", createProduct);       // Create product

module.exports = router;
