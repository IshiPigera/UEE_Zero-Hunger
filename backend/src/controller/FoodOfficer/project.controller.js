const project = require('../../model/FoodOfficer/project.model');

/*create project*/
const postProject = async(req,res)=>{
    let newProject = new project(req.body);

    newProject.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"New Project successfully added !"
        });
    });

}

//get all projects
const getProjects =  async(req,res)=>{
    project.find().exec((err,projects)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingProjects:projects
        });
    });
}


//get a specific project by id
const getAProject=async(req,res)=>{
    let projectId = req.params.id;
    project.findById(projectId,(err,project)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            project
        });
    });

}


//update project details
const updateProject = async(req,res)=>{
    project.findByIdAndUpdate(
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
                success:"Project details updated successfully!"
            });
        }
    )
}

//delete project 
const deleteProject = async(req,res)=>{
    project.findByIdAndRemove(req.params.id).exec((err,deletedProject)=>{
        if(err){
            return res.status(400).json({
                message:"Couldn't delete the Project something is wrong!",deletedProject
            });
        }
        return res.status(200).json({
            success:"Project is removed successfully!",deletedProject
        });
    });
};

module.exports = {
    postProject,
    getProjects,
    getAProject,
    updateProject,
    deleteProject
}