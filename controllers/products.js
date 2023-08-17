const { log } = require("console");
const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { sort, category } = req.query;
  const queryObject = {};

  // filter category
  if (!category == "") {
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
    product.image = `http://localhost:8080/images/${product.image}`;
    return product;
  });

  res.status(200).json(products);
};

module.exports = {
  getAllProducts,
};
