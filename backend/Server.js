const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 5000

app.get("/", (req, res) => {
    res.json({Message:"App is running"});
})

function onListen() {
    console.log(`Listening on: ${PORT}`);
  }
  
app.listen(PORT, onListen);



