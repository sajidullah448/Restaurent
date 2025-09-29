const express =require('express');
const app=express();

const bodyparser=require('body-parser');
app.use(bodyparser.json());

const db=require('./db1');
const emplayee=require('./modules/emplayees')

// app.post('/emplayee',async(req,res)=>{
//     try{
//         const data=req.body;
//     const newdata=new emplayee(data);
//     const responce=await newdata.save();
//     console.log("data saved");
//     res.status(200).json(responce);
//     }
//     catch(err){
//         console.log(err);
//         res.status(400).json({error:'internal server'})
//     }
// });

// app.get('/emplayee',async(req,res)=>{
//     try{
//    const data=await emplayee.find();
//    console.log('data showed');
//    res.status(200).json(data)
//     }
//     catch(err){
// console.log(err);
// res.status(400).json({error:'internal server'})
//     }
// });

app.listen(8000,()=>{
    console.log('server on port 8000');
})