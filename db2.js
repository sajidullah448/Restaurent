const mongoose=require('mongoose');

// const url='mongodb://localhost:27017/restaurent'

// const url = "mongodb+srv://sajidullahkpk1212:fYCgKSjQFBK7Qs0b@cluster0.douc347.mongodb.net/restaurent";

require('dotenv').config();

const url = process.env.MONGODB_URL;

// const url=process.env.MONGODB_LOCAL_UR


// Use underscore instead of dash

mongoose.connect(url,{
    
});

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('mongodb connected successfully');
});

db.on('error',(err)=>{
    console.log('mongodb get some error ',err);
});

db.on('disconnected',()=>{
    console.log('mongodb disconnected');
});

//export db file
module.exports=db