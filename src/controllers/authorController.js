const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let newAuthor = req.body
    let authorCreated = await AuthorModel.create(newAuthor)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData
