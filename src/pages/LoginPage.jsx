import { useState } from "react";

import { login } from "../services/authApi.js";

export function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const result = await login({ username, password });
      onLogin(result.access_token, result.user);
    } catch {
      setError("用户名或密码错误");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="login-page">
      <section className="login-panel">
        <div className="login-copy">
          <p className="panel-kicker">GameOps</p>
          <h1>游戏后台管理系统</h1>
          <p>登录后可以访问玩家、订单、活动和客服等运营模块。</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            <span>用户名</span>
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="admin"
            />
          </label>

          <label>
            <span>密码</span>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="admin123"
              type="password"
            />
          </label>

          {error && <div className="error-state">{error}</div>}

          <button className="primary-button" disabled={submitting} type="submit">
            {submitting ? "登录中..." : "登录后台"}
          </button>

          <small>学习环境默认账号：admin / admin123</small>
        </form>
      </section>
    </main>
  );
}
