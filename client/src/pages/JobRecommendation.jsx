import { useEffect, useState } from "react";
import { getJobRecommendations } from "../services/resumeService";

function JobRecommendation() {
  const [jobs, setJobs] = useState([]); const [error, setError] = useState('');
  useEffect(() => { getJobRecommendations().then((data) => setJobs(data.recommendations || [])).catch((err) => setError(err.message || 'Upload a resume before viewing recommendations.')); }, []);
  return <div className="space-y-6"><header><h2 className="text-2xl font-semibold">Your job recommendations</h2><p className="text-sm text-slate-600">Roles ranked using skills extracted from your latest resume.</p></header>{error && <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-800">{error}</p>}<section className="grid grid-cols-1 gap-4 md:grid-cols-2">{jobs.map((job) => <article key={job.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-start justify-between gap-3"><div><h3 className="text-lg font-semibold">{job.title}</h3><p className="text-sm text-slate-600">{job.company} · {job.location}</p></div><span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">{job.matchPercentage}% match</span></div><p className="mt-3 text-sm text-slate-700">Matched skills: {job.matchedSkills?.join(', ') || 'No direct skill matches found'}</p><p className="mt-2 text-xs text-slate-500">Missing: {job.missingSkills?.join(', ') || '—'}</p></article>)}</section></div>;
}
export default JobRecommendation;
