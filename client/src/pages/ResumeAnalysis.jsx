import React from "react";
import { atsBreakdown, analysisHighlights } from "../data/dummyData";
import ProgressRing from "../components/ui/ProgressRing";

function ResumeAnalysis() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold">Resume Analysis</h2>
        <p className="text-sm text-slate-600">Detailed ATS breakdown and highlight suggestions.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="text-lg font-semibold">ATS Breakdown</h4>
          <div className="mt-4 space-y-4">
            {atsBreakdown.map((a) => (
              <div key={a.section} className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{a.section}</p>
                  <p className="text-sm text-slate-500">{a.details}</p>
                </div>
                <div className="w-28 text-right">
                  <ProgressRing value={a.score} label="" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold">Highlights</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {analysisHighlights.map((h) => (
                <li key={h.title} className="rounded-md bg-slate-50 p-3">
                  <p className="font-semibold">{h.title}</p>
                  <p className="text-xs text-slate-500">{h.pointer || h.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default ResumeAnalysis;
