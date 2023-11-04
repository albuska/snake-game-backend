CREATE TABLE games (
  id SERIAL PRIMARY KEY,
  player_name VARCHAR(255) NOT NULL,
  score INT NOT NULL,
  game_data JSONB
);