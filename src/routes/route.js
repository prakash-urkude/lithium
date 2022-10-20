// const express = require('express');
// const router = express.Router();

// router.get('/students/:name', function(req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })

// router.get("/random" , function(req, res) {
//     res.send("hi there")
// })


// router.get("/test-api" , function(req, res) {
//     res.send("hi FunctionUp")
// })


// router.get("/test-api-2" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API")
// })


// router.get("/test-api-3" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
// })


// router.get("/test-api-4" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })



// router.get("/test-api-5" , function(req, res) {
//     res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })

// router.get("/test-api-6" , function(req, res) {
//     res.send({a:56, b: 45})
// })

// router.post("/test-post", function(req, res) {
//     res.send([ 23, 45 , 6])
// })


// router.post("/test-post-2", function(req, res) {
//     res.send(  { msg: "hi" , status: true }  )
// })

// router.post("/test-post-3", function(req, res) {
//     // let id = req.body.user
//     // let pwd= req.body.password

//     // console.log( id , pwd)

//     console.log( req.body )

//     res.send(  { msg: "hi" , status: true }  )
// })



// router.post("/test-post-4", function(req, res) {
//     let arr= [ 12, "functionup"]
//     let ele= req.body.element
//     arr.push(ele)
//     res.send(  { msg: arr , status: true }  )
// })

const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { result } = require('underscore');

const router = express.Router();

// router.get('/test-me', function (req, res) {
//     myHelper.printDate()
//     myHelper.getCurrentMonth()
//     myHelper.getCohortData()
//     let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
//     console.log('The first element received from underscope function is '+firstElement)
//     res.send('My first ever api!')
// });

// router.get("/movies/:indexNumber/:serialNumber", function(req, res){
//     const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
//     console.log(req.params.indexNumber)
//     let movieIndex = req.params.indexNumber
//     //check index value. less than 0 or greater than array (length - 1) are not valid
//     if(movieIndex<0 || movieIndex>=movies.length) {
//         //if the index is invalid send an error message
//         return res.send('The index value is not correct, Please check the it')
//     }

//     //if the index was valid send the movie at that index in response
//     let requiredMovie = movies[movieIndex]
//     res.send(requiredMovie)
// })

// router.get("/shoes", function(req, res){
//     let queryParams = req.query
//     let brand = queryParams.brand
//     let discount = queryParams.discount
//     let color = queryParams.color
//     console.log('The brand selected is ', brand)
//     console.log('The discount option selected is ', discount)
//     console.log('The color selected is ', color)
//     res.send("dummy response")
// })

// // uses query params
// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// })

// // use path param
// router.get('/candidates/:canidatesName', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Candidates name is '+req.params.canidatesName)
//     res.send('Done')
// })

// router.get("/films", function(req, res){
//     const films = [ {
//         "id": 1,
//         "name": "The Shining"
//        }, {
//         "id": 2,
//         "name": "Incendies"
//        }, {
//         "id": 3,
//         "name": "Rang de Basanti"
//        }, {
//         "id": 4,
//         "name": "Finding Nemo"
//        }]
//        //send all the films
//       res.send(films) 
// })

// router.get("/films/:filmId", function(req, res){
//     const films = [ {
//         "id": 1,
//         "name": "The Shining"
//        }, {
//         "id": 2,
//         "name": "Incendies"
//        }, {
//         "id": 3,
//         "name": "Rang de Basanti"
//        }, {
//         "id": 4,
//         "name": "Finding Nemo"
//        }]

//        let filmId = req.params.filmId

//        //iterate all the films
//        //search for a film whose id matches with the id recevied in request
//        for(let i = 0; i < films.length; i++){
//            let film = films[i]
//            if(film.id == filmId) {
//                //if there is a match return the response from here
//                return res.send(film)
//            }
//        }

//        //if there is no match give an error response
//        res.send("The film id doesn't match any movie")
// })


//----------------------------------------------------------------19th oct-----------------------------------------------------------------------//


// const movie =[
//     {id1,name:"got"},
//     {id2,name:"iron man"}]
// router.post('/create-movie', function(req,res){
//     const body = req.body
// })

// -------------------------Assignment Submission Link for Consecutive Numbers 1-------------------------------//


// router.get("/sol1", function (req, res) {
// let arr= [1,2,3,5,6,7];
// let missingNumber = 0;
// for (let i=0; i< arr.length;i++){
//     if (arr[i]+1 !== arr[i+1]){          //index ke numbers ek se badh rhe h means next index me ja rha h, to jb next index is not equal to index +1 to vo no. missing h         
//         missingNumber = arr[i] +1;
//         break;
//     }
// }console.log(missingNumber)
// res.send('the missing no. is');
// });


// -------------------------Assignment Submission Link for Consecutive Numbers 2---------------------------------//


// let arr= [33, 34, 35, 37, 38];
// router.get("/sol2", function (req, res) {

// let missingNumber = 0;
// for (let i=0; i< arr.length;i++){
//     if (arr[i]+1 !== arr[i+1]){          //index ke numbers ek se badh rhe h means next index me ja rha h, to jb next index is not equal to index +1 to vo no. missing h         
//         missingNumber = arr[i] +1;
//         break;
//     }
// }console.log(missingNumber)
// res.send('the missing no. is');
// });




// -------------------------Assignment- post request - player and booking-----------------------------//


// let players=

// [
//     {
//         "name": "manish",
//         "dob": "1/1/1995",
//         "gender": "male",
//         "city": "jalandhar",
//         "sports": [
//         "swimming"
//         ]
//     },
//     {
//         "name": "gopal",
//         "dob": "1/1/1995",
//         "gender": "male",
//         "city": "delhi",
//         "sports": [
//         "soccer"
//         ]
//     },
//     {
//         "name": "lokesh",
//         "dob": "1/1/1990",
//         "gender": "male",
//         "city": "mumbai",
//         "sports": [
//         "soccer"
//         ]
//     },          
          
// ]


// router.post('/playersName', function(req, res){
//     newPlayer=req.body                     // postman request body me name check kr rhe h ,and usko nam de diye
//     console.log(req.body)                  //req.body se ham koii bhi value jo postman body me h ,use yaha lasakte h           
//     for (let i=0; i<players.length;i++){
//         let a = players[i]
//         if (a.name==newPlayer.name){
//             res.send("player is already existing in our data")
//         }else{
//             players.push(newPlayer)
//             res.send({data:players,status:true})  //ye data hame postman terminal me mileega
//         }
//     }                      // ye vscode me requested new player id dikhayega
// })






















module.exports = router;
// adding this comment for no reason











