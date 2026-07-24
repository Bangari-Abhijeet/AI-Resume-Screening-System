import { fetcher } from './api';

export const analyzeResume = async (resumeData) => {
  return fetcher('/resume/analyze', {
    method: 'POST',
    body: JSON.stringify(resumeData),
  });
};

export const getJobRecommendations = async (profile) => {
  return fetcher('/resume/recommendations', {
    method: 'POST',
    body: JSON.stringify(profile),
  });
};
