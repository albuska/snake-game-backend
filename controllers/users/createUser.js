const { v4: uuidv4 } = require("uuid");
const db = require("../../db");
const { ctrlWrapper } = require("../../helpers");

const { PORT} = process.env;

const createUser = async (req, res) => {
console.log(process.env);
console.log(PORT);

  const { name} = req.body;

  const id = uuidv4(); 

  const { rows: newUser } = await db.query(`
  INSERT INTO users (id, name) 
  values ($1, $2) 
  RETURNING id, name`,
    [id, name]
  );

  const { name: dbName } = newUser[0];
  
//   res.cookie('refreshToken', refresh_token, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true, secure: true });

  res.status(201).json({
    user: {
      name: dbName,
    },
  });
};

module.exports = {
  createUser: ctrlWrapper(createUser),
};