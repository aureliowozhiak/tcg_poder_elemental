-- CREATE CREATURES TABLE IN SQLITE

CREATE TABLE IF NOT EXISTS Creatures (
    name varchar(255),
    element varchar(255),
    level varchar(255),
    type varchar(255),
    describe varchar(255),
    hability varchar(255),
    strength int,
    resistance int
);
