const express = require("express");
const router = express.Router();
const gameController = require("../../controllers/views/gameController");

router.get("/", gameController.renderHomePage);

module.exports = router;
