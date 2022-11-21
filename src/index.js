const express = require("express")
const bodyParser = require("body-parser")
const route = require("./routes/route")
const { default: mongoose } = require("mongoose")
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://aliabbasbackendcohort:AMMIabbu321@cluster67.6fp98uh.mongodb.net/database3?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then(() => console.log("mongoDb is now working"))
.catch(err => console.log(err))

app.use("/",route);

app.listen(process.env.PORT || 3000, function(){
    console.log("express app running on port" + (process.env.PORT || 3000))
})