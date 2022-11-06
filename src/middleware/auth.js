const jwt =require("jsonwebtoken")


//authentication:-
const authenticate = function(req,res,next){

//    Check that request must contain **x-auth-token** header. If absent, return a suitable error.

    let token =req.headers["x-auth-token"];

    if(!token){
    res.send({status:false,msg:"token must be present"})}

//If present, check that the token is valid.

    
    let decodedToken = jwt.verify(token,"this-is-my-secret-key")                                          //yaha wapis se secrat ka use krke key bnate h,and check krte h ki dono same h ki nhi,so after login everytime we are giving token in header and varfying that token every time when we needed


    if(!decodedToken){
    res.send({status: false,msg:"valid token needed"})}

    next()
}

//Authorization:-
const authorise = function(req,res,next){
    let userid = req.params.userId
    let token = req.headers["x-auth-token"]
    let decodedToken= jwt.verify(token,"this-is-my-secret-key")
    let userlogin = decodedToken.userId

    if(userid != userlogin)return res.send({status:false,msg:"user is not authorised"})
    next()
}




module.exports.authenticate=authenticate
module.exports.authorise =authorise