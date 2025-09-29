const mongoose=require('mongoose');

const hotelmenu=new mongoose.Schema({
   Karahi:{
     type:"string",
     required:true

    },
    price:{
   type:Number,
   required:true
    },
    delivery_time:{
        type:"string",
        required:true
    }
});

const menu=mongoose.model('menu',hotelmenu);
module.exports=menu;