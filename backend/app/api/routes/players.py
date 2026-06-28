from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api.deps import get_current_admin, get_db
from app.models.admin_user import AdminUser
from app.schemas.player import PlayerCreate, PlayerOut, PlayerUpdate
from app.services import player_service

router = APIRouter()


@router.get("", response_model=list[PlayerOut])
def list_players(
    db: Session = Depends(get_db),
    current_admin: AdminUser = Depends(get_current_admin),
) -> list[PlayerOut]:
    return player_service.get_players(db)


@router.get("/{player_id}", response_model=PlayerOut)
def get_player(
    player_id: int,
    db: Session = Depends(get_db),
    current_admin: AdminUser = Depends(get_current_admin),
) -> PlayerOut:
    player = player_service.get_player(db, player_id)
    if player is None:
        raise HTTPException(status_code=404, detail="玩家不存在")
    return player


@router.post("", response_model=PlayerOut, status_code=status.HTTP_201_CREATED)
def create_player(
    payload: PlayerCreate,
    db: Session = Depends(get_db),
    current_admin: AdminUser = Depends(get_current_admin),
) -> PlayerOut:
    return player_service.create_player(db, payload)


@router.put("/{player_id}", response_model=PlayerOut)
def update_player(
    player_id: int,
    payload: PlayerUpdate,
    db: Session = Depends(get_db),
    current_admin: AdminUser = Depends(get_current_admin),
) -> PlayerOut:
    player = player_service.update_player(db, player_id, payload)
    if player is None:
        raise HTTPException(status_code=404, detail="玩家不存在")
    return player


@router.delete("/{player_id}")
def delete_player(
    player_id: int,
    db: Session = Depends(get_db),
    current_admin: AdminUser = Depends(get_current_admin),
) -> dict[str, str]:
    deleted = player_service.delete_player(db, player_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="玩家不存在")
    return {"message": "删除成功"}
