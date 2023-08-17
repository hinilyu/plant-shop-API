const express = require("express");
const router = express.Router();

const { payment } = require("../controllers/payment");

// router.route("/").get(getAllProducts);
router.route("/").post(payment);

module.exports = router;
