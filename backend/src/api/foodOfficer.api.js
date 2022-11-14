const express = require('express');
const router = express.Router();
const foodOfficerController = require('../controller/FoodOfficer/foodOfficer.controller');

module.exports = function () {
	//get method
	router.get('/cases', foodOfficerController.getCases);
	router.get('/cases/:id', foodOfficerController.getCaseById);
	router.get('/casesByEmail/:caseEmail', foodOfficerController.getCaseByEmail);

	return router;
};
