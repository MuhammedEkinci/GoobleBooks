const router = require("express").Router();
const booksController = require("../../controllers/googleBooksController");

//GET and POST for /api/books
router.route("/")
    .get(booksController.getAllBooks)
    .post(booksController.saveBook);

//Delete /api/books/:id 
router.route("/:id")
    .delete(booksController.deleteBook);

module.exports = router;