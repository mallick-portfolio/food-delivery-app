const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
require("dotenv").config();
const app = express();
const productHandler = require('./server/handler/productHandler.js')
// middleware
app.use(express.json());
app.use(cors());

// const { MongoClient, ServerApiVersion } = require("mongodb");

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   console.log("connected");
//   client.close();
// });

const uri = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.aifeg4o.mongodb.net/food-db?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then((res) => console.log("hello world"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Middleware route

app.use("/products", productHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
