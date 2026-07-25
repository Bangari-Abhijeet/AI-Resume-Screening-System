import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import InputField from "../components/ui/InputField";
import { login } from "../services/authService";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault(); setError(""); setLoading(true);
    try {
      const response = await login({ email, password });
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      navigate("/dashboard");
    } catch (err) { setError(err.message || 'Unable to sign in'); }
    finally { setLoading(false); }
  }

  return <AuthLayout title="Welcome back" description="Sign in to access your dashboard, resume tools and job recommendations." ctaText="Don't have an account?" ctaLink="/register" ctaLabel="Create one">
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}
      <InputField label="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@domain.com" />
      <InputField label="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" />
      <div className="flex items-center justify-between"><label className="inline-flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" className="h-4 w-4 rounded-md border-slate-200 text-blue-600" /> Remember me</label><a href="/forgot-password" className="text-sm font-semibold text-blue-600">Forgot?</a></div>
      <button disabled={loading} type="submit" className="w-full rounded-3xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60">{loading ? 'Signing in…' : 'Sign in'}</button>
    </form>
  </AuthLayout>;
}

export default Login;
