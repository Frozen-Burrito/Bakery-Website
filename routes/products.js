const express = require('express');

const Product = require('../models/product');

const {
    renderNewProductPage,
    saveProductImage,
} = require('../helpers/productHelpers');

const router = express.Router();

// All products - GET /products
router.get('/', async ( req, res ) => {

    try {
        const products = await Product.find({});

        res.render('products/allProducts', {
            products,
        });
    } catch (error) {
        res.redirect('/');
    }
})

// Add product form - GET /products/new
router.get('/new', ( req, res ) => {
    renderNewProductPage(res, new Product());
})

// Add product - POST /products/new
router.post('/new', async ( req, res ) => {
    console.log(req.body);
    const { name, description, price, inStock, image } = req.body;

    const newProduct = new Product({
        name,
        description,
        price,
        inStock,
    });

    saveProductImage(newProduct, image);

    try {
        const savedProduct = await newProduct.save();
        res.redirect('/products');
    } catch (error) {
        renderNewProductPage(res, newProduct, true);
    }

})

module.exports = router;