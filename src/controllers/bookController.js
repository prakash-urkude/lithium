const bookModel = require("../models/bookModel")
const Validation = require("../validators/validator")
const { isValidObjectId } = require("mongoose")


//__________________________ Post Api : Create Book  ___________________________________________

const createBook = async function (req, res) {

    try {
        const data = req.body
        if (Object.keys(data) == 0) return res.status(400).send({ status: false, message: "No input provided" });
        const { title, excerpt, userId, ISBN, category, subcategory } = data

        if (!userId) return res.status(400).send({ status: false, message: "Please enter userId" })
        if (!isValidObjectId(userId)) return res.status(404).send({ status: false, message: "user not found for this user Id" })
        if (userId != req.decodedToken.userId) return res.status(403).send({ status: false, msg: "you do not have authorization to this " });

        //  -------------------------------Title Validation-----------------------
        if (!title) return res.status(400).send({ status: false, message: "Please Enter Title" })
        if (!Validation.isValid(title)) return res.status(400).send({ status: false, message: "please inter valid title" })
        let findTitle = await bookModel.findOne({ title: title })
        if (findTitle) return res.status(400).send({ status: false, message: "Book allrady exist for this title " })


        //  -------------------------------SIBN Validation-----------------------
        if (!ISBN) return res.status(400).send({ status: false, message: "Please enter ISBN" })
        if (!Validation.isValidISBN(ISBN)) return res.status(400).send({ status: false, message: "please inter valid ISBN" })
        let sibnBook = await bookModel.findOne({ ISBN: ISBN })
        if (sibnBook) return res.status(400).send({ status: false, message: "Book allrady exist for this SIBN " })
        // -----------------------------------------

        if (!excerpt) return res.status(400).send({ status: false, message: "Please enter excerpt" })
        if (!Validation.isValid(excerpt)) return res.status(400).send({ status: false, message: "please inter valid excerpt" })


        if (!category) return res.status(400).send({ status: false, message: "Please enter category" })
        if (!Validation.isValid(category)) return res.status(400).send({ status: false, message: "please inter valid category" })


        if (!subcategory) return res.status(400).send({ status: false, message: "Please enter subcategory" })
        if (!Validation.isValid(subcategory)) return res.status(400).send({ status: false, message: "please inter valid subcategory" })


        data.releasedAt = new Date(Date.now())
        const bookData = await bookModel.create(data)
        res.status(201).send({ status: true, data: bookData })
    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}


const getBooks = async function (req, res) {
    try {
        if (req.query) {
            let { userId, category, subcategory } = req.query
            let obj = {}

            if (userId) {
                obj.userId = userId
            }
            if (category) {
                obj.category = category
            }
            if (subcategory) {
                obj.subcategory = subcategory
            }

            if (Object.keys.length == 0) return res.status(400).send({ status: false, message: "Invalide query params" })

            obj.isDeleted = false
            const bookDetals = await bookModel.find(obj).select({ title: 1, excerpt: 1, userId: 1, category: 1, subcategory: 1, reviews: 1, releasedAt: 1 })
            if (!bookDetals) {
                return res.status(404).send({ status: false, msg: "No book found for given data" })
            }
            else {
                bookDetals.sort(function (a, b) {
                    if (a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase) return -1
                    if (a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase) return 1
                    return 0
                })
                return res.status(200).send({ status: true, message: 'Success', data: bookDetals })
            }
        } else {
            const allBooks = await bookModel.find({ isDeleted: false })
            return res.status(200).send({ status: true, message: 'Success', data: allBooks })
        }

    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}




const updateBooks = async function (req, res) {
    try {
        const bookId = req.params.bookId
        const data = req.body
        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, message: "Add fields to update" });
        const { title, excerpt, releasedAt, ISBN } = req.body

        if (title) {
            if (!Validation.isValid(title)) return res.status(400).send({ status: false, message: "please inter valid title" })
            let findTitle = await bookModel.findOne({ title: title })
            if (findTitle) return res.status(400).send({ status: false, message: "Book allrady exist for this title " })
        }
        if (ISBN) {
            if (!Validation.isValidISBN(ISBN)) return res.status(400).send({ status: false, message: "please inter valid ISBN" })
            let sibnBook = await bookModel.findOne({ ISBN: ISBN })
            if (sibnBook) return res.status(400).send({ status: false, message: "Book allrady exist for this SIBN " })
        }
        
        let updatedData = await bookModel.findOneAndUpdate({ _id: bookId }, {
            $set: { title: title, excerpt: excerpt, releasedAt: releasedAt, ISBN: ISBN }
        }, { new: true, upsert: true })

        return res.status(200).send({ status: true, msg: "Book updated successfuly", data: updatedData })

    }
    catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }
}


//------------------Delete Blog by path param-----------------------/

const deleteBook = async (req, res) => {
    try {
        let Id = req.params.bookId
        const delatedbook = await bookModel.findOneAndUpdate({ _id: Id }, { $set: { isDeleted: true, deletedAt: new Date(Date.now()) }, }, { new: true });

        if (delatedbook) {
            return res.status(200).send({ status: true, msg: delatedbook })
        } else {
            res.status(404).send({ status: false, msg: "No Book found for this id" })
        }
    } catch (error) {
        return res.status(500).json({ status: false, error: error.message });
    }
};

module.exports = { createBook, getBooks, updateBooks, deleteBook }