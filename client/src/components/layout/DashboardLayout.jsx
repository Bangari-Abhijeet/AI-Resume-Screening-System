import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen max-w-7xl overflow-hidden bg-slate-50">
        <Sidebar />
        <main className="flex-1 px-6 py-8 xl:px-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
