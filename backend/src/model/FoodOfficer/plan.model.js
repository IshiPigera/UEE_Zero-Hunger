const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
	planId: {
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
     
	 
});

const Plan = mongoose.model('plans', PlanSchema);
module.exports = Plan;
