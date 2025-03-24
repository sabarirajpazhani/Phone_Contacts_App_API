const mongoose = require('mongoose')

const connectionDatabase=()=>{
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log("MongoDB is connect on "+con.connection.host)
    })
}

module.exports=connectionDatabase;