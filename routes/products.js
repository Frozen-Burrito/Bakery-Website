const express = require('express');
const multer = require('multer')
const path = require('path');

const Product = require('../models/product');

const {
    renderNewProductPage,
    removeProductImage,
} = require('../helpers/productHelpers');
const { response } = require('express');

const router = express.Router();

const uploadPath = path.join('public', Product.imageBasePath);
const supportedImages = ['image/jpeg', 'image/png'];

const upload = multer({
    dest: uploadPath,
    fileFilter: ( req, file, callback ) => {
        callback(null, supportedImages.includes(file.mimetype));
    }
})

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
router.post('/new', upload.single('image'), async ( req, res ) => {
    const { name, description, price, inStock } = req.body;
    const productImage = req.file != null ? req.file.filename : null;

    const newProduct = new Product({
        name,
        description,
        price,
        inStock,
        productImage
    });

    try {
        const savedProduct = await newProduct.save();
        res.redirect('/products');
    } catch (error) {
        if (newProduct.productImage != null) {
            removeProductImage(path.join(uploadPath, newProduct.productImage));
        }

        renderNewProductPage(res, newProduct, true);
    }

})

module.exports = router;