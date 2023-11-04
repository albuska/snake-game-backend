const { v4: uuidv4 } = require("uuid");
const db = require("../../db");
const { ctrlWrapper } = require("../../helpers");

const { PORT} = process.env;

const createGame = async (req, res) => {
console.log(process.env);
console.log(PORT);

  const { player_name} = req.body;

  console.log("player_name", player_name);

  const id = uuidv4(); 

  const { rows: newGame } = await db.query(`
  INSERT INTO games (id, player_name, score) 
  values ($1, $2, $3) 
  RETURNING id, player_name, score`,
    [id, player_name]
  );

  const { player_name: dbName } = newGame[0];
  
//   res.cookie('refreshToken', refresh_token, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true, secure: true });

  res.status(201).json({
    game: {
      player_name: dbName,
    },
  });
};

module.exports = {
  createGame: ctrlWrapper(createGame),
};