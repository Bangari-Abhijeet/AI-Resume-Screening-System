import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import InputField from "../components/ui/InputField";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // dummy register flow
    navigate("/dashboard");
  }

  return (
    <AuthLayout
      title="Create your account"
      description="Join AI Career Forge to optimize resumes and discover jobs tailored to you."
      ctaText="Already have an account?"
      ctaLink="/login"
      ctaLabel="Sign in"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField label="Full name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
        <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@domain.com" />
        <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Choose a strong password" />

        <button type="submit" className="w-full rounded-3xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">Create account</button>
      </form>
    </AuthLayout>
  );
}

export default Register;
