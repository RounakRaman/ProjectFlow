const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://mern-vercel:<password>@mern-vercel.tqsdz6e.mongodb.net/task-manager';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(mongoURI, options)
	.then(() => {
		console.log('Connected to MongoDB');
		// Start your application or perform additional operations
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});
