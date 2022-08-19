const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
const productSchema = require("../schema/productSchema.js");
const ProductModel = mongoose.model("Product", productSchema);

route.get("/", async (req, res) => {
  const product = await ProductModel.find({});
  try {
    console.log("hello product")
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});
route.post("/", (req, res) => {});
route.patch("/:id", (req, res) => {});
route.delete("/:id", (req, res) => {});

module.exports = route;
