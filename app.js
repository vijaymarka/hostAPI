const express = require("express");
const app = express();

app.get('/', (req, res) => {
res.send("Welcome to Home Page");
})

app.listen(3000, (req, res) => {
    console.log('listening on...');
})