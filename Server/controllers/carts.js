const Cart = require('../models/carts');
const Product = require('../models/product');


exports.addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const cartItem = new Cart({ productId, quantity });
        await cartItem.save();
        res.status(201).json(cartItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


exports.updateAddToCart = async (req, res) => {
    try {
        const { cartItemId, quantity } = req.body;
        const cartItem = await Cart.findById(cartItemId);
        if (!cartItem) {
            res.status(404).json({ error: 'Cart item not found' });
            return;
        }

        cartItem.quantity = quantity;
        await cartItem.save();
        res.status(200).json(cartItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.delteCarts = async (req , res) => {
    try {
        const { cartItemId, quantity } = req.body;
        const findItem = Cart.findById(cartItemId);
        findItem.remove();

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.listCarts = async (req, res) => {
    try {
        const cartItems = await Cart.find();
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}