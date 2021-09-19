// Importing Express
const express = require('express');

// Create App Object
const app = express();
const port = 3000;

const bottles = require("./models/bottles")

app.get('/', (req, res) => {
    res.render("show.ejs", {subtractBottle: 98, currentBottle: 99})
});

app.get('/:number_of_bottles', (req, res) => {
    var currentBottle = req.params.number_of_bottles
    var subtractBottle = req.params.number_of_bottles - 1
    res.render("show.ejs",  {subtractBottle: subtractBottle,
                             currentBottle: currentBottle})
})


app.listen(3000, () => {
    console.log('listening');
});