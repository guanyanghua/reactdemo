import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar.jsx";
import { Toast } from "../components/Toast.jsx";
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

export function Dashboard({ activeSection, onSectionChange, user, onLogout }) {
  useDocumentTitle("游戏后台管理系统");
  const [toastMessage, setToastMessage] = useState("");
  const ActivePage = pageMap[activeSection] ?? OverviewPage;

  function notify(message) {
    setToastMessage(message);
  }

  useEffect(() => {
    if (!toastMessage) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setToastMessage("");
    }, 2600);

    return () => {
      window.clearTimeout(timer);
    };
  }, [toastMessage]);

  return (
    <div className="admin-shell">
      <Sidebar
        sections={adminSections}
        activeSection={activeSection}
        onSectionChange={onSectionChange}
      />
      <div className="admin-workspace">
        <Topbar
          activeSection={activeSection}
          onNotify={notify}
          onLogout={onLogout}
          sections={adminSections}
          user={user}
        />
        <main className="dashboard">
          <ActivePage onNotify={notify} />
        </main>
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      </div>
    </div>
  );
}
