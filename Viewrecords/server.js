const express = require('express')
const mongoose = require('mongoose')
const Record = require('./models/record')
const recordRouter = require('./routes/records')
const methodOverride = require('method-override')
const app = express()

mongoose.connect('mongodb+srv://admin:vx5n-FR7AcKdf4w@cmpe281.4rh64.mongodb.net/cmpe281?retryWrites=true&w=majority');

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req,res)=> {
    const records = await Record.find().sort({ Car_ID: 'desc' })
    res.render('records/index', {records: records})
})

app.use('/records',recordRouter)

app.listen(5000)