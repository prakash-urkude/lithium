const express= require("express")
const router= express.Router()


router.post("/author", function(req,res){
    res.send({msg:"done"})
})

module.exports= router