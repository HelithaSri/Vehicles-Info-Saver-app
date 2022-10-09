const express = require('express')
const mongoose = require('mongoose')

const user = require('./routes/user')
const vehicle = require('./routes/vehicle')

const app = express()
const port = 4000

const url = 'mongodb://localhost/vehicleInfoSaver'

mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on('open', () => {
    console.log("MongoDB Connected")
})

app.use(express.json())
app.use('/user', user)
app.use('/vehicle', vehicle)

app.listen(port, () => {
    console.log(`app starting on ${port}`);
})