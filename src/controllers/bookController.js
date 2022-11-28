const bookModel = require("../models/bookModel")

const getBooks = async function (req, res) {
    try {
        if (req.query) {
            let {}


        } else {
            const allBooks = await bookModel.find({ isDeleted: false })
            return res.status(200).send({ status: true, message: 'Success', data: allBooks })
        }


    }
}