// Check it on localhost:3000

const express = require('express')   // importing library from node_modules

const app = express()

app.get('/', (req, res, next) => {             // get is an http response handler wer / ==home page

res.send('HI')

})

app.listen(3000)       // connect to server on port 3000
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`


const express = require('express')
const path = require('path')
const hoganMiddleware = require('hogan-middleware')

const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine('mustache', hoganMiddleware.__express)

app.get('/', (req, res, next) => {
	res.send('Hello!!')
})

app.get('/json', (req, res, next) => {
	const data = {
		greeting: 'Hello!!'
	}

	res.json(data)
})

app.get('/home', (req, res, next) => {
	res.render('home', null)
})

app.listen(3000) // 3000, 5000, 8000, 8080
