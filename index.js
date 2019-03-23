// Check it on localhost:3000

const express = require('express')   // importing library from node_modules

const app = express()

app.get('/', (req, res, next) => {             // get is an http response handler wer / ==home page

res.send('HI')

})

app.listen(3000)       // connect to server on port 3000
