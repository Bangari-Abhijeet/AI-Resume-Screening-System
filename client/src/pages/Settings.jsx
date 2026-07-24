import React from "react";
import { settingsOptions } from "../data/dummyData";

export default function Settings() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Settings</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {settingsOptions.map(s => (
          <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h4 className="font-semibold">{s.title}</h4>
            <p className="mt-1 text-sm text-slate-600">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
