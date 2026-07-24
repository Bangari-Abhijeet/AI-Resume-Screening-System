import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-16 sm:pt-24 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-blue-100/80 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="relative z-10">
          <span className="inline-flex rounded-full bg-slate-900/95 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/10">
            Premium AI resume toolkit for ambitious professionals
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-8 max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl"
          >
            Build better resumes with artificial intelligence.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-600"
          >
            AI Career Forge helps you optimize resumes, generate ATS scores, and uncover job recommendations with a polished, professional workflow.
          </motion.p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="/register" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Get Started
            </a>
            <a href="/#how-it-works" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              Watch Demo
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Quick results</p>
              <p className="mt-3 text-lg font-semibold text-slate-950">Fast resume scans with precise feedback.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Career intelligence</p>
              <p className="mt-3 text-lg font-semibold text-slate-950">Match with roles that fit your profile.</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-950 via-blue-900 to-blue-600 p-8 text-white shadow-[0_40px_120px_rgba(37,99,235,0.25)]"
        >
          <div className="absolute inset-x-0 top-0 h-40 bg-white/10 blur-3xl" />
          <div className="relative space-y-6">
            <div className="flex items-center justify-between rounded-3xl bg-slate-900/80 p-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/90">ATS Score</p>
                <p className="mt-2 text-4xl font-semibold">89%</p>
              </div>
              <div className="rounded-3xl bg-blue-500 px-3 py-2 text-xs uppercase tracking-[0.28em] text-white">High impact</div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-200/80">Resume strength</p>
                <p className="mt-3 text-2xl font-semibold">Polished</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-200/80">Job match</p>
                <p className="mt-3 text-2xl font-semibold">92%</p>
              </div>
            </div>
            <div className="grid gap-4 rounded-[28px] bg-white/10 p-6 text-sm text-slate-100 shadow-lg shadow-slate-950/20">
              <div className="flex items-center gap-3">
                <Sparkles size={18} className="text-cyan-200" />
                <p>AI highlights opportunities that strengthen your profile.</p>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck size={18} className="text-cyan-200" />
                <p>Receive recruiter-ready guidance and ATS analysis.</p>
              </div>
              <div className="flex items-center gap-3">
                <ArrowRight size={18} className="text-cyan-200" />
                <p>Convert insights into professional career action.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
