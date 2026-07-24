
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import InputField from "../components/ui/InputField";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // dummy auth — navigate to dashboard
    navigate("/dashboard");
  }

  return (
    <AuthLayout
      title="Welcome back"
      description="Sign in to access your dashboard, resume tools and job recommendations."
      ctaText="Don't have an account?"
      ctaLink="/register"
      ctaLabel="Create one"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@domain.com" />
        <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />

        <div className="flex items-center justify-between">
          <label className="inline-flex items-center gap-2 text-sm text-slate-600">
            <input type="checkbox" className="h-4 w-4 rounded-md border-slate-200 text-blue-600" /> Remember me
          </label>
          <a href="/forgot-password" className="text-sm font-semibold text-blue-600">Forgot?</a>
        </div>

        <button type="submit" className="w-full rounded-3xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">Sign in</button>
      </form>
    </AuthLayout>
  );
}

export default Login;