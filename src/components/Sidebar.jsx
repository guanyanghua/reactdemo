export function Sidebar({ sections, activeSection, onSectionChange }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="brand-logo">GM</span>
        <div>
          <strong>GameOps</strong>
          <small>运营管理台</small>
        </div>
      </div>

      <nav className="side-nav" aria-label="后台导航">
        {sections.map((section) => (
          <button
            className={section.id === activeSection ? "active" : ""}
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            type="button"
          >
            <span>{section.icon}</span>
            {section.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-card">
        <span>今日维护窗口</span>
        <strong>23:30 - 00:10</strong>
        <small>影响：跨服竞技场结算</small>
      </div>
    </aside>
  );
}
