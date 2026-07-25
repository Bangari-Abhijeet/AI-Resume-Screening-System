import { useState } from "react";

export default function Profile() {
  const [resume] = useState(() => JSON.parse(localStorage.getItem('latestResume') || 'null'));
  const profile = resume?.parsedData;
  if (!profile) return <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6"><h2 className="text-2xl font-semibold">Profile</h2><p className="mt-2 text-sm text-slate-600">Upload a resume to populate your profile.</p></div>;
  return <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h2 className="text-2xl font-semibold">Profile from your resume</h2><div className="mt-4 space-y-2 text-sm text-slate-700"><p className="font-semibold">{profile.fullName || 'Name not detected'}</p><p>{profile.email || 'Email not detected'} {profile.phone ? `· ${profile.phone}` : ''}</p><p>{profile.location || 'Location not detected'}</p><p className="text-xs">{profile.summary}</p><div className="mt-3"><h3 className="text-sm font-semibold">Skills</h3><div className="mt-2 flex flex-wrap gap-2">{(profile.skills || []).map((skill) => <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">{skill}</span>)}</div></div></div></div>;
}
