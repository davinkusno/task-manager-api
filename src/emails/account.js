const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'davin.kusno@binus.ac.id',
		subject: 'Welcome to the Task Manager App',
		text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
	})
}

const sendCancelationEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'davin.kusno@binus.ac.id',
		subject: 'Goodbye!',
		text: `Sorry to see you go, ${name}, I hope to see you back sometime soon.`,
	})
}

module.exports = {
	sendWelcomeEmail,
	sendCancelationEmail,
}
