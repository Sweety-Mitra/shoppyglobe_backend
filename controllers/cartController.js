const Cart = require("../models/Cart");
const Product = require("../models/Product");

// Add to cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const item = await Cart.create({
      user: req.userId,
      product: productId,
      quantity: quantity || 1,
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update cart item
exports.updateCart = async (req, res) => {
  try {
    const item = await Cart.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      { quantity: req.body.quantity },
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
    const item = await Cart.findOneAndDelete({
      _id: req.params.id,
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
