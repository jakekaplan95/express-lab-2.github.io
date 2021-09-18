// Importing Express
const express = require('express');

// Create App Object
const app = express();
const port = 3000;

// Importing Greeting from greeting.js
const greeting = require("./models/greeting")
const magic = require("./models/magic")

// Normal greeting route with no name
app.get('/greeting', (req, res) => {
    res.send(greeting)
})

// Greeting route with a name
app.get('/greeting/:name', (req, res) => {
    res.send(greeting +  req.params.name);
});

// Tip route with a calculator for how much your tip should be
app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send("Your tip should be " + (req.params.total/req.params.tipPercentage + " dollars!"));
})

// Magic 8 Ball Route
app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
    var randomMagic = Math.floor(Math.random()*magic.length);
    res.render("index.ejs", {randomMagic: magic[randomMagic]});
})


app.listen(3000, () => {
    console.log('listening');
});