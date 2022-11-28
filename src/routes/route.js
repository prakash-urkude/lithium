const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const bookController = require("../controllers/bookController")
const middlewares = require("../middlewares/auth")

router.post("/register", userController.createUser);

router.post("/login", userController.login);

router.post("/books", bookController.createBook);

router.get("/books", bookController.getBooks);









module.exports = router

