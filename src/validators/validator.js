

const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false;
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}

const isValidName = function (str) {
    let nameRegex = /^([a-zA-Z'-.]+(?: [a-zA-Z'-.]+)?)$/
    if (typeof str === "undefined" || str === null) return false;
    if (typeof str === "string" && str.trim().length === 0) return false;
    if (nameRegex.test(str)) return true;
}

const isVaildPass = function (str) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{7,15}$/;
    return re.test(str);
}

const isValidPhone = function (num) {
    const reg = /^[0-9]{10}$/;
    return reg.test(String(num));
}

const captilize = function (str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
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


module.exports = { isValid, isValidEmail, isValidName, captilize, isValidPhone, isValidPincode, isValidISBN, isVaildPass }
