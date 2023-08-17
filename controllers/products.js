const { log } = require("console");
const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { sort, category } = req.query;
  const queryObject = {};

  // filter category
  if (!category == "" && category != "undefined") {
    queryObject.category = category;
  }

  // sort
  if (sort == "title") {
    result = Product.find(queryObject).sort({ title: 1 });
  } else {
    result = Product.find(queryObject).sort({ price: 1 });
  }

  const limit = Number(req.query.limit) || 12;

  result = result.limit(limit);

  var products = await result;

  products = products.map((product) => {
    product.image = `https://plant-shop-backend.onrender.com/images/${product.image}`;
    return product;
  });

  res.status(200).json(products);
};

module.exports = {
  getAllProducts,
};
