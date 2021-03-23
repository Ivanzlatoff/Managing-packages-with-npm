var express = require('express');
var app = express();
var bGround = require("fcc-express-bground");







bGround.log("Hello World");
console.log("Hello World");

app.get("/hello", (req, res) => {
  res.send("Hello Express");
});
























 module.exports = app;
