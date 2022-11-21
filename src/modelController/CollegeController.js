const CollegeModel = require("../models/collegeModel")
const internshipModel = require("../models/internModel")
const Validations = require("../Validation/Validation")

const createCollege = async function (req, res) {
  try {
    const data = req.body
    const { name, fullName, logoLink } = data
    if (!name) {
      return res.status(400).send({ status: false, data: "please enter the name" })
    }
    if (name) {
      const NameValidation = await CollegeModel.findOne({ name : name })
      console.log(NameValidation)
      if (Validations.isValid(NameValidation)) {
        return res.status(400).send({ status: false, data: "this name is already register" })
      }
    }
    if (!Validations.isValidName(name)) {
      return res.status(400).send({ status: false, data: "Invalid Name" })
    }
    if (!fullName) {
      return res.status(400).send({ status: false, data: "please enter the fullName" })
    }
    if (fullName) {
      const fullNameValidation = await CollegeModel.findOne({ fullName: fullName })
      if (Validations.isValid(fullNameValidation)) {
        return res.status(400).send({ status: false, data: "this college is already register" })
      }
    }
    if (!Validations.isValidLink(logoLink)) {
      return res.status(400).send({ status: false, data: "Invalid Link" })
    }
    if (data.isDeleted == true) {
      return res.status(400).send({ status: false, data: "this data is already deleted" })
    }
    const createCollege = await CollegeModel.create(data);
    return res.status(201).send({ status: true, data: createCollege })
  }
  catch (err) {
    return res.status(500).send({ status: false, data: err })
  }
}

const Getcollegedate = async function (req, res) {
  try {
    const collegeName = req.query.collegeName
    if (!collegeName) {
      return res.status(400).send({ status: false, data: "please enter college Name" })

    }
    if (collegeName) {
      const isValidName = await CollegeModel.findOne({ name: collegeName })
      if (isValidName == null) {
        return res.status(400).send({ status: false, data: "Invalid college name" })

      }
    }
    const collegeData = await CollegeModel.findOne({ name: collegeName })
    if (collegeData.isDeleted == true) {
      return res.status(400).send({ status: false, data: "this college data is deleted" })
    }
    const collegeId = collegeData["_id"]
    const internData = await internshipModel.find({ collegeId: collegeId })
    if (internData.length == 0) {
      return res.status(400).send({ status: false, data: "there is no intern from this college" })
    }
    let data = {
      name: collegeData.name,
      fullName: collegeData.fullName,
      logoLink: collegeData.logoLink,
      interns: internData
    }

    return res.status(200).send({ status: true, data: data })
  }
  catch (err) {
    return res.send({ status: false, data: "error" })
  }
}
module.exports = { createCollege, Getcollegedate }