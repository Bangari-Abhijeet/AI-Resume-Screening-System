import React, { useState } from "react";
import AuthLayout from "../components/layout/AuthLayout";
import InputField from "../components/ui/InputField";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    alert("If this email is registered, a reset link will be sent.");
  }

  return (
    <AuthLayout title="Reset password" description="Enter your email to receive password reset instructions." ctaText="Remembered it?" ctaLink="/login" ctaLabel="Sign in">
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@domain.com" />
        <button className="w-full rounded-3xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white">Send reset link</button>
      </form>
    </AuthLayout>
  );
}
