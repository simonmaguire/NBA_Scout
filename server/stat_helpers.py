# import pandas as pd
# import schemas
# from typing import List

# def pydantic_BxScr_to_df(boxscores: List[schemas.TeamBoxTrad]):
#     list_of_dicts = [boxscore.model_dump() for boxscore in boxscores]
#     boxscore_df = pd.DataFrame(list_of_dicts)
#     return boxscore_df

# def calc_corrs(boxscores: List[schemas.TeamBoxTrad], target: str):
#     return []