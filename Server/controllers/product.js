const Product = require('../models/product');


exports.addProducts = async (req, res) => {

    try {
        const { name, image, description, quantity, price } = req.body;
        console.log(req.body);
        if (!name || !image || !description || !quantity || !price) {
            return res.this.status(400).json("Please Add all Details")
        }
        await Product.create({ name, image, description, quantity, price });
        res.status(201).json("Succesfully created product")
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

exports.listProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};