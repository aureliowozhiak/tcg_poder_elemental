import sqlite3

class ExcuteSqlQueries:

    def __init__(self) -> None:
        pass
    
    def execute_sql_query(self, sql_query):

        result_rows = []

        if sql_query.count(".sql") == 1:
            sql_query = open(f"src/database/sql_queries/{sql_query}", "r").read()
            
        con = sqlite3.connect("src/database/cards.db")
        cursor = con.cursor()
        result = cursor.execute(sql_query)
        
        try:
            rows = result.fetchall()
            for row in rows:
                result_rows.append(rows)
            con.commit()
            cursor.close()
        except:
            con.commit()
            cursor.close()
        
        return result_rows