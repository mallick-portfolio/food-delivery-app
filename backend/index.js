const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
require("dotenv").config();
const app = express();
const productHandler = require("./server/handler/productHandler.js");
const cartHandler = require("./server/handler/cartHandler.js");
// middleware
app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.aifeg4o.mongodb.net/food-db?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then((res) => console.log("DB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Middleware route

app.use("/products", productHandler);
app.use("/cart", cartHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
