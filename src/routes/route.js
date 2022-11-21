const express= require("express")
const router= express.Router()
const CollegeController = require("../modelController/CollegeController")
const internshipController = require("../modelController/internshipController")


router.post("/author", function(req,res){
    res.send({msg:"done"})
})

router.post("/functionup/colleges", CollegeController.createCollege )

router.post("/functionup/interns", internshipController.createIntern)

router.get("/functionup/collegeDetails", CollegeController.Getcollegedate )

module.exports= router