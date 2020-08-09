const express = require('express');
const expressLayouts = require('express-ejs-layouts')

const dotenv = require('dotenv');

const mongoose = require('mongoose');
const connectDB = require('./config/dbConfig');

const router = require('./routes/index');
const productRouter = require('./routes/products');

dotenv.config({ path:'./config/config.env' });

const app = express();

connectDB();

// Setup view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.set('layout', 'layouts/layout');

app.use(expressLayouts);

// Static files
app.use(express.static('public'));

// Routes
app.use('/', router);
app.use('/products', productRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT);