const express = require('express')
const userRoutes = require('./routes/userRoutes')
const health = require('./health/health')

const app = express()

app.use(express.json())

app.use('/users', userRoutes)

app.get('/health', health)

app.get('/',(req,res)=>{
    res.send("Kubernetes demo production app")
})

app.listen(3000,()=>{
    console.log("App running on port 3000")
})