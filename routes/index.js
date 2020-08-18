const express = require('express');
const router = express.Router();

// Landing page - GET /
router.get('/', ( req, res ) => {
    res.render('landing');
})

// About page - GET /about
router.get('/about', ( req, res ) => {
    res.render('about');
})

// Contact page - GET /contact
router.get('/contact', ( req, res ) => {
    res.render('contact');
})

module.exports = router;