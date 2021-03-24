var express = require('express');
var app = express();
var bGround = require("fcc-express-bground");
require('dotenv').config()
var bodyParser = require("body-parser")

app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip)
    next();
})

app.use((req, res, next) => {
    bodyParser.urlencoded({extended: false})
    next();
});


bGround.log("Hello World");
console.log("Hello World");
console.log(__dirname)

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.use(express.static(__dirname + "/public"))
app.use('/public', express.static(__dirname + "/public"))

// app.get("/json", (req, res) => {
//     res.json({"message": "Hello json"})
// })

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ "message": "HELLO JSON" });
  } else {
    res.json({ "message": "Hello json" });
  }
});

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({"time": req.time});
})

app.get("/:word/echo", (req, res) => {
    console.log(req.params)
    res.json({echo : req.params.word})
})

app.get("/name", (req, res) => {
    let string = req.query.first + ' ' + req.query.last
    res.json({name : string})
})












 module.exports = app;
