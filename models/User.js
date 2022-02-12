const mongoose = require('mongoose')

// firebase의 field 같은 느낌
const userSchema = mongoose.Schema({
	name: {
		type: String,
		maxlength: 50,
	},
	email: {
		type: String,
		trim: true,
		unique: 1,
	},
	password: {
		type: String,
		minlength: 5,
	},
	lastname: {
		type: String,
		maxlength: 50,
	},
	role: {
		type: Number,
		default: 0,
	},
	image: String,

	token: {
		type: String,
	},
	tokenExp: {
		type: Number,
	},
})

// firebase의 collection 같은 느낌
const User = mongoose.model('User', userSchema)

module.exports = { User }
