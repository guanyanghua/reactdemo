import { StatusBadge } from "../components/StatusBadge.jsx";
import { usePlayers } from "../hooks/usePlayers.js";
import { playerSegments } from "../services/adminData.js";

function formatUpdatedAt(date) {
  if (!date) {
    return "等待同步";
  }

  return date.toLocaleTimeString("zh-CN", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export function PlayersPage({ onNotify }) {
  const { players, riskPlayers, loading, error, lastUpdatedAt, reload } =
    usePlayers({ refreshInterval: 3000 });

  return (
    <>
      <section className="page-toolbar">
        <div>
          <p className="panel-kicker">Players</p>
          <h2>玩家管理</h2>
          <span className="sync-text">最近同步：{formatUpdatedAt(lastUpdatedAt)}</span>
        </div>
        <div className="toolbar-actions">
          <button
            className="secondary-button"
            onClick={() => onNotify?.("已触发批量封禁，后续可接入多选表格")}
            type="button"
          >
            批量封禁
          </button>
          <button
            className="primary-button"
            type="button"
            onClick={() => {
              reload();
              onNotify?.("正在刷新玩家数据");
            }}
          >
            刷新数据
          </button>
        </div>
      </section>

      <section className="segment-grid">
        {playerSegments.map((item) => (
          <article className="panel segment-card" key={item.title}>
            <span>{item.title}</span>
            <strong>{item.value}</strong>
            <small>{item.description}</small>
          </article>
        ))}
      </section>

      <section className="panel table-panel">
        <div className="panel-header">
          <div>
            <p className="panel-kicker">Account</p>
            <h2>玩家列表</h2>
          </div>
          <button
            className="secondary-button"
            type="button"
            onClick={() => {
              reload();
              onNotify?.("正在手动同步玩家列表");
            }}
          >
            手动刷新
          </button>
        </div>

        {loading && <div className="empty-state">正在从后端加载玩家数据...</div>}
        {error && !loading && <div className="error-state">{error}</div>}
        {!loading && !error && players.length === 0 && (
          <div className="empty-state">暂无玩家数据</div>
        )}

        {!loading && !error && players.length > 0 && (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>玩家</th>
                  <th>等级</th>
                  <th>区服</th>
                  <th>状态</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player) => (
                  <tr key={player.id}>
                    <td>{player.id}</td>
                    <td>{player.name}</td>
                    <td>Lv.{player.level}</td>
                    <td>{player.server}</td>
                    <td>
                      <StatusBadge status={player.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <p className="panel-kicker">Risk</p>
            <h2>账号风控队列</h2>
          </div>
        </div>
        <div className="review-grid">
          {(riskPlayers.length ? riskPlayers : players.slice(0, 3)).map((player) => (
            <article className="review-card" key={player.id}>
              <strong>{player.name}</strong>
              <span>{player.server} · 最近 24 小时登录 9 次</span>
              <StatusBadge status={player.status} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
