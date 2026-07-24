import { Link } from "react-router-dom";

function AuthLayout({ title, description, children, ctaText, ctaLink, ctaLabel }) {
  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-14">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[32px] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:grid-cols-[1.2fr_1fr] sm:p-10">
        <aside className="rounded-[32px] bg-slate-950 p-8 text-white sm:p-10">
          <div className="inline-flex items-center gap-3 rounded-3xl bg-blue-600 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-blue-500/20">
            AI Career Forge
          </div>
          <div className="mt-10 space-y-6">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
            <p className="max-w-xl text-sm leading-7 text-slate-200/90">{description}</p>
          </div>
          <div className="mt-12 rounded-[28px] bg-slate-900/90 p-6 text-sm leading-7 text-slate-300">
            <p className="font-semibold text-slate-100">Why AI Career Forge?</p>
            <ul className="mt-4 space-y-3">
              <li>• Instant ATS feedback for every resume.</li>
              <li>• Personalized job recommendations and insights.</li>
              <li>• Professional layouts for the modern job market.</li>
            </ul>
          </div>
        </aside>
        <section className="rounded-[32px] bg-slate-50 p-8 sm:p-10">
          {children}
          <div className="mt-6 border-t border-slate-200 pt-6 text-sm text-slate-600">
            {ctaText}{" "}
            <Link to={ctaLink} className="font-semibold text-blue-600 transition hover:text-blue-700">
              {ctaLabel}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AuthLayout;
