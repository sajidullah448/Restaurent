const mongoose=require('mongoose');

const mongooseurl='mongodb://localhost:27017/buetk'

mongoose.connect(mongooseurl,{
    
});

const db1=mongoose.connection;

db1.on('connected',()=>{
    console.log('mongodb connected');
})
db1.on('error',(err)=>{
    console.log('mongodb produce some error in  connected',err);
})
db1.on('disconnected',()=>{
    console.log('mongodb disconnected');
})

module.exports=db1;