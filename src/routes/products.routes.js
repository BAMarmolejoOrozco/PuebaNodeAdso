const express = require('express');
const router = express.Router();

const ctrlProducts = require('../controllers/products.controller');

router.get('/', ctrlProducts.getProducts);
router.get('/:id', ctrlProducts.getProductById);
router.post('/', ctrlProducts.createProduct);
router.put('/:id', ctrlProducts.updateProduct);
router.delete('/:id', ctrlProducts.deleteProduct);

module.exports = router;