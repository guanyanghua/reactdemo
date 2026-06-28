from sqlalchemy.orm import Session

from app.models.admin_user import AdminUser
from app.schemas.auth import LoginRequest
from app.services.security import create_access_token, verify_password


def get_admin_by_username(db: Session, username: str) -> AdminUser | None:
    return db.query(AdminUser).filter(AdminUser.username == username).first()


def authenticate_admin(db: Session, payload: LoginRequest) -> tuple[str, AdminUser] | None:
    admin = get_admin_by_username(db, payload.username)
    if admin is None or not admin.is_active:
        return None

    if not verify_password(payload.password, admin.password_hash):
        return None

    token = create_access_token(str(admin.id))
    return token, admin
