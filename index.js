const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/hotels")
  .then(() => console.log("MongoDB connected"))
app.use('/api', require('./routes/route'))
app.use((err,req,res,next) => {
  res.json({ error: err.message })  })
app.listen(3000, () => console.log('Server running on port 3000'))
