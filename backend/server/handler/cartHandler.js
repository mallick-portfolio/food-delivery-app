const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
const cartSchema = require("../schema/cartSchema.js");
const Cart = mongoose.model("Cart", cartSchema);

route.post("/", async (req, res) => {
  res.send(req.body);
});

module.exports = route;
