// Importing Express
const express = require('express');

// Create App Object
const app = express();
const port = 3000;

// Importing Greeting from greeting.js
const greeting = require("./models/greeting")

app.get('/greeting', (req, res) => {
    res.send(greeting)
})

app.get('/greeting/:name', (req, res) => {
    res.send(greeting +  req.params.name);
});





app.listen(3000, () => {
    console.log('listening');
});