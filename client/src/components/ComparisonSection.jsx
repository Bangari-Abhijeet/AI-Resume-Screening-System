import React from 'react';

const ComparisonSection = () => (
  <div className="grid md:grid-cols-2 gap-6">
    <div className="p-6 rounded-xl border bg-white/60 backdrop-blur-sm">
      <h4 className="font-semibold mb-3">Traditional Resume Review</h4>
      <ul className="text-sm text-gray-600 space-y-2">
        <li>Manual screening by recruiters</li>
        <li>Slow turnaround</li>
        <li>Inconsistent feedback</li>
        <li>Low ATS awareness</li>
      </ul>
    </div>

    <div className="p-6 rounded-xl border bg-white/60 backdrop-blur-sm">
      <h4 className="font-semibold mb-3">AI Resume Screening</h4>
      <ul className="text-sm text-gray-600 space-y-2">
        <li>Instant ATS compatibility scores</li>
        <li>Keyword and skill suggestions</li>
        <li>Personalized job matches</li>
        <li>Actionable improvement tips</li>
      </ul>
    </div>
  </div>
);

export default ComparisonSection;
