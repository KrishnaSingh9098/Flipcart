const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Create a new product
router.post('/product', async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Read all products
router.get('/product', async (req, res) => {
    try {
        const products = await Product.find().populate('category');
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Read a single product by ID
router.get('/product/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('category');
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a product by ID
router.put('product/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a product by ID
router.delete('product/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;





// const express = require('express')
// const router = express.Router()
// const product = require('../models/product')







// module.exports = router



























// const express = require('express');
// const router = express.Router();
// const Product = require('../models/product');


// module.exports = router;






// / Route to create a new product
// router.post('/product', async (req, res) => {
//   try {
//     // Assuming productData is sent in the request body
//     const productData = req.body;

//     // Create a new instance of the Product model
//     const newProduct = new Product(productData);

//     // Save the product to the database
//     const savedProduct = await newProduct.save();

//     // Respond with the saved product object
//     console.log('Product Created:', savedProduct);
//     res.status(201).json(savedProduct);
//   } catch (err) {
//     // Handle errors
//     console.error('Error creating product:', err);
//     res.status(500).json({ error: 'Error creating product' });
//   }
// });
