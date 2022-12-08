const express = require("express")
const router = express.Router()
const userController = require("../controller/coinController")

router.get("/getCoin", userController.getCoins);

module.exports = router