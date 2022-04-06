const express = require('express')
const router = express.Router()
const note = require("../Model/notesModel.js")
router.route('/')
.get( async(req, res) => {

  res.send("notes here !")

})
.post( async(req, res) => {

    

})

module.exports = router