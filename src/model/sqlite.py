import sqlite3
con = sqlite3.connect("cards.db")

con.execute(open("../sql_queries/create_creatures_table.sql", "r"))

con.close()