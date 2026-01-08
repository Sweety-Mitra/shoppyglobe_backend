const express = require("express");
const auth = require("../middleware/authMiddleware");
const {
  addToCart,
  updateCart,
  deleteCart,
  getCart,
} = require("../controllers/cartController");

const router = express.Router();

router.post("/", auth, addToCart);      // Add to cart
router.get("/", auth, getCart);         // View cart
router.put("/:id", auth, updateCart);   // Update cart item
router.delete("/:id", auth, deleteCart);// Delete cart item

module.exports = router;
