
require('dotenv').config();
var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var User = require("./model/usermodel");
var db = process.env.MONGO_URL
var app = express();
var passport = require("passport");

var port = process.env.PORT || 3000;

var bcrypt = require('bcrypt')
var saltRouds = 10

const connectDB = require('./database/connection')
connectDB();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


app.use(passport.initialize());

//Config for JWT strategy
require("./strategies/jsonwtStrategy")(passport);

app.get("/", (req, res) => {
  res.status(200).send(`Hi Welcome to the Keepify`);
});

const profile = require("./routes/User");
app.use("/api", profile);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});