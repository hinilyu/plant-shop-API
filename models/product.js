const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "product title must be provided"],
  },
  price: {
    type: Number,
    required: [true, "product price must be provided"],
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    required: [true, "product price must be provided"],
  },
  category: {
    type: String,
    // enum: {
    //   values: ["ikea", "liddy", "caressa", "marcos"],
    //   message: "{VALUE} is not supported",
    // },
    // enum: ['ikea', 'liddy', 'caressa', 'marcos'],
  },
});

module.exports = mongoose.model("Product", productSchema);
