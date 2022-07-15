const express = require("express");
const app = express();

app.get('/v1', (req, res) => {
res.send("Welcome to Home Page.. This is Hosting from Aws Pipeline");
})

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log('listening on...');
})
