const mongoose = require('mongoose');

const CaseSchema = new mongoose.Schema({
	caseId: {
		type: String,
		required: true,
		trim: true,
	},
	title: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
    email: {
		type: String,
		required: true,
	},
	openedDate: {
		type: String,
		required: true,
	},
    endDate: {
		type: String,
		required: true,
	},
    status: {
		type: String,
		required: true,
	},
});

const Case = mongoose.model('cases', CaseSchema);
module.exports = Case;
