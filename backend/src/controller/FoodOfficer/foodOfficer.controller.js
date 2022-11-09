const Case = require('../../model/FoodOfficer/case.model');

//get all cases
const getCases =  async(req,res)=>{
    Case.find().exec((err,cases)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingCases:cases
        });
    });
}

// Get case by case id
const getCaseById = async (req, res) => {
	 
	if (req.params.caseId) {
		await Case.find({ cases: req.params.caseId })
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
};
