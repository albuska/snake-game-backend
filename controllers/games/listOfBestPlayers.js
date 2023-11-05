const db = require("../../db");
const { ctrlWrapper } = require("../../helpers");

const listOfBestPlayers = (req, res) => {
  const list =db.query(
    `SELECT player_name, score FROM games ORDER BY score DESC`
  )  

  console.log("list", list);

  res.status(200).json({ list });
}

module.exports = {
    listOfBestPlayers: ctrlWrapper(listOfBestPlayers),
  };