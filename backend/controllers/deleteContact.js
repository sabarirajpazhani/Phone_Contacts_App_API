const contactModel = require("../models/ContactModels")

exports. deleteContact =async(req, res) =>{
    try{
        const contact = await contactModel.findByIdAndDelete(req.params.id)

        if(!contact){
            res.status(404).json({
                message:"Contact not Found"
            })
        }

        res.status(200).json({
            message: "Successfully Deleted"
        })
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}