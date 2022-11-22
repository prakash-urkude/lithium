//__________________________ Import or Require Module ___________________________________________

const express= require("express")
const router= express.Router()
const CollegeController = require("../modelController/CollegeController")
const internshipController = require("../modelController/internshipController")

//__________________________ post api : for Test ___________________________________________

router.post("/author", function(req,res){
    res.send({msg:"done"})
})

//__________________________ post api : Create College  ___________________________________________

router.post("/functionup/colleges", CollegeController.createCollege )

//__________________________ post api : Create Intern ___________________________________________

router.post("/functionup/interns", internshipController.createIntern)

//__________________________ Get api : Get College Data ___________________________________________

router.get("/functionup/collegeDetails", CollegeController.Getcollegedata )

module.exports= router