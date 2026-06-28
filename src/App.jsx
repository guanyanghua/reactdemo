import { useState } from "react";
import { Dashboard } from "./pages/Dashboard.jsx";
import { adminSections } from "./services/adminData.js";

function App() {
  const [activeSection, setActiveSection] = useState(adminSections[0].id);

  return (
    <Dashboard
      activeSection={activeSection}
      onSectionChange={setActiveSection}
    />
  );
}

export default App;
