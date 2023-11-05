const express = require("express");
const { ctrlGames } = require("../../controllers");
const router = express.Router();

router.post("/createGame", ctrlGames.createGame) 

router.get("/bestPlayers", ctrlGames.listOfBestPlayers); 

// router.get("/current", authenticate, ctrlUsers.getCurrent); 

module.exports = router;