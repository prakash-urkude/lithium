const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

// 1.
const createBook= async function (req, res) {
    let newbook = req.body
    let bookCreated = await bookModel.create(newbook)
    res.send({data: bookCreated})
}

// 2.
const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

// .3

// const createBook1= async function(req,res){
//     let {author,publisher}=req.body
//     if(!author){
//         res.send("authorId detail is required")
//     }

//     let authorData=await authorModel.findById({_id:author})       //authorId ko ek  key/variable me daale, then next line me check kr rhe h ki vo authorid   ni h to ye ms bhej do
//     if(!authorData){
//         res.send("authorId is not present")
//     }

//     if(!publisher){
//         res.send("publisherId detail is required")
//     }

//     let publisherData=await publisherModel.findById({_id:publisher})
//     if(!publisherData){
//         res.send("publisher is not avilable")
//     }
//     let book = res.body
//     let bookCreated=await bookModel.create(book)
//     res.send({data:bookCreated})
// }



// 4.
const getBooksWithAuthorAnadPublisherDetails = async function(req,res){
    let alldatabook = await bookModel.find().populate('publisher').populate('author')
    res.send({data:alldatabook})
}



const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
// module.exports.createBook1= createBook1
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.getBooksWithAuthorAnadPublisherDetails= getBooksWithAuthorAnadPublisherDetails