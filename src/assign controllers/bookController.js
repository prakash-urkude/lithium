const BookModel= require("../assign models/bookModel")         //is page ko bookModel folder se joda through this path
                                                               // pehle route.js page api daal ke ussi me route and function likh dete the but now hamne pages bat diye h, and yaha bs function likh and path de diya route.js page ka
const createBook= async function (req, res) {                  //yaha hmnecrete book nam diya hamare function ko taki ham sara data store kr sake
    let data= req.body                             //post man json model se body manga/req.kr rhe h and book bna de rhe h
    let savedData= await BookModel.create(data)    //manga ke bookmodel de daal rhe so that anyone can create a book and isko nam diye savedata
    res.send({msg: savedData})                     //vo new book post man me bnai use wapis post man terminal me show karaga
}

const getBooksData= async function (req, res) {      //now hame kisi book ko khojna h to uske liye function bnaya
    let allBooks= await BookModel.find({authorName : "mgBest"})            //get krne se saarebook jo database/mongo compass me hamne add/create kiye , through find kuch perticular book ka bhi de sakte h
    res.send({msg: allBooks})                       //then wapis post man terminal me show karaga
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData