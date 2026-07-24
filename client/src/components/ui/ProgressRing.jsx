function ProgressRing({ value, label }) {
  return (
    <div className="inline-flex flex-col items-center gap-3 rounded-3xl border border-slate-200 bg-white px-5 py-6 text-center shadow-sm">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 text-3xl font-semibold text-slate-950">
        {value}%
      </div>
      <p className="text-sm font-semibold text-slate-900">{label}</p>
    </div>
  );
}

export default ProgressRing;
