//__________________________ Import  ___________________________________________

const mongoose = require("mongoose");
//__________________________ Validations : Shortname ___________________________________________

const isValidShortname = function (name) {
  const fnameShortRegex = /^[a-z]*$/;
  return fnameShortRegex.test(name);
};

//__________________________ Validations : Name ___________________________________________

const isValidName = function (name) {
  const fnameRegex = /^[a-zA-Z][a-zA-Z ]*$/;
  return fnameRegex.test(name);
};
//__________________________ Validations : FullName ___________________________________________

const isValidFullName = function (name) {
  const fnameRegex = /^[a-zA-Z][a-zA-Z ]*$/
  ;
  return fnameRegex.test(name);
};

//__________________________ Validations : Email  ___________________________________________

const isValidEmail = function (email) {
  const emailRegex =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[com]+)*$/;
  return emailRegex.test(email);
};

//__________________________ Validations : Link  ___________________________________________

const isValidLink = function (link) {
  const linkRegex =/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
  return linkRegex.test(link);
};
//__________________________ Validations : MobileNumber  ___________________________________________

const isValidMobileNumber = function (mobile) {
  const MobileNumberRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  return MobileNumberRegex.test(mobile);
};
//__________________________ Validations : Values ___________________________________________

const isValid = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value == "string" && value.trim().length === 0) return false;
  return true;
};

//__________________________ Validations :  ObjectId ___________________________________________

const isValidObjectId = function (objectId) {
  return mongoose.Types.ObjectId.isValid(objectId);
};

//__________________________ Export : Modules  ___________________________________________

module.exports = {
  isValid,
  isValidEmail,
  isValidName,
  isValidLink,
  isValidMobileNumber,
  isValidObjectId,
  isValidShortname,
  isValidFullName
};