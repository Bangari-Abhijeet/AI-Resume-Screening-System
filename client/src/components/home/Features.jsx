import React from 'react';

const features = [
  { title: 'Resume Analysis', desc: 'Get AI-driven insights to improve your resume.' },
  { title: 'Resume Builder', desc: 'Create clean, ATS-friendly resumes quickly.' },
  { title: 'Job Recommendations', desc: 'Receive tailored job suggestions based on your profile.' },
];

const Features = () => (
  <section className="features grid gap-6 md:grid-cols-3">
    {features.map((f) => (
      <div key={f.title} className="feature p-4 border rounded">
        <h3 className="font-semibold mb-2">{f.title}</h3>
        <p className="text-sm text-gray-600">{f.desc}</p>
      </div>
    ))}
  </section>
);

export default Features;
