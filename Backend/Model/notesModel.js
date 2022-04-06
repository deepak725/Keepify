const mongoose = require('mongoose')
const { Schema, model } = mongoose
const NoteSchema = new Schema({
 user:{
     email:{}
 },
 notes: [
    {
      title: {
      },
      tags: {
      },
      content: {
      }
    }
  ] 
})

const Note = new model('note', NoteSchema)

module.exports = { Note }