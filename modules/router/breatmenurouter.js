const express = require('express');
const router = express.Router();

// const restaurentmenu = require('./modules/breatmenu');

const restaurentmenu=require('./../breatmenu')

// Insert menu (POST)
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newmenu = new restaurentmenu(data);
        const result = await newmenu.save();
        console.log('All data stored in mongodb');
        res.status(200).json(result);
    } catch (err) {
        console.log('Error while storing data:', err);
        res.status(400).json(err);
    }
});

// Get all menus (GET)
router.get('/', async (req, res) => {
    try {
        const data = await restaurentmenu.find();
        console.log('Data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log('Error while fetching data:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});


router.get('/:foodtype', async (req, res) => {
    try {
        const foodtype = req.params.foodtype;

        if (foodtype == 'red' || foodtype == 'white' || foodtype == 'rosh') {
            const responce = await restaurentmenu.find({ type: foodtype }) // fixed field: type
            console.log('responce accure');
            res.status(200).json(responce);
        }
        else {
            res.status(400).json({ error: 'invalid search' })
        }

    } catch (err) {
        console.log('Error while fetching data:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/:id',async(req,res)=>{
    try{
const personid=req.params.id;        //get element by id
    const updatadata=req.body;      //update data 
    const responce=await restaurentmenu.findByIdAndUpdate(personid,updatadata,{
        new:true,
        runValidators:true
    });
    if(!responce){
        res.status(404).json({error:'person not found'})
    }

    console.log("data update successfully");
    res.status(200).json(responce);


    }catch(err){
console.log('Error while fetching data:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});


router.delete('/:id',async(req,res)=>{
    try{
const personid=req.params.id; 
const deletedata=await restaurentmenu.findByIdAndDelete(personid);
console.log("data deleted successfully");
res.status(300).json(deletedata);
    }catch(err){
   console.log('Error while fetching data:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
})

module.exports=router