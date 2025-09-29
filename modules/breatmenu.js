const mongoose=require('mongoose');

const newmenu=new mongoose.Schema({
    name:{
        type:"String",
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    type:{
        type:"string",
        num:['red','white','rosh'],
    },
    deliverytime:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
});

const restaurentmenu=mongoose.model('restaurentmenu',newmenu,'restaurentmenu');

module.exports=restaurentmenu;