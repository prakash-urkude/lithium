const internshipModel = require("../models/internModel")
const CollegeModel = require("../models/collegeModel")


const createIntern = async function(req ,res) 
{
    try
    {
      const data = req.body
      const  { name, mobile, email, collegeName} = data
      if(!name)
      {
        return res.send({ data : "Please enter each and every data"})
      }

      const  college = await CollegeModel.findOne({fullName : collegeName})
      const  collegeId = college["_id"]
      const  college1 = { name : name , mobile : mobile , email : email , collegeId : collegeId  }
      const  internShipData = await internshipModel.create(college1)
      res.send({ status : true , data : internShipData })
    }
    catch(err)
    {
        res.send({ status : false ,  msg  : err })
    }
}
module.exports = {createIntern }