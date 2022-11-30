const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const bookController = require("../controllers/bookController")
const reviewController = require("../controllers/reviewController")
const middlewares = require("../middlewares/auth")

router.post("/register", userController.createUser);

router.post("/login", userController.login);

router.post("/books", bookController.createBook);

router.get("/books", middlewares.authentication, bookController.getBooks);

router.put("/books/:bookId", middlewares.authentication, middlewares.authorisation, bookController.updateBooks);

router.delete('/books/:bookId', middlewares.authentication, middlewares.authorisation, bookController.deleteBook)

router.get("/books/:bookId", middlewares.authentication, bookController.getBookbyParam);

router.post("/books/:bookId/review", reviewController.creatReview);

module.exports = router

