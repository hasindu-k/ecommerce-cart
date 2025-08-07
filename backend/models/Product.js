const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  version: { type: Number, default: 0 }, // For optimistic concurrency
});

module.exports = mongoose.model("Product", productSchema);
