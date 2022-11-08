const mongoose = require('mongoose');

//db connection URL
const dbURI =
	'mongodb+srv://teamjustdoit:TeamJustdoit@zerohunger.7zls5xy.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
	await mongoose.connect(
		dbURI,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
		(error) => {
			if (error) {
				console.log('Database Error: ', error.message);
			}
		}
	);

	//check db is connect successfully
	mongoose.connection.once('open', () => {
		console.log('Database connected.');
	});
};

module.exports = connectDB;
