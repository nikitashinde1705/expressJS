//import express module
const express = require("express");

//create express Application 
const app = express();

//app is your main server

//Route for home page
app.get('/', (req, res) => {         //get - HTTP GET to the browser
    res.send("Welcome to Express");  //send(res) - sends text back to the browser
})                                   //req - data from browser

const PORT=3000;
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})
