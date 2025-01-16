const express = require("express");
const router = express.Router();
const plaformController = require("../controllers/platformController");

router.get("/", plaformController.getAllPlatforms);
router.get("/:id", plaformController.getPlatformById);

module.exports = router;
