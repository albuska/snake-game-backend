CREATE TABLE users(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    token VARCHAR(255),
    balance NUMERIC(10, 2),
    start_balance NUMERIC(10, 2),
    is_verified BOOLEAN DEFAULT false,
    google_id VARCHAR(255) UNIQUE,
    refresh_token VARCHAR(255)
);