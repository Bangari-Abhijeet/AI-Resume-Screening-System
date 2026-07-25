import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getResumes, getJobRecommendations } from "../services/resumeService";

function Dashboard() {
  const [resume, setResume] = useState(() => JSON.parse(localStorage.getItem('latestResume') || 'null'));
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('token')) return;
    Promise.all([getResumes(), getJobRecommendations()])
      .then(([resumeResponse, jobResponse]) => {
        const latest = resumeResponse.resumes?.[0] || null;
        if (latest) { setResume(latest); localStorage.setItem('latestResume', JSON.stringify(latest)); }
        setJobs(jobResponse.recommendations || []);
      })
      .catch((err) => setError(err.message || 'Unable to load your latest results.'));
  }, []);

  const parsed = resume?.parsedData || {};
  return <div className="space-y-8">
    <header className="flex flex-wrap items-center justify-between gap-4"><div><h2 className="text-2xl font-semibold">Your resume dashboard</h2><p className="text-sm text-slate-600">Results from your most recently uploaded resume.</p></div><Link to="/dashboard/resume-upload" className="rounded-xl border border-blue-700 bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:border-blue-900 hover:bg-blue-700">Upload a new resume</Link></header>
    {error && <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-800">{error}</p>}
    {!resume ? <section className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center"><h3 className="text-lg font-semibold">No resume analyzed yet</h3><p className="mt-2 text-sm text-slate-600">Upload your resume to see your personal ATS score, skills, and job matches.</p><Link to="/dashboard/resume-upload" className="mt-5 inline-block rounded-xl border border-blue-700 bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white">Upload resume</Link></section> : <>
      <section className="grid gap-4 md:grid-cols-3"><div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"><p className="text-sm text-slate-500">Latest ATS score</p><p className="mt-2 text-4xl font-bold text-blue-700">{resume.atsScore ?? 0}<span className="text-lg">/100</span></p></div><div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><p className="text-sm text-slate-500">Skills detected</p><p className="mt-2 text-4xl font-bold">{parsed.skills?.length || 0}</p></div><div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><p className="text-sm text-slate-500">Experience entries</p><p className="mt-2 text-4xl font-bold">{parsed.experience?.length || 0}</p></div></section>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h3 className="text-lg font-semibold">{parsed.fullName || 'Your'} extracted profile</h3><p className="mt-2 text-sm text-slate-600">{parsed.summary || 'No professional summary was detected.'}</p><div className="mt-4 flex flex-wrap gap-2">{(parsed.skills || []).map((skill) => <span key={skill} className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-800">{skill}</span>)}</div></section>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-center justify-between"><h3 className="text-lg font-semibold">Your job recommendations</h3><Link to="/dashboard/job-recommendations" className="text-sm font-semibold text-blue-700">View all</Link></div><div className="mt-4 grid gap-3 md:grid-cols-2">{jobs.slice(0, 4).map((job) => <div key={job.id} className="rounded-xl border border-slate-200 p-4"><p className="font-semibold">{job.title}</p><p className="text-sm text-slate-600">{job.company} · {job.location}</p><p className="mt-2 text-sm font-medium text-blue-700">{job.matchPercentage}% match</p></div>)}</div></section>
    </>}
  </div>;
}
export default Dashboard;
