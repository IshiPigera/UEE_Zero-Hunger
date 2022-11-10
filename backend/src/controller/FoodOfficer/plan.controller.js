const plan = require('../../model/FoodOfficer/plan.model');

/*create plan*/
const postPlan = async(req,res)=>{
    let newPlan = new plan(req.body);

    newPlan.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"New Plan successfully added !"
        });
    });

}

//get all plans
const getPlans =  async(req,res)=>{
    plan.find().exec((err,plans)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPlans:plans
        });
    });
}


//get a specific plan by id
const getAPlan=async(req,res)=>{
    let planId = req.params.id;
    plan.findById(planId,(err,plan)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            plan
        });
    });

}


//update plan details
const updatePlan = async(req,res)=>{
    plan.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"Plan details updated successfully!"
            });
        }
    )
}

//delete plan
const deletePlan = async(req,res)=>{
    plan.findByIdAndRemove(req.params.id).exec((err,deletedPlan)=>{
        if(err){
            return res.status(400).json({
                message:"Couldn't delete the Plan something is wrong!",deletedPlan
            });
        }
        return res.status(200).json({
            success:"Plan is removed successfully!",deletedPlan
        });
    });
};

module.exports = {
    postPlan,
    getPlans,
    getAPlan,
    updatePlan,
    deletePlan
}