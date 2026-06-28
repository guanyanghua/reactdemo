from pydantic import BaseModel, Field


class PlayerBase(BaseModel):
    name: str = Field(min_length=1, max_length=50)
    level: int = Field(ge=1, le=99999)
    server: str = Field(min_length=1, max_length=50)
    status: str = "normal"


class PlayerCreate(PlayerBase):
    pass


class PlayerUpdate(BaseModel):
    name: str | None = Field(default=None, min_length=1, max_length=50)
    level: int | None = Field(default=None, ge=1, le=99999)
    server: str | None = Field(default=None, min_length=1, max_length=50)
    status: str | None = None


class PlayerOut(PlayerBase):
    id: int

    model_config = {"from_attributes": True}
