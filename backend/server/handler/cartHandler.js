const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
const cartSchema = require("../schema/cartSchema.js");
const Cart = mongoose.model("Cart", cartSchema);

route.post("/", async (req, res) => {
  console.log(req.body)
  try {
    const newOrder = new Cart(req.body);
    const result = await newOrder.save();
    console.log(result)
    res.send(result);
  } catch {
    res.status(409).json({
      error: "failed to complete order",
    });
  }
});

module.exports = route;
