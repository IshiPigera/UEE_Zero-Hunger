const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
	projectId: {
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
    date: {
		type: String,
		required: true,
	},
	venue: {
		type: String,
		required: true,
	},
    member: {
		type: String,
		required: true,
	},
	 
});

const Project = mongoose.model('projects', ProjectSchema);
module.exports = Project;
