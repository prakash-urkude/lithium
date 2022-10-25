const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,                    // unique means ek nam ka do nhi hoga
        required: true                   // means mobl.no.required h,iske bina nhi chalega
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },                                     //enum means in given options/specific data me se ek hi de sakte h
    age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });         //automatic 2-key add krega createdAt and updateAt, yaha date aa jayega

module.exports = mongoose.model('User', userSchema) //users nam ka file bna dega mongodb compass me
// hamara ye file local h is file, to public kiye and then export kiye controller me 


// String, Number
// Boolean, Object/json, array
