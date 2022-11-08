const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

module.exports = function () {
	//post method
	router.post('/createUser', userController.createUser);

	//get method
	router.get('/userById/:email', userController.getUserById);

	return router;
};
