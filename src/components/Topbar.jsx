export function Topbar({ activeSection, sections }) {
  const current = sections.find((section) => section.id === activeSection);

  return (
    <header className="topbar">
      <div>
        <p>游戏后台管理系统</p>
        <h1>{current?.label ?? "控制台"}</h1>
      </div>
      <div className="topbar-actions">
        <label className="search-box">
          <span>搜索</span>
          <input placeholder="玩家 ID / 订单号 / 区服" />
        </label>
        <button className="secondary-button" type="button">
          消息 12
        </button>
        <button className="primary-button" type="button">
          发布活动
        </button>
      </div>
    </header>
  );
}
