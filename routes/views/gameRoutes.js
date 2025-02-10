const express = require("express");
const router = express.Router();
const gameController = require("../../controllers/views/gameController");

router.get("/:id", gameController.renderHomePage);

module.exports = router;
