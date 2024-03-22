require('dotenv').config()

const express = require("express")
const app = express();

const port = 4000;

app.get('/', (request, response) => {
    response.send("Hello World");
})

app.get('/twitter', (req, res) => {
    res.send("anupshawdotcom");
})

app.get('/login', (req, res) => {
    res.send('<h1>You are sucessfully login</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listen in port ${port}`);
})
