import React from "react";
import { profileInfo } from "../data/dummyData";

export default function Profile() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold">Profile</h2>
      <div className="mt-4 space-y-2 text-sm text-slate-700">
        <p className="font-semibold">{profileInfo.name}</p>
        <p>{profileInfo.role} • {profileInfo.location}</p>
        <p className="text-xs">{profileInfo.summary}</p>
        <div className="mt-3">
          <h5 className="text-sm font-semibold">Skills</h5>
          <div className="mt-2 flex flex-wrap gap-2">
            {profileInfo.skills.map(s => (
              <span key={s} className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-700">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
