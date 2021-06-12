const express = require('express');

const router = express.Router();
const User = require('../model/User');


//router


//GET A SPECIFIC USER
router.get('/:userId', async (req,res) => {
    try{
    const user = await User.findById(req.params.userId);
    res.status(201).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});


// UPDATE USER
router.put('/:userId', async (req, res) => {
    try{
        const updatedUser = await User.findOneAndUpdate(req.params.userId, req.body, {
            new: true
        });
    // Status 200 get object
    res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

// DELETE USER
router.delete('/:userId', async (req, res) => {
    try{
    const deletedUser = await User.findByIdAndDelete(req.params.userId);

    //Status 204 ok but dont return content
    res.status(204).json(deletedUser);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});


//CREATE USER
router.post('/', async (req,res) => {
    console.log(req.body);
    try {
        const newUser = new User(req.body);
        const userSaved = await newUser.save()
        //Status 201 new object created
        res.status(201).json(userSaved);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }

});

module.exports = router;