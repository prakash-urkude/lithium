const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const bookController = require("../controllers/bookController")
const middlewares = require("../middlewares/auth")

router.post("/register", userController.createUser);

router.post("/login", userController.login);

router.post("/books", middlewares.authentication, bookController.createBook);

router.get("/books", middlewares.authentication, bookController.getBooks);

router.put("/books/:bookId", middlewares.authentication, middlewares.authorisation, bookController.updateBooks);

router.delete('/books/:bookId', middlewares.authentication, middlewares.authorisation, bookController.deleteBook)

router.get("/books/:bookId",middlewares.authentication ,bookController.getBookbyParam);

module.exports = router

