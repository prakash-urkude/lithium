const { count } = require("console")
const productModel= require("../models/productModel")


//yaha product create kiye but pehle attributes ko validate kiye and ho gye to create kr do
const createProduct= async function (req, res) {
    const {name, category,price} = req.body            //attributes/fields ko destructure kr liye
    if(!name || !category || !price){
        return res.send("name,category, price are mendatory") 
    }
    let savedData= await productModel.create(name, category,price)
    res.send({data: savedData})
}

module.exports.createProduct= createProduct