const mongoose = require('mongoose');

const AssignSchema = new mongoose.Schema({
	caseTitle: {
		type: String,
		trim: true,
	},
	description: {
		type: String,
		trim: true,
	},
	location: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	assignDate: {
		type: String,
		required: true,
	},
});

const Family = mongoose.model('family', AssignSchema);
module.exports = Family;
