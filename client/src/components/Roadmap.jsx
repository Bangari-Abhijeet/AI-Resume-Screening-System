import React from 'react';

const roadmap = [
  { quarter: 'Q1', items: ['MVP Resume Analysis', 'ATS Score'] },
  { quarter: 'Q2', items: ['Job Recommendations', 'Resume Builder'] },
  { quarter: 'Q3', items: ['Interview Prep', 'AI Coach'] },
  { quarter: 'Q4', items: ['Portfolio Analysis', 'Salary Prediction'] },
];

const Roadmap = () => (
  <div className="grid md:grid-cols-4 gap-4">
    {roadmap.map((r) => (
      <div key={r.quarter} className="p-4 rounded-xl border bg-white/60">
        <h5 className="font-semibold mb-2">{r.quarter}</h5>
        <ul className="text-sm text-gray-600 space-y-1">
          {r.items.map((it) => (
            <li key={it}>- {it}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Roadmap;
