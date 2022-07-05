const express = require("express");
const app = express();

app.get('/', (req, res) => {
res.send("Welcome to Home Page");
})

const port = process.env.port || 3000;

app.listen(port, (req, res) => {
    console.log('listening on...');
})