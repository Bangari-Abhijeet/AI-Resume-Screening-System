import React from "react";
import { atsBreakdown } from "../data/dummyData";
import ProgressRing from "../components/ui/ProgressRing";

export default function ATSScore() {
  const overall = Math.round(atsBreakdown.reduce((s, x) => s + x.score, 0) / atsBreakdown.length);
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold">ATS Score</h2>
        <p className="text-sm text-slate-600">Your overall compatibility with applicant tracking systems.</p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="text-lg font-semibold">Overall Score</h4>
          <div className="mt-6 flex items-center justify-center">
            <ProgressRing value={overall} label="" />
          </div>
        </div>

        <div className="col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="text-lg font-semibold">Breakdown</h4>
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
      </div>
    </div>
  );
}
