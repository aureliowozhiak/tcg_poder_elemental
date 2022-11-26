-- CREATE DECKS TABLE IN SQLITE

CREATE TABLE IF NOT EXISTS Decks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    deck_describe varchar(512),
    creatures_id varchar(512)
);

