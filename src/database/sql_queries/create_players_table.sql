-- CREATE PLAYERS TABLE IN SQLITE

CREATE TABLE IF NOT EXISTS Players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username varchar(255),
    deck_id INTEGER
);

