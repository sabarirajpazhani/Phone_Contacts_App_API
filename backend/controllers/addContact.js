const contactModel = require("../models/ContactModels")

exports.addContact =async(req, res)=>{
    const { firstName, lastName, phoneNumber, email} = req.body
    try{
       

        let userPhone = await contactModel.findOne({phoneNumber})

        if(userPhone){
            return res.status(404).json({
                message:"Contact already exsits"
            })
        }

        userPhone = new contactModel({firstName, lastName, phoneNumber, email})
        await userPhone.save()

        res.status(200).json({
            message:"Contact saved Successfully"
        })
    }
    catch(error){
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}