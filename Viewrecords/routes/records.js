const express = require('express')
const Record = require('./../models/record')
const router = express.Router()

router.get('/new', (req,res) =>{
    res.render('records/new', { record: new Record() })
})

router.get('/:id', async (req,res) =>{
    const record = await Record.findById(req.params.id)
    if(record == null){
        res.redirect('/')
    }
    res.render('records/show', { record: record} )
})

router.post('/', async (req,res)=>{
    let record = new Record({
        _id: req.body._id,
        Car_ID: req.body.Car_ID,
        Booking_ID: req.body.Booking_ID,
        Collision_Data: req.body.Collision_Data,
        Invasion_Data: req.body.Invasion_Data,
        GNSS_Data: req.body.GNSS_Data
    })
    try{
        record = await record.save()
        res.redirect(`/records/${record.id}`)
    } catch(e){
        console.log(e)
        res.render('records/new',{record: record})
    }
})

method = ""
router.delete('/:id', async (req, res) => {
    await Record.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

module.exports = router