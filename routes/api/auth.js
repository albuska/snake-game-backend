const express = require("express");
const { ctrlUsers } = require("../../controllers");
const router = express.Router();

router.post("/auth/createUser", ctrlUsers.createUser) 

// router.get("/current", authenticate, ctrlUsers.getCurrent); 

module.exports = router;