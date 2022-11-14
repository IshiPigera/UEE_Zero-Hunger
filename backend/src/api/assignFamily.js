const express = require('express');
const router = express.Router();
const famController = require('../controller/assignFamily');

module.exports = function () {
	//post method
	router.post('/createFamily', famController.createFamily);

	//get method
	router.get('/getFam', famController.getFamily);

	//update
	router.post('/updateFamById/:id', famController.updateFamily);

	//update
	router.delete('/deleteFamById/:id', famController.deleteAssignFamily);
	return router;
};
