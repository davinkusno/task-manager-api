const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('Email is invalid')
			}
		},
	},
	password: {
		type: String,
		required: true,
		minlength: 7,
		trim: true,
		validate(value) {
			if (value.toLowerCase().includes('password')) {
				throw new Error('Password cannot contain "password"')
			}
		},
	},
	age: {
		type: Number,
		default: 0,
		validate(value) {
			if (value < 0) {
				throw new Error('Age must be a postive number')
			}
		},
	},
})

userSchema.methods.toJSON = function () {
	const user = this
	const userObject = user.toObject()

	delete userObject.password

	return userObject
}

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
	const user = this

	if (user.isModified('password')) {
		user.password = await bcrypt.hash(user.password, 8)
	}

	next()
})

// Delete user tasks when user is removed
userSchema.pre('remove', async function (next) {
	const user = this
	await Task.deleteMany({ owner: user._id })
	next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
