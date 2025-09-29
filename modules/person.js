const { uniq } = require('lodash');
const mongoose=require('mongoose');

const personschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chief','waiter','manager'],
        required:true,
    },
    mobile:{
        type:String,
        required:true
    },
    email: {
    type: String,
    required: true,   // not "require"
    unique: true,
    trim: true,       // removes spaces
    lowercase: true   // stores emails in lowercase
  },
    address:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
});

const person=mongoose.model('person',personschema);
module.exports=person