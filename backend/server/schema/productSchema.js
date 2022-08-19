const mongoose = require('mongoose')
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  avgRatting: Number,
  desc: {
    type: String,
    required: true,
  },
});

module.export = productSchema
