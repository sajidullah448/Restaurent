 const mongoose=require('mongoose');

const newemplayee=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    phone:{
        type:String
    },
    address:{
        type:String,
        required:true
    },
    posting:{
        type:String
    },
    salary:{
        type:String
    }
});

const emplayee=mongoose.model("emplayee",newemplayee,"emplayee");
module.exports=emplayee;