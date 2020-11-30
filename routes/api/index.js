const router = require("express").Router();
const bookRoutes = require("./googleBooks");

// Book routes
router.use("/googleBooks", bookRoutes);

module.exports = router;