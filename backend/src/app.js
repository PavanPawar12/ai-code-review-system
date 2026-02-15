const express = require('express')
const aiRoutes = require('./routes/ai.routes')
const app = express()

app.use(express.json())

app.get('/home' , (req, res)=>{
    res.send("This is home directory")
})
app.get('/', (req, res) => {
    res.send('API working ✅')
})

app.use('/ai', aiRoutes)
module.exports = app   // 🔥 VERY IMPORTANT
