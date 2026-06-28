import { DataTable } from "../components/DataTable.jsx";
import { MetricCard } from "../components/MetricCard.jsx";
import { StatusBadge } from "../components/StatusBadge.jsx";
import {
  announcements,
  gameServers,
  metrics,
  paymentOrders,
  playerRows,
  revenueTrend,
  reviewTasks,
} from "../services/adminData.js";

export function OverviewPage() {
  return (
    <>
      <section className="metric-grid" aria-label="核心数据">
        {metrics.map((item) => (
          <MetricCard key={item.label} item={item} />
        ))}
      </section>

      <section className="dashboard-grid">
        <div className="panel panel-wide">
          <div className="panel-header">
            <div>
              <p className="panel-kicker">Revenue</p>
              <h2>近 7 日流水趋势</h2>
            </div>
            <button className="secondary-button" type="button">
              导出报表
            </button>
          </div>
          <div className="trend-chart">
            {revenueTrend.map((item) => (
              <div className="trend-column" key={item.day}>
                <span style={{ height: `${item.rate}%` }} />
                <small>{item.day}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <div>
              <p className="panel-kicker">Server</p>
              <h2>区服状态</h2>
            </div>
          </div>
          <div className="server-list">
            {gameServers.map((server) => (
              <article className="server-item" key={server.name}>
                <div>
                  <strong>{server.name}</strong>
                  <span>{server.online} 人在线</span>
                </div>
                <StatusBadge status={server.status} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dashboard-grid">
        <DataTable
          title="玩家管理"
          kicker="Players"
          columns={["玩家", "等级", "区服", "充值", "状态"]}
          rows={playerRows}
        />
        <DataTable
          title="订单流水"
          kicker="Orders"
          columns={["订单号", "商品", "金额", "渠道", "状态"]}
          rows={paymentOrders}
        />
      </section>

      <section className="dashboard-grid">
        <div className="panel">
          <div className="panel-header">
            <div>
              <p className="panel-kicker">Review</p>
              <h2>待处理事项</h2>
            </div>
          </div>
          <div className="task-list">
            {reviewTasks.map((task) => (
              <article className="task-item" key={task.title}>
                <div>
                  <strong>{task.title}</strong>
                  <span>{task.detail}</span>
                </div>
                <button className="text-button" type="button">
                  处理
                </button>
              </article>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <div>
              <p className="panel-kicker">Notice</p>
              <h2>公告与活动</h2>
            </div>
            <button className="primary-button" type="button">
              新建
            </button>
          </div>
          <div className="notice-list">
            {announcements.map((notice) => (
              <article className="notice-item" key={notice.title}>
                <span>{notice.type}</span>
                <strong>{notice.title}</strong>
                <small>{notice.time}</small>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
