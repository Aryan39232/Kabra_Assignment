import { addToCart, listCarts, updateAddToCart } from '../controllers/carts';

const express = require('express');
const router = express.Router();


router.post('/cart', addToCart);
router.put('/cart', updateAddToCart);
router.get('/cart', listCarts);

export default router;