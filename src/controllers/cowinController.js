let axios = require("axios");
const { stack } = require("../routes/route");

//class 1st api:-
let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


//class 2nd api:-
let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


// class 3rd api:-
let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


// class 4th api:-
let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


//Q:-1
let getByDistrictIdAndDate = async function (req, res) {
    
        let district_id = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${district_id} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
        }
        let result = await axios(options)
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: result.data })

}

//Q:-2.a
const london = async function (req, res) {
        
        const city = req.query.city
       // console.log(`body is : ${city} `)
        const options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=50efadfc090ed461301d8a1d46cc15f5`
           // data: city
        }
        const result = await axios(options)
        //console.log(result.data)
        res.status(200).send({ data: result.data })
}

// Q.2.b
const weatherReport = async function (req, res) {
        
    const cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    const report = []
    
    for (let i =0;i<cities.length;i++){
        const city = cities[i]
         const options = {
         method: "get",
         url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=50efadfc090ed461301d8a1d46cc15f5`
       
     }
    let result = await axios(options)
    temp = result.data.main.temp
    data = {city : city, temp: temp}
    report.push(data)

}
    sortedData =  report.sort(function(s1,s2){return s1.temp-s2.temp})
console.log(sortedData)
res.status(200).send({ temp: sortedData })
}


// Q3.
const meme = async function (req,res){
    
    try{
    const template_id = req.query.template_id
    const text0 = req.query.text0
    const text1 = req.query.text1
    const username = req.query.username
    const password = req.query.password

    const options = {
        method : "post",
        url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
    }
    const result = await axios (options)
    //console.log(result)
    res.status(200).send({data:result.data})
}
catch(err){
    console.log(err)
    res.status(500).send({msg:err.message})
}}






module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getByDistrictIdAndDate = getByDistrictIdAndDate
module.exports.london = london
module.exports.weatherReport = weatherReport
module.exports.meme = meme