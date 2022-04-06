const mongoose = require('mongoose');
const { Schema, model } = mongoose

const DbSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
       
    },
    password:{
        type:String,
        required:true
    }
    // createdAt:{
    //     type: Date,
    //     default: Date.now
    // }
})

const User = new model('User', DbSchema)

module.exports = { User }