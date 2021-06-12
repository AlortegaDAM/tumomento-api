const express = require('express');

const router = express.Router();
const Product = require('../model/Product');


//router

//GET ALL PRODUCTS
router.get('/', async (req,res) => {
    console.log(req.body);
    try {
        const products = await Product.find();
        res.status(201).json(products);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }

});
//GET A SPECIFIC PRODUCT
router.get('/:productId', async (req,res) => {
    try{
    const product = await Product.findById(req.params.productId);
    res.status(201).json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});


// UPDATE PRODUCT
router.put('/:productId', async (req, res) => {
    try{
        const updatedProduct = await Product.findOneAndUpdate(req.params.productId, req.body, {
            new: true
        });
    // Status 200 get object
    res.status(200).json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

// DELETE PRODUCT
router.delete('/:productId', async (req, res) => {
    try{
    const deletedProduct = await Product.findByIdAndDelete(req.params.productId);

    //Status 204 ok but dont return content
    res.status(204).json(deletedProduct);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});


//CREATE PRODUCT
router.post('/', async (req,res) => {
    console.log(req.body);
    try {
        const newProduct = new Product(req.body);
        const productSaved = await newProduct.save()
        //Status 201 new object created
        res.status(201).json(productSaved);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }

});

module.exports = router;