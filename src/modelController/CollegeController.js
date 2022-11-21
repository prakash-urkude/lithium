const CollegeModel = require("../models/collegeModel")
const internshipModel = require("../models/internModel")
const Validations = require("../Validation/Validation")

const createCollege = async function(req ,res) 
{
    try{
    const data = req.body
    const { name ,fullName ,logoLink } = data
    if(!name || !fullName)
    {
      return res.send({ data : "please enter the name or fullname"})
    }
    if(!Validations.isValidName(name))
    {
      return res.send({ data : "Invalid Name"})
    }
    if(!Validations.isValidLink(logoLink))
    {
      return res.send({ data : "Invalid Link"})
    }
    const  createCollege = await CollegeModel.create(data);
    return res.send({ status : true , data : createCollege })
    }
    catch(err)
    {
     return res.status(500).send({status : false , data : err })
    }
}

const Getcollegedate = async function(req,res)
{
    try
    {
      const collegeName = req.query.collegeName
      const collegeData = await CollegeModel.findOne({ name : collegeName})
      const collegeId = collegeData["_id"]
      const internData = await internshipModel.find({ collegeId : collegeId})
      const x = await CollegeModel.findOne({ name : collegeName})

      let data = {
        name : collegeData.name,
        fullName : collegeData.fullName,
        logoLink : collegeData.logoLink,
        interns  : internData
      }

      return res.send({ status : true , data  : x })
    }
    catch(err)
    {
     return res.send({ status : false , data : "error"})
    }
}
module.exports = {createCollege ,Getcollegedate }