const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createPublisher", publisherController.createPublisher  )   //publisherController me PublisherModel require kiye and createPublisher ko export kiye route.js me and in sab ka route/endpoint h "/createPublisher"

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

// router.post("/createBook1", bookController.createBook1  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.get("/getBooksWithAuthorAnadPublisherDetails", bookController.getBooksWithAuthorAnadPublisherDetails)


module.exports = router;