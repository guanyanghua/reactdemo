export function Topbar({ activeSection, sections, user, onLogout, onNotify }) {
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
          <input
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                onNotify?.(`已搜索：${event.currentTarget.value || "空关键词"}`);
              }
            }}
            placeholder="玩家 ID / 订单号 / 区服"
          />
        </label>
        <button
          className="secondary-button"
          onClick={() => onNotify?.(`当前账号：${user?.display_name ?? "管理员"}`)}
          type="button"
        >
          {user?.display_name ?? "管理员"}
        </button>
        <button className="primary-button" onClick={onLogout} type="button">
          退出登录
        </button>
      </div>
    </header>
  );
}
