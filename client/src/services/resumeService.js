import { fetcher } from './api';

const apiBase = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
const authHeaders = () => ({ Authorization: `Bearer ${localStorage.getItem('token') || ''}` });

export async function uploadResume(file) {
  const formData = new FormData();
  formData.append('resume', file);
  const response = await fetch(`${apiBase}/resumes/upload`, {
    method: 'POST', headers: authHeaders(), body: formData,
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Upload failed');
  return data;
}

export const getResumes = () => fetcher('/resumes', { headers: authHeaders() });
export const analyzeResume = (resumeId) => fetcher(`/analysis/${resumeId}/analyze`, { method: 'POST', headers: authHeaders() });
export const getJobRecommendations = () => fetcher('/jobs/recommendations', { headers: authHeaders() });
