var express = require('express');
var app = express();
var bGround = require("fcc-express-bground");







bGround.log("Hello World");
console.log("Hello World");
console.log(__dirname)

app.get("/hello", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
























 module.exports = app;
