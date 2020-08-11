const express = require('express');
const expressLayouts = require('express-ejs-layouts')

const dotenv = require('dotenv');

const connectDB = require('./config/dbConfig');

const router = require('./routes/index');
const productRouter = require('./routes/products');

dotenv.config({ path:'config.env' });

const app = express();

connectDB(process.env.DATABASE_URL);

// Setup view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.set('layout', 'layouts/layout');

app.use(expressLayouts);

// Static files
app.use(express.static('public'));

app.use(express.urlencoded({ limit:'1mb', extended: false }));

// Routes
app.use('/', router);
app.use('/products', productRouter)

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => console.log(`Server running on port ${port}`));