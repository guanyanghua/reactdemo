# ReactDemo Backend

这是 `reactdemo` 游戏后台管理系统配套的 FastAPI 后端项目。

## 项目结构

```text
backend
├─ app
│  ├─ api
│  │  ├─ routes
│  │  │  ├─ health.py
│  │  │  └─ players.py
│  │  ├─ deps.py
│  │  └─ router.py
│  ├─ core
│  │  └─ config.py
│  ├─ db
│  │  ├─ base.py
│  │  └─ session.py
│  ├─ models
│  │  └─ player.py
│  ├─ schemas
│  │  └─ player.py
│  ├─ services
│  │  └─ player_service.py
│  └─ main.py
├─ .env.example
├─ requirements.txt
└─ README.md
```

## 启动步骤

创建虚拟环境：

```bash
python -m venv .venv
```

激活虚拟环境：

```powershell
.\.venv\Scripts\Activate.ps1
```

安装依赖：

```bash
pip install -r requirements.txt
```

复制环境变量文件：

```bash
copy .env.example .env
```

修改 `.env` 里的 MySQL 密码和数据库名。

启动后端：

```bash
uvicorn app.main:app --reload --port 8000
```

如果数据库里还没有玩家数据，可以执行：

```bash
python -m app.db.seed
```

这会创建一个默认管理员账号：

```text
用户名：admin
密码：admin123
```

接口文档：

```text
http://127.0.0.1:8000/docs
```

健康检查：

```text
http://127.0.0.1:8000/api/health
```

玩家接口：

```text
http://127.0.0.1:8000/api/players
```

登录接口：

```text
POST http://127.0.0.1:8000/api/auth/login
```

登录成功后会返回 `access_token`。访问玩家接口时，需要在请求头里携带：

```text
Authorization: Bearer 你的token
```

## MySQL 表结构

```sql
CREATE DATABASE IF NOT EXISTS demo_db
DEFAULT CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE demo_db;

CREATE TABLE IF NOT EXISTS players (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  level INT NOT NULL,
  server VARCHAR(50) NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'normal'
);

INSERT INTO players (name, level, server, status) VALUES
('Tom', 20, '一区', 'normal'),
('Jerry', 18, '二区', 'normal'),
('Lucy', 25, '三区', 'warning');
```

## 和前端联动

前端默认请求：

```text
http://127.0.0.1:8000/api/players
```

玩家管理页面每 3 秒自动刷新一次。你在 DBeaver 中新增或修改 `players` 表数据后，前端会在下一次轮询时更新。

现在玩家接口已经加了 Token 鉴权。前端登录成功后会把 Token 保存到浏览器 `localStorage`，后续请求会自动带上 Token。
