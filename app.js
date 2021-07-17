// jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

let details = [];

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/card", (req, res) => {
  res.render("card", {
    details: details[0]
  });
});

app.get("/details", (req, res) => {
  res.render("details");
});

app.post("/details", function(req, res) {

  let data = [{
    fName: req.body.fName,
    lName: req.body.lName,
    occupation: req.body.occupation,
    company: req.body.company,
  city: req.body.city,
  phone: req.body.phone,
  email: req.body.email
  }
  ]
  details.push(data[0]);
  res.redirect("/card");
});

app.listen(3000, function() {
  console.log("Server's on port 3000");
});
