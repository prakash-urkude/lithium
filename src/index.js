const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const route = require('./route/route.js');
const app = express();


app.use(bodyParser.json());

mongoose.connect("mongodb+srv://prakashurkude:prakash1998@cluster0.nuhssqs.mongodb.net/Bitcoin"
    , { useNewUrlParser: true })
    .then(() => console.log('mongodb is connected'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});