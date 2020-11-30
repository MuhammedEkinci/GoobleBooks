const router = require("express").Router();
const bookRoutes = require("./google-books");

// Book routes
router.use("/Books", bookRoutes);

module.exports = router;