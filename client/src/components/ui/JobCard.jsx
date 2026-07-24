import { Bookmark, ArrowRight, MapPin, DollarSign } from "lucide-react";

function JobCard({ job }) {
  return (
    <article className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-blue-600">{job.type}</p>
          <h3 className="mt-3 text-xl font-semibold text-slate-950">{job.role}</h3>
          <p className="mt-2 text-sm text-slate-600">{job.company}</p>
        </div>
        <span className="rounded-3xl bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">{job.match}% match</span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-600">
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-2">
          <MapPin size={14} /> {job.location}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-2">
          <DollarSign size={14} /> {job.salary}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <button className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
          Apply Now
        </button>
        <button className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-blue-600">
          Save <Bookmark size={16} />
        </button>
      </div>
    </article>
  );
}

export default JobCard;
