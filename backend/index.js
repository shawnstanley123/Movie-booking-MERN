const express= require('express')
const mongoose = require('mongoose')
const cors= require('cors')
const app = express()
require('dotenv').config()
const PORT= process.env.PORT || 5000
const uri = process.env.ATLAS_URI
mongoose.connect(uri,{useNewUrlParser : true})
const connection = mongoose.connection
connection.once('open',()=>{
    console.log('Database connected succesfully')
})
app.use(express.json())
app.use(cors())
app.listen(PORT,()=>{
    console.log(`server connected to port ${PORT}`)
})


