import { Route, Routes } from "react-router-dom";
import { Home } from "../view/pages/home/Home";
import { Settings } from "../view/pages/settings/Settings";
import { Updates } from "../view/pages/updates/Updates";
import { Appointments } from "../view/pages/appointments/Appointments";
import { Inventory } from "../view/pages/inventory/Inventory";
import { Sales } from "../view/pages/sales/Sales";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/appointment" element={<Appointments />} />

      <Route path="/inventory" element={<Inventory />} />

      <Route path="/sales" element={<Sales />} />

      <Route path="/settings" element={<Settings />} />

      <Route path="/updates" element={<Updates />} />

      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}
