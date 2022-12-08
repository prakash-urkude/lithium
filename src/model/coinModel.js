const mongoose = require("mongoose")
const coinSchema = new mongoose.Schema({
    symbol:{
        type: String,
        unique : true
},
    name: {
        type: String ,
        unique : true
},
    marketCapUsd:{
        type: String  
},
    priceUsd:{ 
        type: String
}}, { timestamp:true})

module.exports =  mongoose.model('coin', coinSchema)