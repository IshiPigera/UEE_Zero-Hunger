const Events = require ('../model/volunteer.event.model')

/* Create Events */
const createEvents = async (req,res)=>{
    let newEvent = new Events(req.body);

    newEvent.save((err)=>{
       if(err){
           return res.status(400).json({
               error:err
           });
       }

       return res.status(200).json({
           success:"Event saved successfully"
       });
    });
}

module.exports={
    createEvents,
   
}
