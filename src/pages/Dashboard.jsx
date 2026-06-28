import { Sidebar } from "../components/Sidebar.jsx";
import { Topbar } from "../components/Topbar.jsx";
import { EventsPage } from "./EventsPage.jsx";
import { GamesPage } from "./GamesPage.jsx";
import { OrdersPage } from "./OrdersPage.jsx";
import { OverviewPage } from "./OverviewPage.jsx";
import { PlayersPage } from "./PlayersPage.jsx";
import { SupportPage } from "./SupportPage.jsx";
import { adminSections } from "../services/adminData.js";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

const pageMap = {
  overview: OverviewPage,
  players: PlayersPage,
  games: GamesPage,
  orders: OrdersPage,
  events: EventsPage,
  support: SupportPage,
};

export function Dashboard({ activeSection, onSectionChange }) {
  useDocumentTitle("游戏后台管理系统");
  const ActivePage = pageMap[activeSection] ?? OverviewPage;

  return (
    <div className="admin-shell">
      <Sidebar
        sections={adminSections}
        activeSection={activeSection}
        onSectionChange={onSectionChange}
      />
      <div className="admin-workspace">
        <Topbar activeSection={activeSection} sections={adminSections} />
        <main className="dashboard">
          <ActivePage />
        </main>
      </div>
    </div>
  );
}
