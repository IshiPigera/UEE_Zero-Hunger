const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
	eventName: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: true,
		trim: true,
	},
	location: {
		type: String,
		required: true,
	},
	startTime: {
		type: String,
		required: true,
	},
	endTime: {
		type: String,
		required: true,
	},
    name: {
		type: String,
		required: true,
	},
    contactNo: {
		type: String,
		required: true,
	},
    selfDescription: {
		type: String,
		required: true,
	}
});

const Vol = mongoose.model('volunteerEvent', VolunteerSchema);
module.exports = Vol;
