const express = require("express");
const { ctrlGames } = require("../../controllers");
const router = express.Router();

router.post("/games/createGames", ctrlGames.createGame) 

// router.get("/current", authenticate, ctrlUsers.getCurrent); 

module.exports = router;