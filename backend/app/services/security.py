import base64
import hashlib
import hmac
import json
import secrets
import time

from app.core.config import settings


def hash_password(password: str) -> str:
    salt = secrets.token_hex(16)
    digest = hashlib.pbkdf2_hmac("sha256", password.encode(), salt.encode(), 120000)
    return f"{salt}${digest.hex()}"


def verify_password(password: str, password_hash: str) -> bool:
    try:
      salt, stored_digest = password_hash.split("$", 1)
    except ValueError:
      return False

    digest = hashlib.pbkdf2_hmac("sha256", password.encode(), salt.encode(), 120000)
    return hmac.compare_digest(digest.hex(), stored_digest)


def _encode_json(data: dict) -> str:
    raw = json.dumps(data, separators=(",", ":"), ensure_ascii=False).encode()
    return base64.urlsafe_b64encode(raw).decode().rstrip("=")


def _decode_json(data: str) -> dict:
    padded = data + "=" * (-len(data) % 4)
    raw = base64.urlsafe_b64decode(padded.encode())
    return json.loads(raw.decode())


def create_access_token(subject: str) -> str:
    payload = {
        "sub": subject,
        "exp": int(time.time()) + settings.token_expire_minutes * 60,
    }
    body = _encode_json(payload)
    signature = hmac.new(
        settings.secret_key.encode(),
        body.encode(),
        hashlib.sha256,
    ).hexdigest()
    return f"{body}.{signature}"


def verify_access_token(token: str) -> str | None:
    try:
        body, signature = token.split(".", 1)
    except ValueError:
        return None

    expected = hmac.new(
        settings.secret_key.encode(),
        body.encode(),
        hashlib.sha256,
    ).hexdigest()
    if not hmac.compare_digest(signature, expected):
        return None

    try:
        payload = _decode_json(body)
    except (ValueError, json.JSONDecodeError):
        return None

    if payload.get("exp", 0) < int(time.time()):
        return None

    return payload.get("sub")
