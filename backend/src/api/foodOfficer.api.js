const express = require('express');
const router = express.Router();
const foodOfficerController = require('../controller/FoodOfficer/foodOfficer.controller');
const projectController = require('../controller/FoodOfficer/project.controller');
const planController = require('../controller/FoodOfficer/plan.controller');

module.exports = function () {
	// cases routes
	router.get('/cases', foodOfficerController.getCases);
	router.get('/cases/:id', foodOfficerController.getCaseById);
	router.get('/casesByEmail/:caseEmail', foodOfficerController.getCaseByEmail);

	/*Project routes */

	router.post('/project/post', projectController.postProject);
	router.get('/project/get', projectController.getProjects);
	router.get('/project/get/:id', projectController.getAProject);
	router.delete('/project/delete/:id', projectController.deleteProject);
	router.put('/project/update/:id', projectController.updateProject);

	/*Plan routes */

	router.post('/plan/post', planController.postPlan);
	router.get('/plan/get', planController.getPlans);
	router.get('/plan/get/:id', planController.getAPlan);
	router.delete('/plan/delete/:id', planController.deletePlan);
	router.put('/plan/update/:id', planController.updatePlan);

	return router;
};
