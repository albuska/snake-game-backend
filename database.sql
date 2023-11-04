CREATE TABLE users(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    games NUMERIC(10, 2),
    -- google_id VARCHAR(255) UNIQUE,
);