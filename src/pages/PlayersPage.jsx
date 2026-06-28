import { DataTable } from "../components/DataTable.jsx";
import { StatusBadge } from "../components/StatusBadge.jsx";
import { playerRows, playerSegments } from "../services/adminData.js";

export function PlayersPage() {
  return (
    <>
      <section className="page-toolbar">
        <div>
          <p className="panel-kicker">Players</p>
          <h2>玩家管理</h2>
        </div>
        <div className="toolbar-actions">
          <button className="secondary-button" type="button">批量封禁</button>
          <button className="primary-button" type="button">新增白名单</button>
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

      <DataTable
        title="玩家列表"
        kicker="Account"
        columns={["玩家", "等级", "区服", "充值", "状态"]}
        rows={playerRows}
      />

      <section className="panel">
        <div className="panel-header">
          <div>
            <p className="panel-kicker">Risk</p>
            <h2>账号风控队列</h2>
          </div>
        </div>
        <div className="review-grid">
          {playerRows.slice(0, 3).map((row) => (
            <article className="review-card" key={row.id}>
              <strong>{row.cells[0]}</strong>
              <span>{row.cells[2]} · 最近 24 小时登录 9 次</span>
              <StatusBadge status={row.status} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
