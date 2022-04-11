var cors = require("cors");
// require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv')
dotenv.config()
var bodyparser = require("body-parser");
const mongoose = require('mongoose')
const { Schema, model } = mongoose
const { connectDatabase } = require("./DB/dbconnect.js")
const app = express();
var passport = require("passport");
app.use(cors());
app.use(express.json());
connectDatabase()
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(passport.initialize());
require("./strategies/jsonwtStrategy")(passport);

app.get('/', (req, res) => {
  res.send('Hello Express app!kya baaat haiiii')
});

const date = new Date();
//Notes model
const sch = {
    user:{
        name:String,
        email:String,
        id:Schema.Types.ObjectId
    },
    note:{
        title:String,
        content:String,
        tag:[],
        color:String
    },createdAt:{
        type:Date,
        immutable:true,
        default:() => Date.now(),
    }
}

//Todo schema
const sch2 = {
    user:{
        name:String,
        email:String,
        id:Schema.Types.ObjectId
    },
    todo:{
        title:String,
        selected:Boolean,
        important:Boolean,
        tag:[],
        

    },createdAt:{
        type:Date,
        immutable:true,
        default:() => Date.now(),
    }
}
//Notes model
const monmodel = mongoose.model("Notes",sch)


//Todo model
const monmodel2 = mongoose.model("Todo",sch2)

//login signup
const profile = require("./routes/User");
app.use("/api", profile);

app.post("/todo",passport.authenticate("jwt", { session: false }),async(req,res)=>{
    console.log(req.user.id);
    const data = new monmodel2({
        user:{
            name:req.body.name,
            email:req.body.email
        },todo:{
            title:req.body.title,
            tag:req.body.tag,
            important:req.body.important,
            selected:req.body.selected
        }});
        const val = await data.save();
        res.json(val);

})

app.get("/todo",passport.authenticate("jwt", { session: false }),async(req,res) => {
      
    console.log(req.user.id);
    try{
            const user = await monmodel2.findOne({"_id":req.query.id})
            console.log(user);
            res.json(user);
        }catch(e){
            console.log(e.message)
        }

})

app.delete("/todo",passport.authenticate("jwt", { session: false }),async(req,res)=>{
    console.log(req.user.id);
    try{
        const user = await monmodel2.deleteOne({"id":req.body.id})
        console.log(user);
        res.json(user);
    }catch(e){
        console.log(e.message)
    }
})

//Notes router
app.get("/notes",passport.authenticate("jwt", { session: false }),async(req,res) => {
    
    console.log(req.user);
    try{
            // const user = await monmodel.findOne({"user.email":req.query.email})
            
            const user = await monmodel.find()
            console.log(user);
            res.json(user);
        }catch(e){
            console.log(e.message)
        }

})
app.post("/notes",passport.authenticate("jwt", { session: false }),async(req,res)=>{
console.log("inside a post function!");console.log(req.user.id);
const data = new monmodel({
    user:{
        name:req.body.name,
        email:req.body.email,
        
    },note:{
        title:req.body.title,
        content:req.body.content,
        tag:req.body.tag,
        color:req.body.color
    },
timestamps:true
    
});
const val = await data.save();
res.json(val);
})
app.delete("/notes",passport.authenticate("jwt", { session: false }),async(req,res) =>{
    console.log(req.user.id);
try{
    const user = await monmodel.deleteOne({"_id":req.body.id})
    console.log(user);
    res.json(user);
}catch(e){
    console.log(e.message)
}
})
app.put("/notes",passport.authenticate("jwt", { session: false }),async(req,res) =>{
    console.log(req.user.id);
try{

   const user = await monmodel.updateOne({
       "_id" :req.body.id, 
   },
    {
        "note.title":req.body.title,
        "note.content":req.body.content
    }
   )
   console.log(user);
    res.json(user);
}catch(e){
   console.log(e.message)
}
})

app.listen(3001, () => {
  console.log('server started');
});