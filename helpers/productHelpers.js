const fs = require('fs');
const Product = require('../models/product');

function renderNewProductPage(res, product, error = false) {

    try {
        let context = {
            product,    
        }

        if (error) context.errorMsg = 'An error ocurred when adding the product.';

        res.render('products/newProduct', context);

    } catch (error) {
        console.log(error);
        res.redirect('/products');
    }
}

function removeProductImage(filePath) {
    fs.unlink(filePath, error => console.error(error));
}

module.exports = {
    renderNewProductPage,
    removeProductImage,
}