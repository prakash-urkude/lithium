const userModel = require("../models/userModel")
const { isValidName, captilize, isValidEmail, isValidPhone, isVaildPass } = require("../validators/validator")

const createUser = async function (req, res) {
    try {
        const data = req.body
        const { title, name, phone, email, password } = data
        if (Object.keys(data).length == 0) return res.status(400).send("Body is empty")

        //************************ Name Validation*******************************/
        if (!name) return res.status(400).send("Name is required")
        if (!isValidName(name)) return res.status(400).send("Please provide a valid name")
        data.name = captilize(name)

        //****************************** Title Validation****************************/
        let titles = ["Mr", "Mrs", "Miss"]
        if (!title) return res.status(400).send("Title is required")
        if (!titles.includes(title)) return res.status(400).send({ status: false, msg: "Please provide the title in these options - Mr || Mrs || Miss" })

        //********************** Email Validation**************************/

        if (!email) return res.status(400).send("Email is required")
        if (!isValidEmail(email)) return res.status(400).send("Please provide a valid Email-Id")
        let uniqueEmail = await userModel.findOne({ email: email })
        if (uniqueEmail) return res.status(400).send({ status: false, message: "Email is already exist" })

        //********************************Password Validation************ */

        if (!password) return res.status(400).send("Password is required")
        if (!isVaildPass(password)) return res.status(400).send("Please provide a valid Password with min 8 char, Capatial & special char ")

        //*********************** Phone Validation****************************/

        if (!phone) return res.status(400).send("Phone is required")
        if (!isValidPhone(phone)) return res.status(400).send("Please provide a valid Phone Number")
        let uniquePhone = await userModel.findOne({ phone: phone })
        if (uniquePhone) return res.status(400).send({ status: false, message: "Phone is already exist" })

        let saveData = await userModel.create(data)
        return res.status(201).send({ status: true, msg: saveData })
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
}




const login = async function (req, res) {
    try {
        const email = req.body.email
        const password = req.body.password

        if (!isValidEmail(email)) { return res.status(400).send({ status: false, msg: "Email is not valid" }) }

        if (!isVaildPass(password)) { return res.status(400).send({ status: false, msg: "Password should contain min 8 char , 1 uppercase , 1 special char" }) }

        if (email && password) {
            const user = await userModel.findOne({ email: email, password: password })
            if (user) {
                const token = jwt.sign({ userID: user._id }, 'vrBest')
                res.setHeader("x-api-key", token);
                return res.status(200).send({ status: true, token: token })
            }
            else {
                return res.status(400).send({ status: false, msg: "invalid credentials" })
            }
        }
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.massage })
    }
}


module.exports.login = login

module.exports.createUser = createUser

