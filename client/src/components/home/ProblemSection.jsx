import { ShieldAlert, Database } from "lucide-react";
import { problemPoints } from "../../data/dummyData";

function ProblemSection() {
  return (
    <div className="grid gap-10 items-center lg:grid-cols-[1fr_420px]">
      {/* Left Section */}
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">
          The Problem
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Hiring and Job Search Processes Are Still Inefficient
        </h2>

        <p className="max-w-xl text-base leading-8 text-slate-600">
          AI Career Forge simplifies resume screening by providing intelligent
          resume analysis, ATS scoring, skill gap detection, and personalized
          job recommendations. It helps candidates improve their resumes while
          helping recruiters identify suitable applicants more efficiently.
        </p>

        <div className="space-y-4">
          {problemPoints.map((point, index) => (
            <div
              key={index}
              className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <ShieldAlert size={22} />
              </div>

              <p className="text-sm leading-7 text-slate-600">{point}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Card */}
      <div className="rounded-[32px] bg-gradient-to-br from-slate-950 via-slate-900 to-blue-600 p-10 text-white shadow-2xl">
        <div className="mb-8 inline-flex items-center gap-3 rounded-3xl bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em]">
          <Database size={18} />
          <span>Impact</span>
        </div>

        <h3 className="text-3xl font-semibold leading-tight">
          Get Consistent Resume Feedback That Recruiters Can Trust
        </h3>

        <p className="mt-5 text-sm leading-7 text-slate-200">
          AI Career Forge uses intelligent resume parsing and AI-powered
          analysis to identify missing skills, improve ATS compatibility, and
          recommend relevant career opportunities. This enables job seekers to
          build stronger resumes and increases their chances of securing
          interviews.
        </p>
      </div>
    </div>
  );
}

export default ProblemSection;