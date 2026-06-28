from app.db.session import SessionLocal
from app.models.admin_user import AdminUser
from app.models.player import Player
from app.services.security import hash_password

seed_players = [
    {"name": "Tom", "level": 20, "server": "一区", "status": "normal"},
    {"name": "Jerry", "level": 18, "server": "二区", "status": "normal"},
    {"name": "Lucy", "level": 25, "server": "三区", "status": "warning"},
    {"name": "Alice", "level": 30, "server": "四区", "status": "normal"},
]


def seed() -> None:
    db = SessionLocal()
    try:
        admin = db.query(AdminUser).filter(AdminUser.username == "admin").first()
        if admin is None:
            db.add(
                AdminUser(
                    username="admin",
                    password_hash=hash_password("admin123"),
                    display_name="系统管理员",
                    role="admin",
                )
            )
            print("default admin inserted: admin / admin123")

        existing_count = db.query(Player).count()
        if existing_count:
            print(f"players table already has {existing_count} rows, skipped.")
            db.commit()
            return

        for payload in seed_players:
            db.add(Player(**payload))

        db.commit()
        print("seed players inserted.")
    finally:
        db.close()


if __name__ == "__main__":
    seed()
