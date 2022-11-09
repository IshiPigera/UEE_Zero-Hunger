const express = require('express');
const router = express.Router();
const volunteerController = require('../controller/volunteer.controller');

module.exports = function () {
	//post method
	router.post('/createEvent', volunteerController.createEvents);

	//get method
	// router.get('/userById/:email', userController.getUserById);

	return router;
};