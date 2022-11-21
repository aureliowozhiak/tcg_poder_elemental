class viewField:

    def __init__(self) -> None:
        pass

    def show_field(self, field, side):
        return f"{side} \
            \ndiscard_zone: {field[side]['discard_zone']} \
            \nboost_zone: {field[side]['boost_zone']} \
            \ncreatures_zone: {field[side]['creatures_zone']}"