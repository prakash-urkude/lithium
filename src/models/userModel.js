const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
    balance: {
        type:Number,
        default:100},
        address:String,
        age: Number,
        gender: {
            type: String,
            enum: ["male", "female", "other"] //"falana" will give an error
        },
        isFreeAppUser:{
            type: Boolean,
            default: false
        },
    // mobile: {
    //     type: String,
    //     unique: true,
    //     required: true
    // },
    //emailId: String,
    // gender: {
    //     type: String,
    //     enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    // },
    
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('nov2assignUser', userSchema) //nov2users



// String, Number
// Boolean, Object/json, array