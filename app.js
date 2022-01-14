const connectDB = require('./DB/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
require('dotenv').config()
// middleware
app.use(express.json())

//  routes

app.use('/api/v1/tasks',tasks)

const port = 3000

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    }catch{
        console.log(error)
    }
}

start()



