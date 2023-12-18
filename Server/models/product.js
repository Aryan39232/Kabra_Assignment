const mongoose = require('mongoose');

const productSchem = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "please Enter Product Name"],
        trim: true
    },
    images: [{
        public_id: {
            type: String,
            require: true
        },
        url: {
            type: String,
            require: true
        }
    }],
    description: {
        type: String,
        require: [true, "please Enter Product description"]
    },
    quantity : {
        type : Number,
        require : [true , "Please Enter Product Stock"],
        maxLength : [4 , "Stock cannot exceed 4 figure"],
        default : 1
    },
    price: {
        type: Number,
        require: [true, "Please Enter product price"],
        maxLength: [8, "Price cannot exceed 8 figure"]
    },
});

module.exports = mongoose.model("Product" , productSchem)