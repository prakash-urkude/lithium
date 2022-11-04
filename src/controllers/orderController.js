const {isValidObjectId} = require('mongoose');
const OrderModel= require("../models/orderModel")
const ProductModel= require("../models/productModel")
const UserModel= require("../models/userModel")

// const createOrder= async function (req, res) {
//     let data = req.body
//     let userid = await data.userId
//     let productid = await data.productId
//     let user =  await Usermodel.findOne({userId:{$eq:userid}})
//     let product = await ProductModel.findOne({productId:{$eq:productid}})
//     if(userid==user && productid==product){   
//     let savedData= await OrderModel.create(data)
//     console.log(product)
//     res.send({data: savedData})
// }else{res.send({msg:"data not match"})}}



const createOrder=async function(req,res){
    let data= req.body
    let {userId,productId} = data
    if(!userId && !productId)return res.send({msg: 'userId & productId is mandatory'})
    if (!isValidObjectId(userId)){
        return res.send("valid id is mendatory")
    }
    if(!isValidObjectId(productId)){
        return res.send("valid id is mendatory")
        
    }
    if(userId && productId)
    savedData= await OrderModel.create(data)
    return res.send({data:savedData})
}










module.exports.createOrder= createOrder