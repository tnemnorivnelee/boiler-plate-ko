const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000

const { User } = require('./models/User')
const config = require('./config/key')

// application/x-www.form-url-urlencoded
app.use(express.urlencoded({ extended: true }))

// application/json
app.use(express.json())

mongoose
	.connect(config.mongoURI)
	.then(() => {
		console.log('MongoDB Connected...')
	})
	.catch((err) => {
		console.log(err)
	})

app.get('/', (req, res) => {
	res.send('Hello world!!!!!!!!!')
})

app.post('/register', (req, res) => {
	const user = new User(req.body)
	user.save((err, userInfo) => {
		if (err) {
			return res.json({
				success: false,
				err,
			})
		}
		return res.status(200).json({
			success: true,
		})
	}) // mongoDB Method
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!!`)
})
