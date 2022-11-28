//______________________ Import or Require Modules ________________________________
const bookModel = require("../models/bookModel")
const Validation = require("../validators/validator")
//__________________________ Post Api : Create Book  ___________________________________________


const createBook = async function (req, res) {

    try {
        const data = req.body
        if (Object.keys(data) == 0) {
            return res
                .status(400)
                .send({ status: false, message: "No input provided" });
        }
        const { title, excerpt, userId, ISBN, category, subcategory, reviews, releasedAt } = data
        if (!title) return res.status(400).send({ status: false, message: "Please Enter Title" })
        if (!Validation.isValid(title)) return res.status(400).send({ status: false, message: "please inter valid title" })
        
        if (!excerpt) return res.status(400).send({ status: false, message: "Please enter excerpt" })
        if (!Validation.isValid(excerpt)) return res.status(400).send({ status: false, message: "please inter valid excerpt" })

        if (!userId) return res.status(400).send({ status: false, message: "Please enter userId" })

        if (!ISBN) return res.status(400).send({ status: false, message: "Please enter ISBN" })
        if (!Validation.isValidISBN(ISBN)) return res.status(400).send({ status: false, message: "please inter valid ISBN" })

        if (!category) return res.status(400).send({ status: false, message: "Please enter category" })
        if (!Validation.isValid(category)) return res.status(400).send({ status: false, message: "please inter valid category" })
        
        if (!subcategory) return res.status(400).send({ status: false, message: "Please enter subcategory" })
        if (!Validation.isValid(subcategory)) return res.status(400).send({ status: false, message: "please inter valid subcategory" })
        
        if (!reviews) return res.status(400).send({ status: false, message: "Please enter reviews" })
        if (![1,2,3,4,5].includes(reviews)) return res.status(400).send({ status: false, message: "Invalid review number" })

        if (!releasedAt) {
            return res.status(400).send({ status: false, message: "Please enter releasedAt" })
        }

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
            const bookDetals = await bookModel.find(obj).select({ title: 1, excerpt: 1, userId: 1, category: 1, reviews: 1, releasedAt: 1 })
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

module.exports = { createBook,getBooks }