const jwt = require("jsonwebtoken");               //token implimented in multiple ways -one way is JSON WebToken, to use JsonWebPackage we use this line-1 library,through this library we are accessing JWT
const userModel = require("../models/userModel");

/*
  Read all the comments multiple times to understand why we are doing what we are doing in login api and getUserData api
*/

// Q.1
const createUser = async function (req, res) {

  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

//Q2.
const loginUser = async function (req, res) {
  let email = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: email, password: password });       //user exist krta h ki nhi check kr rhe h,if yes to login kara do and ek token bna ke bhej do responce me
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not correct",
    });

 
  let token = jwt.sign(                                                           //res me token bna ke bhejna h, jwt variable me hamne jsonwebtoken library daali thi jisme se sign function use kr rhe h
    {                                                                             //jwt ka sign function ka syntex ye bolta h ki imp data store karo, ye data user ko uniquely identify krtaa h
      userId: user._id.toString(),
      name: user.firstName +user.lastName ,                                           // string me change kr rhe and other data
      batch: "lithium",
      organisation: "FunctionUp",
    },
    "this-is-my-secret-key"                                   //secrate(2nd argument):- ye string kisi ke paas nhi hoti ,sirf server ke pas hoti h, jo token bnata h and uuse validate krta h & 3rd argument optional hote h(not mendatory)
  );                                                                              //to insbke res me hame ek token milega
  res.setHeader("x-auth-token", token);                                           // res ko header me set kr rhe h,and header ka "nam" bhi de rhe h and uska "token" bhi
  res.send({ status: true, token: token });                                       // res ko body me set kr rhe h   
};
//basically yaha hamne sirf token bnaya h, jo ki next login krte tk is id ke liye saved rhega


//Q.3_     here fetching user data 

const getUserData = async function (req, res) {                                   // header re validation karenge ki header me ye token h ki nhi, if to aage wali api me use validate karenge
  //let token = req.headers["x-auth-token"];
  
  //If no token is present in the request header return error. This means the user is not logged in.
  //if (!token) return res.send({ status: false, msg: "token must be present" });

  //console.log(token);
  
  // let decodedToken = jwt.verify(token, "this-is-my-secret-key");           // revalidate krne ke liye token and key de rhe h
  // if (!decodedToken)                                                                         //to previous token(which contains header, payload) and key use krke wapis token bna rhe h and check kr rhe h ki ,dono same h ki nhi
                                                                                               
  //   return res.send({ status: false, msg: "token is invalid" });                             //to authentication se check kr rhe h ki valid user to h but valid to h na
                                                                                               
  let userId = req.params.userId;                                                               //postman me user/krke user ki id bheje path param me jese bhejte h ,jisse user/:userid wali api hit huii and proces aage badha
  let userDetails = await userModel.findById({_id:userId});                                           //postman path param me jo id pass kiye the usko yaha store kiye AND find kiye ki essa kuch db me h ki nhi
  if (!userDetails)                                                                             // db me h to responce bhej diye
    return res.send({ status: false, msg: "No such user exists" });                             ////iat means issued at .

  res.send({ status: true, data: userDetails });
  // Note: Try to see what happens if we change the secret while decoding the token
};
//basically what we did here, that we pass the id from path param and token id from header , and path param se jo id aayi usse db me search kiye us chiz ko, mila to res me de diye,



// Q.4
const updateUser = async function (req, res) {
 

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: "updated", data: updatedUser });
};

// Q.5
const deleteUser = async function (req, res) {
 

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }
  let userData = req.body
  let deletedUser = await userModel.findOneAndDelete({ _id: userId }, userData);
  res.send({ status: "deleted", data: deletedUser });
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.loginUser = loginUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;