class modelField:

    field = {}

    def __init__(self) -> None:
        self.field = {
            "side_a": {
                        "deck_zone": [""], 
                        "discard_zone": [""],
                        "boost_zone": [""],
                        "creatures_zone": ["", "", ""]},

            "side_b": {
                        "deck_zone": [""], 
                        "discard_zone": [""],
                        "boost_zone": [""],
                        "creatures_zone": ["", "", ""]}
        }
        
        pass

    def return_all_field_parameters(self):
        return self.field

    def put_card_in_field(self, side, zone, card_id):
        self.field[side][zone][0] = card_id

    