const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Library');
//mongoose.connect(`mongodb+srv://dinusha:${process.env.MONGO_PASS}@cluster0.apqzh.mongodb.net/Library?retryWrites=true&w=majority`);
mongoose.connect(`mongodb+srv://dinusha:dinusha12345@cluster0.apqzh.mongodb.net/Library?retryWrites=true&w=majority`);
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;