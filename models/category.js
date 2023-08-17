const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product title must be provided"],
  },
});

module.exports = mongoose.model("Category", categorySchema);
