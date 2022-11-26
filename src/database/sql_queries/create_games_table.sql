-- CREATE GAMES TABLE IN SQLITE

CREATE TABLE IF NOT EXISTS Games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    uuid varchar(512),
    is_running boolean,
    player_side_a_id int,
    player_side_b_id int,
    current_field varchar(1024)
);

