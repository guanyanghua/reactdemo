from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.api.deps import get_current_admin, get_db
from app.models.admin_user import AdminUser
from app.schemas.auth import AdminUserOut, LoginRequest, LoginResponse
from app.services.auth_service import authenticate_admin

router = APIRouter()


@router.post("/login", response_model=LoginResponse)
def login(payload: LoginRequest, db: Session = Depends(get_db)) -> LoginResponse:
    auth_result = authenticate_admin(db, payload)
    if auth_result is None:
        raise HTTPException(status_code=401, detail="用户名或密码错误")

    token, admin = auth_result
    return LoginResponse(access_token=token, user=admin)


@router.get("/me", response_model=AdminUserOut)
def get_me(current_admin: AdminUser = Depends(get_current_admin)) -> AdminUser:
    return current_admin
