const Family = require('../model/assignFamily');

// Add new user
const createFamily = async (req, res) => {
	console.log(req.body);
	if (req.body) {
		const user = new Family(req.body);
		await user
			.save()
			.then((data) => {
				res.status(200).send({ data: data });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};

// Get user by user id
// const getUserById = async (req, res) => {
// 	console.log(req.params.email);
// 	if (req.params.email) {
// 		await User.find({ email: req.params.email })
// 			.then((data) => {
// 				res.status(200).send({ data: data });
// 			})
// 			.catch((error) => {
// 				res.status(500).send({ error: error.message });
// 			});
// 	}
// };

//get all cases
const getFamily = async (req, res) => {
	Family.find().exec((err, cases) => {
		if (err) {
			return res.status(400).json({
				error: err,
			});
		}
		return res.status(200).json({
			success: true,
			data: cases,
		});
	});
};

// update
const updateFamily = async (req, res) => {
	const data = req.body;
	console.log(req.params.id);
	if (req.params.id) {
		await Family.findOneAndUpdate({ _id: req.params.id }, data)
			.then((data) => {
				res.status(200).send({ data: data });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};

// Delete single object
const deleteAssignFamily = async (req, res) => {
	try {
		const data = await Family.findOneAndDelete({ _id: req.params.id });

		if (!data) {
			return res.status(422).json({
				status: false,
				msg: 'No data found from given user id',
			});
		} else {
			return res.json({
				status: true,
				data: data,
			});
		}
	} catch (error) {
		return res.status(422).json({
			status: false,
			msg: error,
		});
	}
};

module.exports = {
	getFamily,
	createFamily,
	updateFamily,
	deleteAssignFamily,
};
