const express = require('express');
const Opinion = require('../model/Opinion');

const router = express.Router();
const Opinion = require('../model/Opinion');


//router

//GET ALL OPINIONS
router.get('/', async (req,res) => {
    console.log(req.body);
    try {
            const opinions = await Opinion.find();
        
            res.json(opinions)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }

});
//GET A SPECIFICS OPINIONS
router.get('/:opinionId', async (req,res) => {
    try{
        const Opinion =await Opinion.findById(req.params.opinionId);
    res.status(201).json(Opinion);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

//GET OPINIONS BY USER
router.get('/:userId', async (req,res) => {
    try{
        const opinions = await Opinion.find().filter(Opinion.userid === req.params.userId);
        res.status(201).json(opinions);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
    
})


// UPDATE OPINION
router.put('/:opinionId', async (req, res) => {
    try{
        const updatedOpinion = await Opinion.findOneAndUpdate(req.params.opinionId, req.body, {
            new: true
        });
    // Status 200 get object
    res.status(200).json(updatedOpinion);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

// DELETE OPINION
router.delete('/:opinionId', async (req, res) => {
    try{
        const deletedOpinion = await Opinion.findByIdAndDelete(req.params.opinionId)

        //Status 204 ok but dont return content
        res.status(204).json(deletedOpinion)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});


//CREATE OPINION
router.post('/', async (req,res) => {
    console.log(req.body);
    try {

        const newOpinion= new Opinion(req.body);
    
        const opinionSaved = await newOpinion.save()
    
        //Status 201 new object created
        res.status(201).json(opinionSaved)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }

});

module.exports = router;
