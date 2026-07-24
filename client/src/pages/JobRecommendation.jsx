import React from "react";
import { recommendedJobs } from "../data/dummyData";
import JobCard from "../components/ui/JobCard";

function JobRecommendation() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold">Job Recommendations</h2>
        <p className="text-sm text-slate-600">Curated roles matched to your resume and skills.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {recommendedJobs.map((job) => (
          <JobCard key={job.company + job.role} job={job} />
        ))}
      </section>
    </div>
  );
}

export default JobRecommendation;
