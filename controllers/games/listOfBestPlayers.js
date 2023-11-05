const db = require("../../db");
const { ctrlWrapper } = require("../../helpers");

const listOfBestPlayers = async (_, res) => {
  const {rows: players} = await db.query(
    `SELECT player_name, score FROM games ORDER BY score DESC LIMIT 5`
  )  

  res.status(200).json({ players });
}

module.exports = {
    listOfBestPlayers: ctrlWrapper(listOfBestPlayers),
  };