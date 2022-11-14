/** @format */
const express = require("express");
const router = express.Router();
const {
  _getAllProducts,
  _getCategory,
  _getProduct,
  _searchProducts,
} = require("../controlers/productscontrolers.js");

// To All products
router.get("/all", _getAllProducts);

// To the categories
router.get("/:type", _getCategory);
router.get("/product/:id", _getProduct);
router.get("/search", _searchProducts);

module.exports = router;
