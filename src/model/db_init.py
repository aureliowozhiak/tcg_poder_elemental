import sys
sys.path.append('../')
from src.model.execute_sql_queries import ExcuteSqlQueries

class DbInit:

    def __init__(self) -> None:
        excuteSql = ExcuteSqlQueries()
        excuteSql.execute_sql_query("drop_creatures_table")
        excuteSql.execute_sql_query("create_creatures_table")
        pass

