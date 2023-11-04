const { v4: uuidv4 } = require("uuid");
const db = require("../../db");
const { ctrlWrapper } = require("../../helpers");

const createGame = async (req, res) => {

    const { player_name } = req.body;

    if (!player_name || player_name.trim() === "") {
      return res.status(400).json({ error: "Неправильне ім'я гравця" });
    }

  console.log("player_name", player_name);

  const id = uuidv4(); 

  const { rows: newGame } = await db.query(`
  INSERT INTO games (id, player_name, score) 
  values ($1, $2, $3) 
  RETURNING id, player_name, score`,
    [id, player_name, 0]
  );

  if (newGame.length === 0) {
    throw new Error("Не вдалося створити гру.");
  }

  console.log("newGame", newGame);

  const { player_name: dbName, score } = newGame[0];

  console.log("dbName", dbName);
  
  res.status(201).json({
    game: {
      id,
      player_name: dbName,
      score
    },
  });
};

module.exports = {
  createGame: ctrlWrapper(createGame),
};