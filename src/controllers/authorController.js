const { count } = require("console")
const { isValidObjectId } = require("mongoose")
const authorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let data = req.body
    let authorId = data.author_id
    if(!authorId) return res.send({msg: 'AuthorId is mandatory in the request'})
    if(!isValidObjectId(userId)){
        return res.send("valid id is mendatory")
    }
    if(!isValidObjectId(productId)){
        return res.send("valid id is mendatory")
    }

    let savedData= await authorModel.create(data)
    res.send({data: savedData})
}

module.exports.createAuthor= createAuthor

