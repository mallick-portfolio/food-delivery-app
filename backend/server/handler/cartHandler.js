const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
const cartSchema = require("../schema/cartSchema.js");
const Cart = mongoose.model("Cart", cartSchema);

route.post("/:email", async (req, res) => {
  res.status(200).json({
    data: req.body,
    message: "done",
  });
});

module.exports = route;
