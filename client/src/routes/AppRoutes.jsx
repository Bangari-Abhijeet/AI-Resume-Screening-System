import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import DashboardLayout from "../components/layout/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import ResumeBuilder from "../pages/ResumeBuilder";
import ResumeUpload from "../pages/ResumeUpload";
import ResumeAnalysis from "../pages/ResumeAnalysis";
import ATSScore from "../pages/ATSScore";
import JobRecommendation from "../pages/JobRecommendation";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="resume-builder" element={<ResumeBuilder />} />
        <Route path="resume-upload" element={<ResumeUpload />} />
        <Route path="resume-analysis" element={<ResumeAnalysis />} />
        <Route path="ats-score" element={<ATSScore />} />
        <Route path="job-recommendations" element={<JobRecommendation />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
