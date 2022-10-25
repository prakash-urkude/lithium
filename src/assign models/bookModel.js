const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    category: String,
    year: Number,


}, { timestamps: true });         //automatic 2-key add krega createdAt and updateAt, yaha date aa jayega

module.exports = mongoose.model('Book', bookSchema) //books nam ka file bna dega mongodb compass me
// hamara ye file local h is file, to public kiye and then export kiye controller me 


// String, Number
// Boolean, Object/json, array
