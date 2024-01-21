const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getActiveProducts,
  getFindByName,
  getQueryHelper,
} = require("../controller/product.controller");

router.route("/").get(getProducts).post(createProduct);
router.route("/active").get(getActiveProducts);
router.route("/findbyname").get(getFindByName);
router.route("/queryhelper").get(getQueryHelper);

router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;
