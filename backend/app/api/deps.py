from collections.abc import Generator

from fastapi import Depends, HTTPException
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy.orm import Session

from app.db.session import SessionLocal
from app.models.admin_user import AdminUser
from app.services.security import verify_access_token

bearer_scheme = HTTPBearer(auto_error=False)


def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def get_current_admin(
    credentials: HTTPAuthorizationCredentials | None = Depends(bearer_scheme),
    db: Session = Depends(get_db),
) -> AdminUser:
    if credentials is None:
        raise HTTPException(status_code=401, detail="请先登录")

    admin_id = verify_access_token(credentials.credentials)
    if admin_id is None:
        raise HTTPException(status_code=401, detail="登录已失效")

    admin = db.query(AdminUser).filter(AdminUser.id == int(admin_id)).first()
    if admin is None or not admin.is_active:
        raise HTTPException(status_code=401, detail="账号不可用")

    return admin
