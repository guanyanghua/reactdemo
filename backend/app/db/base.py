from sqlalchemy.orm import declarative_base

Base = declarative_base()

# Import models so SQLAlchemy can register tables before create_all runs.
from app.models import admin_user  # noqa: E402,F401
from app.models import player  # noqa: E402,F401
