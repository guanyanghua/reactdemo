import { DataTable } from "../components/DataTable.jsx";
import { MetricCard } from "../components/MetricCard.jsx";
import { StatusBadge } from "../components/StatusBadge.jsx";
import { ApiPlayersPage } from "./ApiPlayersPage.jsx";
import {
  announcements,
  gameServers,
  metrics,
  paymentOrders,
  playerRows,
  revenueTrend,
  reviewTasks,
} from "../services/adminData.js";

export function OverviewPage({ onNotify }) {
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
            <button
              className="secondary-button"
              onClick={() => onNotify?.("报表导出任务已创建")}
              type="button"
            >
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
          onViewAll={() => onNotify?.("请从左侧进入玩家管理查看完整列表")}
        />
        <DataTable
          title="订单流水"
          kicker="Orders"
          columns={["订单号", "商品", "金额", "渠道", "状态"]}
          rows={paymentOrders}
          onViewAll={() => onNotify?.("请从左侧进入充值订单查看完整列表")}
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
                <button
                  className="text-button"
                  onClick={() => onNotify?.(`已进入处理：${task.title}`)}
                  type="button"
                >
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
            <button
              className="primary-button"
              onClick={() => onNotify?.("新建公告功能待接入表单")}
              type="button"
            >
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
      <ApiPlayersPage />
    </>
  );
}
