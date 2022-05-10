const { type } = require('express/lib/response');
const mongoose =require('mongoose')

const recordSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Car_ID: String,
    Booking_ID: String,
    Collision_Data: {
        any: {  }
    },
    Invasion_Data: {
        any: {  }
    },
    GNSS_Data: {
        Array: {
            frame:{
                num1: Number,
                num2: Number
            }
        }
    }
})

module.exports = mongoose.model('Record',recordSchema);