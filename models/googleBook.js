const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//model for googleBooks Saved
const bookSchema = new Schema({
    authors: [
        {
            type: String
        }
    ],

    description: {
        type: String,
        required: true,
    },

    bookId: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String
    },
    link: {
        type: String
    },
    title: {
        type: String,
        required: true
    }
});

const SavedBook = mongoose.model("SavedBook", bookSchema);

module.exports = SavedBook;