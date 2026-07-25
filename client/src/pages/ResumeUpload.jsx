import { useState } from "react";
import { uploadResume } from "../services/resumeService";

export default function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!file) return setError('Choose a PDF or DOCX resume first.');
    setError(''); setResult(null); setLoading(true);
    try {
      const result = await uploadResume(file);
      localStorage.setItem('latestResume', JSON.stringify(result.resume));
      setResult(result.resume);
    } catch (err) { setError(err.message || 'Upload failed'); }
    finally { setLoading(false); }
  }

  return <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <h2 className="text-2xl font-semibold">Upload Resume</h2>
    <p className="mt-2 text-sm text-slate-600">Upload a PDF or DOCX resume to extract skills and calculate an ATS score.</p>
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      {error && <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}
      {result && <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"><p className="font-semibold">{result.fileName} analyzed successfully — ATS score: {result.atsScore}/100</p><p className="mt-2">Skills found: {result.parsedData?.skills?.join(', ') || 'No skills detected'}</p><p className="mt-1">Open the Dashboard to see your personal results and recommendations.</p></div>}
      <input required accept=".pdf,.doc,.docx,application/pdf" type="file" className="text-sm" onChange={(event) => setFile(event.target.files?.[0] || null)} />
      <button disabled={loading} className="block rounded-xl border border-blue-700 bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:border-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:opacity-60">{loading ? 'Analyzing…' : 'Upload and analyze'}</button>
    </form>
  </div>;
}
