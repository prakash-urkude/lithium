const { isValidObjectId } = require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

// 1.
const createBook= async function (req, res) {
    let newbook = req.body
    let bookCreated = await bookModel.create(newbook)
    res.send({data: bookCreated})
}

// // 2.
const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

// // .3
const createBooks= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher
        if (authorId) {
        if(!publisherId) res.send({msg : "publisher  id is needed" })
    }
    else  res.send({msg : " author  id is needed" })
    
   let bookCreated = await bookModel.create(book)
   res.send({msg : bookCreated})
}


//     let publisherData=await publisherModel.findById({_id:publisher})
//     if(!publisherData){
//         res.send("publisher is not avilable")
//     }
//     let book = res.body
//     let bookCreated=await bookModel.create(book)
//     res.send({data:bookCreated})
// }



//4.
const getBooksWithAuthorAnadPublisherDetails = async function(req,res){
    let alldatabook = await bookModel.find().populate('publisher').populate('author')
    res.send({data:alldatabook})
}


// 5.a
const attribute= async function(req, res){
    let a=await publisherModel.find({publishername:["Penguin","HarperCollins"]}).select({_id:1});
    let b=await bookModel.find({publishername:a}).select({_id:1});
    for (let index = 0; index < b.length; index++) {
        const element = attribute[index];
        let updatedfile=await bookModel.findByIdAndUpdate(element,{$set:{isHardCover:true}})

        console.log(updatedfile)
    }
    res.send({status:updated,msg:updatedfile})
}

//5.b
const update=async function(req, res){

    let key = await authorModel.find({ rating:{$gt:3.5}}).select({_id:1});
    let books=await bookModel.find({author:key}).select({_id:1})
    for (let index = 0; index < books.length; index++) {
        const element = books[index];
        let update= await bookModel.findByIdAndUpdate(element,{$inc:{price:10}}, {new:true})
        console.log(update)
    }
    res.send("Check the console")
}


// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }


module.exports.createBook= createBook
module.exports.createBooks= createBooks
module.exports.attribute= attribute
module.exports.update= update
 module.exports.getBooksData= getBooksData
// // module.exports.createBook1= createBook1
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
 module.exports.getBooksWithAuthorAnadPublisherDetails= getBooksWithAuthorAnadPublisherDetails