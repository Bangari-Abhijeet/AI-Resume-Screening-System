import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-6 max-w-7xl space-y-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white px-4 py-3 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white font-bold">
                AI
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  AI Career Forge
                </h3>

                <p className="text-sm text-slate-600">
                  AI Resume Screening & Job Recommendation System
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-600">
              Built to help job seekers improve resumes, increase ATS scores,
              and discover better career opportunities through Artificial
              Intelligence.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Quick Links
              </h4>

              <ul className="mt-4 space-y-3 text-sm">
                <li><a href="/">Home</a></li>
                <li><a href="/#features">Features</a></li>
                <li><a href="/#how-it-works">How It Works</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Resources
              </h4>

              <ul className="mt-4 space-y-3 text-sm">
                <li><a href="/login">Sign In</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Contact
              </h4>

              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  support@aicareerforge.com
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} AI Career Forge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;