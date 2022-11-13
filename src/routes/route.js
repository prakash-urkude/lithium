const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

//Q.1
router.post("/cowin/getByDistrictIdAndDate", CowinController.getByDistrictIdAndDate)

// Q.2.a
router.get("/london/list", CowinController.london)

// Q.2.b
router.get("/weather", CowinController.weatherReport)

// Q.3.b
router.post("/meme", CowinController.meme)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;

