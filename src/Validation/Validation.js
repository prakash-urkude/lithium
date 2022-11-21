//__________________________ Import  ___________________________________________

const mongoose = require("mongoose");

//__________________________ Validations : Name ___________________________________________

const isValidName = function (name) {
  const fnameRegex = /^([a-zA-Z])+$/;
  return fnameRegex.test(name);
};

//__________________________ Validations : Email  ___________________________________________

const isValidEmail = function (email) {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[com]+)*$/;
  return emailRegex.test(email);
};

//__________________________ Validations : Password  ___________________________________________

const isValidLink = function (link) {
  const linkRegex =
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
  return linkRegex.test(link);
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
  isValidObjectId,
};