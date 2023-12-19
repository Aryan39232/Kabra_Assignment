const express = require('express');
const { addProducts, listProducts } = require('../controllers/product');
const router = express.Router();



router.post('/create-product',addProducts);
router.route("/").get(listProducts)


module.exports = router;