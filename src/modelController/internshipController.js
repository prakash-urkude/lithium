const internshipModel = require("../models/internModel")
const CollegeModel = require("../models/collegeModel")
const Validation = require("../Validation/Validation")

const createIntern = async function (req, res) {
  try {
    const data = req.body
    const { name, mobile, email, collegeName } = data
    if (!name) {
      return res.status(400).send({ data: "Please enter Name" })
    }
    if (!Validation.isValidName(name)) {
      return res.status(400).send({ status: false, data: "Invalid Name" })
    }
    if (!mobile) {
      return res.status(400).send({ data: "Please enter Mobile Number" })
    }
    if (!Validation.isValidMobileNumber(mobile)) {
      return res.status(400).send({ status: false, data: "Invalid Mobile Number" })
    }
    if (mobile) {
      const validMobile = await internshipModel.findOne({ mobile: mobile })
      if (Validation.isValid(validMobile)) {
        return res.status(400).send({ data: "This Mobile Number is already register" })
      }
    }
    if (!email) {
      return res.status(400).send({ data: "Please enter email" })
    }
    if (!Validation.isValidEmail(email)) {
      return res.status(400).send({ status: false, data: "Invalid Email" })
    }
    if (email) {
      const validEmail = await internshipModel.findOne({ email: email })
      if (Validation.isValid(validEmail)) {
        return res.status(400).send({ data: "This Email is already register" })
      }
    }
    const college = await CollegeModel.findOne({ fullName: collegeName })
    if (college == null) {
      return res.status(400).send({ data: "there is no such college" })
    }
    const collegeId = college["_id"]
    const college1 = { name: name, mobile: mobile, email: email, collegeId: collegeId }
    const internShipData = await internshipModel.create(college1)
    res.send({ status: true, data: internShipData })
  }
  catch (err) {
    res.status(500).send({ status: false, msg: err })
  }
}
module.exports = { createIntern }