const contactModel = require("../models/ContactModels")

exports. getAllContact =async(req, res)=>{
    try{
        const allContact = await contactModel.find()

        if(!allContact){
            return res.status(404).json({
                message: "Empty Contact..... There is no Single contact"
            })
        }

        res.status(200).json(
            allContact
        )
    }
    catch(error){
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}


exports. getSingleContact =async(req, res)=>{
    try{
        const singleContact = await contactModel.findById(req.params.id)

        if(!singleContact){
            return res.status(404).json({
                message: "Contact not Found"
            })
        }

        res.status(200).json(
            singleContact
        )

    }
    catch(error){
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}