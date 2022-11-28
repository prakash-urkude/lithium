const bookModel = require("../models/bookModel")

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

module.exports = { getBooks }