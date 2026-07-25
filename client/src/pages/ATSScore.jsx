import { useState } from "react";

export default function ATSScore() {
  const [resume] = useState(() => JSON.parse(localStorage.getItem('latestResume') || 'null'));
  if (!resume) return <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6"><h2 className="text-2xl font-semibold">ATS Score</h2><p className="mt-2 text-sm text-slate-600">Upload a resume to calculate your personal ATS score.</p></div>;
  const data = resume.parsedData || {};
  return <div className="space-y-6"><header><h2 className="text-2xl font-semibold">Your ATS score</h2><p className="text-sm text-slate-600">Calculated from your uploaded resume, not demo data.</p></header><section className="grid gap-6 md:grid-cols-3"><div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center"><p className="text-sm font-medium text-blue-800">Overall score</p><p className="mt-3 text-6xl font-bold text-blue-700">{resume.atsScore}</p><p className="text-sm text-blue-700">out of 100</p></div><div className="col-span-2 rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-lg font-semibold">Resume signals</h3><div className="mt-4 grid gap-3 sm:grid-cols-2"><p>Skills identified: <strong>{data.skills?.length || 0}</strong></p><p>Experience entries: <strong>{data.experience?.length || 0}</strong></p><p>Education entries: <strong>{data.education?.length || 0}</strong></p><p>Projects identified: <strong>{data.projects?.length || 0}</strong></p></div></div></section></div>;
}
