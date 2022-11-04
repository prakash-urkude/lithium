const {isValidObjectId} = require('mongoose');
const OrderModel= require("../models/orderModel")
const ProductModel= require("../models/productModel")
const UserModel= require("../models/userModel")

//wrong:-
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
    const {productId,userId}= req.body
    const isFreeAppUser = req.isFreeAppUser

    //1st user id and product id aayi h ya nhi
    if(!productId || !userId){return 
        res.send({msg: 'userId & productId is mandatory'})
    }

    //jo id aayi user ki vo data base me check kr rhe h ki valid h ki nhi
    if (!isValidObjectId(userId)){
        return res.send({msg: "valid userid is mendatory"})
    }

    //jo id aayi product ki vo data base me check kr rhe h ki valid h ki nhi
    if(!isValidObjectId(productId)){
        return res.send({msg: "valid productid is mendatory"})
        
    }

    //
    
    savedData= await OrderModel.create(data)
    return res.send({data:savedData})
}










module.exports.createOrder= createOrder