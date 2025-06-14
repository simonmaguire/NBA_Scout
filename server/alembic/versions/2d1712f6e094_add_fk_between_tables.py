"""add fk between tables

Revision ID: 2d1712f6e094
Revises: 17df815fe09f
Create Date: 2025-06-09 11:28:00.865632

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '2d1712f6e094'
down_revision: Union[str, None] = '17df815fe09f'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_foreign_key(None, 'team_boxscore_trad', 'game', ['game_id'], ['game_id'])
    # ### end Alembic commands ###


def downgrade() -> None:
    """Downgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'team_boxscore_trad', type_='foreignkey')
    # ### end Alembic commands ###
