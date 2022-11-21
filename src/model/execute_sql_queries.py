import sqlite3

class ExcuteSqlQueries:

    def __init__(self) -> None:
        pass
    
    def execute_sql_query(self, sql_file):

        result_rows = []

        con = sqlite3.connect("src/database/cards.db")
        result = con.execute(open(f"src/database/sql_queries/{sql_file}.sql", "r").read())
        rows = result.fetchall()
        for row in rows:
            result_rows.append(rows)
        
        con.close()
        return result_rows[0]