from sqlalchemy import Column, Integer, String

from app.db.base import Base


class Player(Base):
    __tablename__ = "players"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), nullable=False)
    level = Column(Integer, nullable=False)
    server = Column(String(50), nullable=False)
    status = Column(String(20), nullable=False, default="normal")
