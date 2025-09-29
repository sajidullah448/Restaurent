const express =require('express');
const app=express();

const bodyparser=require('body-parser')
app.use(bodyparser.json())

const db=require('./db')

const person=require('./modules/person')

const menu=require('./modules/hotelmenu');

app.get('/',(req,res)=>{
  res.send('HELLO every body')
});


app.post('/person',async(req,res)=>{
  try{
    const data=req.body;

    const newperson=new person(data);
    const responce=await newperson.save();
    console.log('data saved');
    res.status(400).json(responce)

  }
  catch(err){
  console.log(err);

  res.status(201).json({error:'internal server error'})
  }
});

app.get('/person',async(req,res)=>{
  try{
  const data=await person.find();
  console.log('data saved');
    res.status(200).json(data)
  }
  catch(err){
 console.log(err);
  res.status(201).json({error:'internal server error'})
  }
})
 


//MENU INFORMATION:
app.post('/menu',async(req,res)=>{
  try{
  const menudata=req.body;

  const newmenu=new menu(menudata);
  const responce=await newmenu.save();
  console.log('data seved');
  res.status(200).json(responce)

  }catch(err){
console.log(err);
res.status(400).json({error:'internal server error'})
  }
});

app.get('/menu',async(req,res)=>{
  try{
    const show=await menu.find();
   console.log('data saved');
    res.status(200).json(show)
  }catch(err){
    console.log(err);
    res.status(400).json({error:'internal server error'})
  } 
})

app.listen(8080,()=>{
  console.log('server is running ');
})