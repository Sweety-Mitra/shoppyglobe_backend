const Cart = require("../models/Cart");

// Add to cart
exports.addToCart = async (req, res) => {
  try {
    const item = await Cart.create({
      userId: req.userId,
      productId: req.body.productId,
      quantity: req.body.quantity,
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update cart item
exports.updateCart = async (req, res) => {
  try {
    const item = await Cart.findByIdAndUpdate(
      req.params.id,
      { quantity: req.body.quantity },
      { new: true }
    );

    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete cart item
exports.deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
