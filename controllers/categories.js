const Category = require("../models/category");

const getAllCategories = async (req, res) => {
  const categories = await Category.find();
  var result = [];
  result = categories.map((object) => {
    return object.name;
  });

  res.status(200).json(result);
};

module.exports = {
  getAllCategories,
};
