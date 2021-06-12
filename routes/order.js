const express = require('express');
const Order = require('../model/Order');

const router = express.Router();
const Order = require('../model/Order');


//router

//GET ALL ORDERS
router.get('/', async (req,res) => {
    console.log(req.body);
    try {
            const orders = await Order.find();
        
            res.json(orders)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }

});
//GET A SPECIFICS ORDERS
router.get('/:orderId', async (req,res) => {
    try{

        const Order =await Order.findById(req.params.orderId);
    res.status(201).json(Order);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

//GET ORDERS BY USER
router.get('/:userId', async (req,res) => {
    try{
        const orders = await Order.find().filter(Order.userid === req.params.userId);
        res.status(201).json(orders);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
    
})


// UPDATE ORDER
router.put('/:orderId', async (req, res) => {
    try{
        const updatedOrder = await Order.findOneAndUpdate(req.params.orderId, req.body, {
            new: true
        });
    // Status 200 get object
    res.status(200).json(updatedOrder);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

// DELETE ORDER
router.delete('/:orderId', async (req, res) => {
    try{
        const deletedOrder = await Order.findByIdAndDelete(req.params.orderId)

        //Status 204 ok but dont return content
        res.status(204).json(deletedOrder)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});


//CREATE ORDER
router.post('/', async (req,res) => {
    console.log(req.body);
    try {

        const newOrder= new Order(req.body);
    
        const orderSaved = await newOrder.save()
    
        //Status 201 new object created
        res.status(201).json(orderSaved)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }

});

module.exports = router;