import sys
sys.path.append('../')
from src.model.execute_sql_queries import ExcuteSqlQueries
import uuid
import pandas as pd

class ModelField:

    field = {
            "side_a": {
                        "deck_zone": [], 
                        "discard_zone": [],
                        "boost_zone": [],
                        "creatures_zone": [],
                        "magic_zone": [],
                        "hand_zone": []},

            "side_b": {
                        "deck_zone": [], 
                        "discard_zone": [],
                        "boost_zone": [],
                        "creatures_zone": [],
                        "magic_zone": [],
                        "hand_zone": []}
        }

    def __init__(self) -> None:
               
        pass

    def return_all_field_parameters(self):
        return self.field

    def replace_field(self, new_field):
        self.field = new_field

    def put_card_in_field(self, side, zone, card_id):
        self.field[side][zone] = self.field[side][zone].replace("]","") + card_id + "]"

    def remove_card_in_field(self, side, zone, card_id):
        self.field[side][zone] = self.field[side][zone].replace("]","").replace(card_id, "") + "]"


    def update_field_on_db(self, uuid_game):
        query = f"UPDATE games SET current_field = '{pd.DataFrame(self.field)}' WHERE uuid = '{uuid_game}'"
        ExcuteSqlQueries().execute_sql_query(query)

    def add_field_on_db(self):

        uuid_game = str(uuid.uuid1()).split("-")[0]

        query = f"""
                    INSERT INTO games (uuid, is_running, player_side_a_id, player_side_b_id, current_field)
                    VALUES ('{uuid_game}', 'True', '1', '2', '{pd.DataFrame(self.field)}');
                """
        
        ExcuteSqlQueries().execute_sql_query(query)

        return uuid_game

    def get_field_from_db(self, uuid_game):
        query = f"SELECT * FROM Games WHERE uuid == '{uuid_game}'"
        return ExcuteSqlQueries().execute_sql_query(query)[0][0][-1].split("\n")

    def recreate_field_from_db(self, field_result):
        field_result[0] = field_result[0].replace("side_a", "zones side_a")

        zone = []
        side_a = []
        side_b = []

        for r in field_result:
            zone.append([x for x in r.split(" ") if x != ''][0])
            side_a.append([x for x in r.split(" ") if x != ''][1])
            side_b.append([x for x in r.split(" ") if x != ''][2])

        return {
            side_a[0]: {
                zone[1] : side_a[1],
                zone[2] : side_a[2],
                zone[3] : side_a[3],
                zone[4] : side_a[4],
                zone[5] : side_a[5],
                zone[6] : side_a[6]},

            side_b[0]: {
                zone[1] : side_b[1],
                zone[2] : side_b[2],
                zone[3] : side_b[3],
                zone[4] : side_b[4],
                zone[5] : side_b[5],
                zone[6] : side_b[6]},
            
            }
        