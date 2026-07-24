import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  UploadCloud,
  BarChart3,
  ClipboardList,
  Briefcase,
  User,
  Settings,
  ArrowRight,
} from "lucide-react";

const navigation = [
  { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  { label: "Resume Builder", to: "/dashboard/resume-builder", icon: FileText },
  { label: "Resume Upload", to: "/dashboard/resume-upload", icon: UploadCloud },
  { label: "Resume Analysis", to: "/dashboard/resume-analysis", icon: BarChart3 },
  { label: "ATS Score", to: "/dashboard/ats-score", icon: ClipboardList },
  { label: "Job Recommendations", to: "/dashboard/job-recommendations", icon: Briefcase },
  { label: "Profile", to: "/dashboard/profile", icon: User },
  { label: "Settings", to: "/dashboard/settings", icon: Settings },
];

function Sidebar() {
  return (
    <aside className="hidden w-80 shrink-0 border-r border-slate-200 bg-white xl:block">
      <div className="flex h-full flex-col justify-between px-6 py-8">
        <div>
          <div className="mb-10 flex items-center gap-3 rounded-3xl bg-blue-50 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">AI</div>
            <div>
              <p className="text-sm font-semibold text-slate-900">AI Career Forge</p>
              <p className="text-xs text-slate-500">Talent platform dashboard</p>
            </div>
          </div>

          <nav className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-200/40"
                        : "text-slate-700 hover:bg-slate-100"
                    }`
                  }
                >
                  <Icon size={18} />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">Need a quick tour?</p>
          <p className="mt-2 text-slate-600">Your workspace is ready. Explore resume tools, analytics, and opportunities.</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-200/30">
            <ArrowRight size={16} />
            Start
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
