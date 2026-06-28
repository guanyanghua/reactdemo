from sqlalchemy.orm import Session

from app.models.player import Player
from app.schemas.player import PlayerCreate, PlayerUpdate


def get_players(db: Session) -> list[Player]:
    return db.query(Player).order_by(Player.id.desc()).all()


def get_player(db: Session, player_id: int) -> Player | None:
    return db.query(Player).filter(Player.id == player_id).first()


def create_player(db: Session, payload: PlayerCreate) -> Player:
    player = Player(**payload.model_dump())
    db.add(player)
    db.commit()
    db.refresh(player)
    return player


def update_player(db: Session, player_id: int, payload: PlayerUpdate) -> Player | None:
    player = get_player(db, player_id)
    if player is None:
        return None

    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(player, field, value)

    db.commit()
    db.refresh(player)
    return player


def delete_player(db: Session, player_id: int) -> bool:
    player = get_player(db, player_id)
    if player is None:
        return False

    db.delete(player)
    db.commit()
    return True
