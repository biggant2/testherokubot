const express = require('express');
const bot = require('./index.js');
const app = express();
const port = process.env.PORT || 3000;

bot();

app.get('/', function (req, res) {
    res.send('epic website smile')
})

app.get('/wakemydyno.txt', function (req, res) {
    res.send('smile')
})

 
app.listen(port)