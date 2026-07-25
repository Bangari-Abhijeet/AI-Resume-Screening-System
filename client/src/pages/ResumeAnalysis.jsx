import { useState } from "react";

function ResumeAnalysis() {
  const [resume] = useState(() => JSON.parse(localStorage.getItem('latestResume') || 'null'));
  if (!resume) return <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6"><h2 className="text-2xl font-semibold">Resume analysis</h2><p className="mt-2 text-sm text-slate-600">Upload a resume to view extracted results.</p></div>;
  const data = resume.parsedData || {};
  const sections = [['Summary', data.summary], ['Skills', data.skills?.join(', ')], ['Experience', data.experience?.map((item) => item.description || item.title).join(' · ')], ['Education', data.education?.map((item) => item.degree || item).join(' · ')], ['Projects', data.projects?.map((item) => item.description || item.title).join(' · ')]];
  return <div className="space-y-6"><header><h2 className="text-2xl font-semibold">Your resume analysis</h2><p className="text-sm text-slate-600">Information extracted from {resume.fileName}.</p></header><section className="grid gap-4">{sections.map(([title, value]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h3 className="font-semibold">{title}</h3><p className="mt-2 whitespace-pre-wrap text-sm text-slate-700">{value || `No ${title.toLowerCase()} detected.`}</p></article>)}</section></div>;
}
export default ResumeAnalysis;
