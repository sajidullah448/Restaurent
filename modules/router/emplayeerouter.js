const express = require('express');
const router = express.Router();
// const emplayee=require('./modules/emplayees')

const emplayee=require('./../emplayees');

router.post('/',async(req,res)=>{
    try{
        const data=req.body;
    const newdata=new emplayee(data);
    const responce=await newdata.save();
    console.log("data saved");
    res.status(200).json(responce);
    }
    catch(err){
        console.log(err);
        res.status(400).json({error:'internal server'})
    }
});

router.get('/',async(req,res)=>{
    try{
   const data=await emplayee.find();
   console.log('data showed');
   res.status(200).json(data)
    }
    catch(err){
console.log(err);
res.status(400).json({error:'internal server'})
    }
});

router.put('/:id',async(req,res)=>{
    try{
const data=req.params.id;
    const updatedata=req.body;
    const responce=await emplayee.findByIdAndUpdate(data,updatedata,{
        new:true,
        runValidators:true
    });
    if(!responce){
        res.status(404).json({error:'internal server error'});
    }
    else{
        console.log('data update succssfully');
        res.status(200).json(responce)
    }
    }catch(err){
console.log(err);
res.status(400).json({error:'internal server'})
    }
});

router.delete('/:id',async(req,res)=>{
   try{
 const data=req.params.id;
    const show=await emplayee.findByIdAndDelete(data);
    if(!show){
        res.status(404).json({error:'internal server error'});
    }
    else{
        console.log('data delete successfully');
        res.status(200).json({error:'data delete successfully'})
    }
   }catch(err){
console.log(err);
res.status(400).json({error:'internal server'})
   }
})

module.exports=router;