const Product = require('../models/product');
const { Buffer } = require('buffer');

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

function saveProductImage(product, encodedImage) {
    if (encodedImage == null) return;

    const image = JSON.parse(encodedImage);
    const imageMimeTypes = ['image/jpeg', 'image/png'];

    if (image != null && imageMimeTypes.includes(image.type)){
        product.productImage = new Buffer.from(image.data, 'base64');
        product.productImageType = image.type;
    }
}

module.exports = {
    renderNewProductPage,
    saveProductImage,
}