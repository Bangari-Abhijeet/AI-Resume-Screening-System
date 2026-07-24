import React from "react";
import { resumeSteps } from "../data/dummyData";

function ResumeBuilder() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold">Resume Builder</h2>
        <p className="text-sm text-slate-600">Step through your resume sections and fill in content to improve ATS compatibility.</p>
      </header>

      <div className="grid gap-4">
        {resumeSteps.map((s, idx) => (
          <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold">{idx + 1}. {s.title}</h4>
                <p className="mt-1 text-sm text-slate-500">{s.description}</p>
              </div>
              <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResumeBuilder;
