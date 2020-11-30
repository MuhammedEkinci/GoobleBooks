const router = require("express").Router();
const booksController = require("../../controllers/googleBooksController");

//GET and POST for /api/Books
router.route("/")
    .get(booksController.getAllBooks)
    .post(booksController.saveBook);

//Delete /api/Books/:id 
router.route("/:id")
    .delete(booksController.deleteBook);

module.exports = router;