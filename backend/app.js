const express = require('express')
const app = express ()

const dotenv = require('dotenv')
const path = require('path')
const connectionDatabase = require('./config/connectionDatabase')
dotenv.config({path:path.join(__dirname,'config','config.env')})

connectionDatabase();

const contact = require('./rotue/contactRoute')

app.use(express.json())
app.use('/api/',contact)

app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on Port ${process.env.PORT} on ${process.env.NODE_ENV}`)
})