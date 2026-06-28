from fastapi import APIRouter

from app.api.routes import auth, health, players

api_router = APIRouter()
api_router.include_router(health.router, tags=["Health"])
api_router.include_router(auth.router, prefix="/auth", tags=["Auth"])
api_router.include_router(players.router, prefix="/players", tags=["Players"])
