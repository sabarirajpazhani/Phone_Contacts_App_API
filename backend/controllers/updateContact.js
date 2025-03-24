const contactModel = require("../models/ContactModels")

exports. updateContact =async(req, res)=>{
    try{
        const contact =await contactModel.findByIdAndUpdate(req.params.id, req.body, {
            new : true
        })

        if(!contact){
            res.status(404).json({
                message: "Contact not Found"
            })
        }

        res.status(200).json({
            message:"Sucessfully Updated"
        })

    }
    catch(error){
        res.status(500).json({
            message: "Internal Server error"
        })
    }
}