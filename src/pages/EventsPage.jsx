import { announcements, eventPlans } from "../services/adminData.js";

export function EventsPage({ onNotify }) {
  return (
    <>
      <section className="page-toolbar">
        <div>
          <p className="panel-kicker">Events</p>
          <h2>活动公告</h2>
        </div>
        <div className="toolbar-actions">
          <button
            className="secondary-button"
            onClick={() => onNotify?.("公告预览窗口待接入")}
            type="button"
          >
            预览公告
          </button>
          <button
            className="primary-button"
            onClick={() => onNotify?.("新建活动表单待接入")}
            type="button"
          >
            新建活动
          </button>
        </div>
      </section>

      <section className="dashboard-grid">
        <div className="panel">
          <div className="panel-header">
            <div>
              <p className="panel-kicker">Notice</p>
              <h2>公告列表</h2>
            </div>
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

        <div className="panel">
          <div className="panel-header">
            <div>
              <p className="panel-kicker">Plan</p>
              <h2>活动排期</h2>
            </div>
          </div>
          <div className="task-list">
            {eventPlans.map((plan) => (
              <article className="task-item" key={plan.title}>
                <div>
                  <strong>{plan.title}</strong>
                  <span>{plan.detail}</span>
                </div>
                <button
                  className="text-button"
                  onClick={() => onNotify?.(`正在编辑：${plan.title}`)}
                  type="button"
                >
                  编辑
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
