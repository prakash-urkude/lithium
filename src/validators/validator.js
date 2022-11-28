const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0;
}
const isValid = function (value) {
    if (typeof value === 'undefined') return false;
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}

const isValidName = function (abc) {
    if (typeof abc === 'undefined') return false;
    if (typeof abc != 'string' && abc.trim().length === 0) return false
    const regex = /^[a-z/\s/A-Z]{2,30}$/;
    return regex.test(String(abc));
}

const checkPassword = function (str) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{7,15}$/;
    return re.test(str);
}

const isValidNumber = function (num) {
    const reg = /^[0-9]{10}$/;
    return reg.test(String(num));
}

const isValidPincode = function (num) {
    const reg = /^[0-9]{6}$/;
    return reg.test(String(num));
}

const isValidISBN = function (num) {
    const reg = /^[0-9]{10,13}$/;
    return reg.test(String(num));
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

module.exports = { isValid, isValidEmail, isValidRequestBody, isValidName, isValidNumber, isValidPincode, isValidISBN, checkPassword }
