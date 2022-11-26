import sys
sys.path.append('../')
from src.model.execute_sql_queries import ExcuteSqlQueries

class DbInit:

    def __init__(self) -> None:
        excuteSql = ExcuteSqlQueries()
        excuteSql.execute_sql_query("drop_creatures_table.sql")
        excuteSql.execute_sql_query("create_creatures_table.sql")
        
        excuteSql.execute_sql_query("drop_decks_table.sql")
        excuteSql.execute_sql_query("create_decks_table.sql")
        
        excuteSql.execute_sql_query("drop_games_table.sql")
        excuteSql.execute_sql_query("create_games_table.sql")
        
        excuteSql.execute_sql_query("drop_players_table.sql")
        excuteSql.execute_sql_query("create_players_table.sql")
        pass

