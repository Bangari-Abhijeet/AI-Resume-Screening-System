import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import InputField from "../components/ui/InputField";
import { register } from "../services/authService";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState(""); const [email, setEmail] = useState(""); const [password, setPassword] = useState("");
  const [error, setError] = useState(""); const [loading, setLoading] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault(); setError(""); setLoading(true);
    try { await register({ fullName: name, email, password }); navigate('/login'); }
    catch (err) { setError(err.message || 'Unable to create account'); }
    finally { setLoading(false); }
  }
  return <AuthLayout title="Create your account" description="Join AI Career Forge to optimize resumes and discover jobs tailored to you." ctaText="Already have an account?" ctaLink="/login" ctaLabel="Sign in">
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}
      <InputField label="Full name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" />
      <InputField label="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@domain.com" />
      <InputField label="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Choose a strong password" />
      <button disabled={loading} type="submit" className="w-full rounded-3xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60">{loading ? 'Creating account…' : 'Create account'}</button>
    </form>
  </AuthLayout>;
}
export default Register;
