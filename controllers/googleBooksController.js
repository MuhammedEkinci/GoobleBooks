const db = require("../models");

//methods for the googleBooksController
module.exports = {
    //retrieves all the saved books
    getAllBooks: function(req, res) {
        db.SavedBooks
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //saves the book to the database
    saveBook: function(req, res) {
        db.SavedBooks
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //deletes specific book from the database
    deleteBook: function(req, res) {
        db.SavedBooks
            .findById({_id: req.params.id}, req.body)
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};