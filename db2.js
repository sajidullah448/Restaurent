const mongoose=require('mongoose');
const url='mongodb://localhost:27017/restaurent'

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

module.exports=db