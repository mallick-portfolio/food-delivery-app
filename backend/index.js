const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
require("dotenv").config();
const app = express();

// middleware
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/test");

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.aifeg4o.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  console.log("connected");
  client.close();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
