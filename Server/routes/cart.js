const { addToCart, listCarts, updateAddToCart } =  require('../controllers/carts');

const express = require('express');
const router = express.Router();


router.post('/add-to-cart', addToCart);
router.put('/update-cart', updateAddToCart);
router.get('/get', listCarts);

module.exports =  router;