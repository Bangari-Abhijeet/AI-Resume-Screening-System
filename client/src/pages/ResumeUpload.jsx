import React from "react";

export default function ResumeUpload() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold">Upload Resume</h2>
      <p className="mt-2 text-sm text-slate-600">Upload a resume file to run immediate analysis and get recommended improvements.</p>
      <div className="mt-6">
        <input type="file" className="text-sm" />
      </div>
    </div>
  );
}
