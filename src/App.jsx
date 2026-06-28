import { useState } from "react";
import { Dashboard } from "./pages/Dashboard.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { adminSections } from "./services/adminData.js";
import {
  clearAuthSession,
  getStoredToken,
  getStoredUser,
  saveAuthSession,
} from "./services/authStorage.js";

function App() {
  const [activeSection, setActiveSection] = useState(adminSections[0].id);
  const [token, setToken] = useState(getStoredToken());
  const [user, setUser] = useState(getStoredUser());

  function handleLogin(accessToken, currentUser) {
    saveAuthSession(accessToken, currentUser);
    setToken(accessToken);
    setUser(currentUser);
  }

  function handleLogout() {
    const confirmed = window.confirm("确定要退出当前账号吗？");
    if (!confirmed) {
      return;
    }

    clearAuthSession();
    setToken(null);
    setUser(null);
    setActiveSection(adminSections[0].id);
  }

  if (!token) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <Dashboard
      activeSection={activeSection}
      onSectionChange={setActiveSection}
      user={user}
      onLogout={handleLogout}
    />
  );
}

export default App;
