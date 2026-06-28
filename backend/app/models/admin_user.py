from sqlalchemy import Boolean, Column, Integer, String

from app.db.base import Base


class AdminUser(Base):
    __tablename__ = "admin_users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    display_name = Column(String(50), nullable=False)
    role = Column(String(30), nullable=False, default="admin")
    is_active = Column(Boolean, nullable=False, default=True)
