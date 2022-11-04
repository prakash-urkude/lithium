const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    userId : {
        type: ObjectId,
        ref : "nov2assignUser"
    },
    productId:{
        type: ObjectId,
        ref : "nov2assignProduct"
    },

    amount: Number,
    isFreeAppUser: Boolean,
    Date: Date

}, { timestamps: true });

module.exports = mongoose.model('nov2assignOrder', orderSchema)
