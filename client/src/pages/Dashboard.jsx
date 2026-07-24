import React from "react";
import { Link } from "react-router-dom";
import { dashboardCards, recentAnalyses, recommendedJobs, profileInfo } from "../data/dummyData";
import ProgressRing from "../components/ui/ProgressRing";
import JobCard from "../components/ui/JobCard";

function Dashboard() {
  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Welcome back, {profileInfo.name.split(" ")[0]}</h2>
          <p className="text-sm text-slate-600">Overview of your resume health and recent activity</p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/dashboard/resume-builder" className="rounded-3xl bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow">Edit resume</Link>
          <Link to="/dashboard/resume-upload" className="rounded-3xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Upload</Link>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {dashboardCards.map((c) => (
          <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-medium text-slate-500">{c.title}</h3>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-2xl font-semibold text-slate-950">{c.value}</p>
                <p className="mt-1 text-xs text-slate-500">{c.label}</p>
              </div>
              <ProgressRing value={c.progress} label="" />
            </div>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="col-span-2 space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold">Recent Analyses</h4>
            <ul className="mt-4 space-y-3">
              {recentAnalyses.map((r) => (
                <li key={r.title} className="flex items-center justify-between rounded-lg px-4 py-3 hover:bg-slate-50">
                  <div>
                    <p className="font-semibold">{r.title}</p>
                    <p className="text-sm text-slate-500">{r.date}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">{r.status}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold">Recommended Jobs</h4>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              {recommendedJobs.map((job) => (
                <JobCard key={job.company + job.role} job={job} />
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold">Profile</h4>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">{profileInfo.name}</p>
              <p>{profileInfo.role} • {profileInfo.location}</p>
              <p className="text-xs">{profileInfo.summary}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold">Quick Actions</h4>
            <div className="mt-4 flex flex-col gap-3">
              <Link to="/dashboard/resume-analysis" className="rounded-md bg-slate-50 px-4 py-2 text-sm font-medium">Run analysis</Link>
              <Link to="/dashboard/job-recommendations" className="rounded-md bg-slate-50 px-4 py-2 text-sm font-medium">View recommendations</Link>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default Dashboard;
