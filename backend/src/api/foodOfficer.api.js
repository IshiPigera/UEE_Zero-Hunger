const express = require('express');
const router = express.Router();
const foodOfficerController = require('../controller/FoodOfficer/foodOfficer.controller');

module.exports = function () {
	 

	//get method
	router.get('/cases', foodOfficerController.getCases);

	return router;
};
