import React, { useState } from "react";
import AuthLayout from "../components/layout/AuthLayout";
import InputField from "../components/ui/InputField";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    alert("Your password has been updated (demo).");
  }

  return (
    <AuthLayout title="Set a new password" description="Choose a secure password to access your account." ctaText="Need help?" ctaLink="/login" ctaLabel="Contact support">
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField label="New password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
        <button className="w-full rounded-3xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white">Update password</button>
      </form>
    </AuthLayout>
  );
}
