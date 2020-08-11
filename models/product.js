const mongoose = require('mongoose');
const path = require('path');
const { Buffer } = require('buffer');

const imageBasePath = 'uploads/productImages';

const ProductSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    productImage: {
        type: Buffer,
        required: true
    },

    productImageType: {
        type: String,
        required: true
    },

    inStock: {
        type: Number,
        required: true,
        default: 0
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

ProductSchema.virtual('productImagePath').get(function() {
    if (this.productImage != null && this.productImageType != null) {
        return `data:${this.productImageType};charset=utf-8;base64,${this.productImage.toString('base64')}`;
    }
});

module.exports = mongoose.model('Product', ProductSchema);
module.exports.imageBasePath = imageBasePath;