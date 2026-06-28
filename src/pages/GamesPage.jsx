import { StatusBadge } from "../components/StatusBadge.jsx";
import { gameConfigs, gameServers } from "../services/adminData.js";

export function GamesPage() {
  return (
    <>
      <section className="page-toolbar">
        <div>
          <p className="panel-kicker">Game Config</p>
          <h2>游戏配置</h2>
        </div>
        <div className="toolbar-actions">
          <button className="secondary-button" type="button">保存草稿</button>
          <button className="primary-button" type="button">发布配置</button>
        </div>
      </section>

      <section className="dashboard-grid">
        <div className="panel">
          <div className="panel-header">
            <div>
              <p className="panel-kicker">Server</p>
              <h2>区服开关</h2>
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

        <div className="panel">
          <div className="panel-header">
            <div>
              <p className="panel-kicker">Rules</p>
              <h2>玩法参数</h2>
            </div>
          </div>
          <div className="config-list">
            {gameConfigs.map((item) => (
              <label className="config-item" key={item.label}>
                <span>{item.label}</span>
                <input defaultValue={item.value} />
              </label>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
