const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createPublisher", publisherController.createPublisher  )   //publisherController me PublisherModel require kiye and createPublisher ko export kiye route.js me and in sab ka route/endpoint h "/createPublisher"

// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

//Q1
router.post("/createBook", bookController.createBook  )
// Q2
router.post("/getBooksData", bookController.getBooksData  )
// Q3
router.post("/createBooks", bookController.createBooks )
// Q4
router.get("/getBooksWithAuthorAnadPublisherDetails", bookController.getBooksWithAuthorAnadPublisherDetails)
// Q5.a
router.put("/update", bookController.update )
// Q5.b
router.put("/attribute", bookController.attribute )

// router.post("/createBook1", bookController.createBook1  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)




module.exports = router;