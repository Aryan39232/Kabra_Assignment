const express = require('express');
const { addProducts, listProducts } = require('../controllers/product');
const router = express.Router();



router.route("/create-product").post(addProducts);
router.route("/").get(listProducts)


export default router;