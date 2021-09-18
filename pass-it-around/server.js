// Importing Express
const express = require('express');

// Create App Object
const app = express();
const port = 3000;

// Bottles subtracting variable
var bottles = (req.params.number_of_bottles - 1)


app.get("/:number_of_bottles", (req, res) => {
    res.render("show.ejs");
})


app.listen(3000, () => {
    console.log('listening');
});