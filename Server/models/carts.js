const mongoose = require('mongoose');

const cartSchem = new mongoose.Schema({
    productId: {
        type: String, 
        ref: 'Product', 
        required: true 
    },
    quantity: { 
        type: Number, 
        required: true 
    },
});

module.exports = mongoose.model("Cart" , cartSchem)