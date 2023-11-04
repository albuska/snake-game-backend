const express = require("express");
const { ctrlGames } = require("../../controllers");
const router = express.Router();

router.post("/games/createGame", ctrlGames.createGame) 

// router.get("/current", authenticate, ctrlUsers.getCurrent); 

module.exports = router;