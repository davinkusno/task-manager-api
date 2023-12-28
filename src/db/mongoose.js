const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

// const me = new User({
// 	name: 'Davin',
// 	email: 'test@davin.com',
// 	password: 'test123456',
// });

// me.save()
// 	.then(() => {
// 		console.log(me);
// 	})
// 	.catch((error) => {
// 		console.log('Error!', error);
// 	});

// const task = new Task({
// 	description: 'Belajar',
// 	completed: false,
// });

// task
// 	.save()
// 	.then(() => {
// 		console.log(task);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});
