const express = require("express");
const router = express.Router();
const similarController = require("../controllers/similarController");

router.get("/", similarController.getAllSimilarGames);
router.get("/:id", similarController.getSimilarByGameId);

module.exports = router;
