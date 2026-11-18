const express = require('express');
const app = express();
app.use(express.json());
const proDuctRoutes = require('./routes/products.routes');
app.use('/api/products', proDuctRoutes);
module.exports = app;

// localhost:3000/api/products