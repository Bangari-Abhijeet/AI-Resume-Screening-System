function CTASection() {
  return (
    <section className="rounded-[32px] bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-8 py-14 text-white shadow-[0_30px_120px_rgba(37,99,235,0.18)]">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-100/80">Launch your career</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Start building your career with smarter resume and job insights.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100/90">Create polished resumes, see ATS-worthy suggestions, and discover new job matches from one polished AI workspace.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="/register" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-blue-700 transition hover:bg-slate-100">
            Get Started
          </a>
          <a href="/dashboard" className="inline-flex items-center justify-center rounded-full border border-white/80 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Explore Dashboard
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
