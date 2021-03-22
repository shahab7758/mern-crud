const { Router } = require("express");
const express = require("express");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const url = "mongodb://localhost:27017/AlienDB"
const alienRouter = require("./routes/aliens")

const app = express();

mongoose.connect(url, { useNewUrlParser: true })

const con = mongoose.connection

app.use(express.json({ extended: false }))

con.on('open', () => {
    console.log('connected...')
})

app.use('/aliens', alienRouter)


const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost:${PORT}`)
})