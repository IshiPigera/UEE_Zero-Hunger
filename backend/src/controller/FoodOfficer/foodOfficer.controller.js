const Case = require('../../model/FoodOfficer/case.model');

//get all cases
const getCases = async (req, res) => {
	Case.find().exec((err, cases) => {
		if (err) {
			return res.status(400).json({
				error: err,
			});
		}
		return res.status(200).json({
			success: true,
			existingCases: cases,
		});
	});
};

// Get case by case id
const getCaseById = async (req, res) => {
	if (req.params.id) {
		await Case.findOne({ _id: req.params.id })
			.then((data) => {
				res.status(200).send({ data: data });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};

// Get case by case email
const getCaseByEmail = async (req, res) => {
	if (req.params.caseEmail) {
		await Case.find({ email: req.params.caseEmail })
			.then((data) => {
				res.status(200).send({ data: data });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};

module.exports = {
	getCases,
	getCaseById,
	getCaseByEmail,
};
