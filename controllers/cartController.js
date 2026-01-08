const Cart = require("../models/Cart");
const Product = require("../models/Product");
const validateObjectId = require("../utils/validateObjectId");

// Add to cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    if (!validateObjectId(productId)) {
      return res.status(400).json({ message: "Invalid Product ID format" });
    }

    if (quantity !== undefined && quantity <= 0) {
      return res
        .status(400)
        .json({ message: "Quantity must be greater than 0" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const cartItem = await Cart.create({
      user: req.userId,
      product: productId,
      quantity: quantity || 1,
    });

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update cart item
exports.updateCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    if (!validateObjectId(id)) {
      return res.status(400).json({ message: "Invalid Cart Item ID" });
    }

    if (quantity <= 0) {
      return res
        .status(400)
        .json({ message: "Quantity must be greater than 0" });
    }

    const item = await Cart.findOneAndUpdate(
      { _id: id, user: req.userId },
      { quantity },
      { new: true }
    );

    if (!item) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete cart item
exports.deleteCart = async (req, res) => {
  try {
    const { id } = req.params;

    if (!validateObjectId(id)) {
      return res.status(400).json({ message: "Invalid Cart Item ID" });
    }

    const item = await Cart.findOneAndDelete({
      _id: id,
      user: req.userId,
    });

    if (!item) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// View cart items
exports.getCart = async (req, res) => {
  try {
    const cartItems = await Cart.find({ user: req.userId }).populate("product");
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
