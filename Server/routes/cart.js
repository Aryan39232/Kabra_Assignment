const { addToCart, listCarts, updateAddToCart } = require('../controllers/carts');
const express = require('express');
const router = express.Router();

router.post('/cart', addToCart);
router.put('/cart', updateAddToCart);
router.get('/cart', listCarts);

module.exports = router;