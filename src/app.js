const express = require('express');
const app = express();
const productRoute = require('./routes/productRoute');

//middleware
app.use(express.json());

//User POST ROUTE
app.use('/api/product', productRoute);

module.exports = app;
