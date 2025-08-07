const Product = require("../models/Product");
const { reserveStock, releaseStock } = require("../services/inventoryService");

const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user.id;

  try {
    // Optimistic concurrency control
    const product = await Product.findById(productId);
    if (product.stock < quantity) {
      return res.status(400).json({ error: "Insufficient stock" });
    }

    // Reserve stock
    await reserveStock(productId, quantity, userId);

    // Update product with version checking
    const updated = await Product.findOneAndUpdate(
      { _id: productId, version: product.version },
      {
        $inc: { stock: -quantity, version: 1 },
      },
      { new: true }
    );

    if (!updated) {
      await releaseStock(productId, userId);
      throw new Error("Concurrent modification detected");
    }

    res.json({ success: true, product: updated });
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

module.exports = { addToCart };
