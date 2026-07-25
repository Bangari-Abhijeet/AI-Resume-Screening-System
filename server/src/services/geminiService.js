// Gemini AI Service

const axios = require('axios');

const geminiService = {
  getEndpoint: () => {
    const model = process.env.GEMINI_MODEL || 'text-bison-001';
    const endpoint = process.env.GEMINI_ENDPOINT || `https://generativelanguage.googleapis.com/v1beta2/models/${model}:generate`;
    return endpoint;
  },

  callGemini: async (prompt) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('GEMINI_API_KEY is not set');
      }

      const endpoint = geminiService.getEndpoint();
      const response = await axios.post(
        `${endpoint}?key=${apiKey}`,
        {
          prompt: {
            text: prompt
          },
          temperature: 0.2,
          maxOutputTokens: 512
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      return response.data?.candidates?.[0]?.output || response.data?.output || '';
    } catch (error) {
      console.error('Gemini call failed:', error?.response?.data || error.message || error);
      throw error;
    }
  },

  analyzeResume: async (resumeText) => {
    try {
      const prompt = `You are an expert resume reviewer. Analyze the resume text below and return a JSON object with keys: strengths, weaknesses, suggestions, missingSkills, recommendedSkills, jobRolePrediction, experienceLevel, industry, overallRating, grammarIssues. Output valid JSON only. Resume:\n${resumeText}`;
      const rawOutput = await geminiService.callGemini(prompt);
      try {
        return JSON.parse(rawOutput);
      } catch {
        return {
          strengths: [],
          weaknesses: [],
          suggestions: [rawOutput],
          missingSkills: [],
          recommendedSkills: [],
          jobRolePrediction: '',
          experienceLevel: '',
          industry: '',
          overallRating: 0,
          grammarIssues: []
        };
      }
    } catch (error) {
      console.error('Gemini Analysis Error:', error);
      throw error;
    }
  },

  compareWithJobDescription: async (resumeText, jobDescription) => {
    try {
      const prompt = `Compare the resume text and the following job description. Return a JSON object with keys: matchPercentage, matchedKeywords, missingKeywords, recommendations. Output valid JSON only. Resume:\n${resumeText}\n\nJob Description:\n${jobDescription}`;
      const rawOutput = await geminiService.callGemini(prompt);
      try {
        return JSON.parse(rawOutput);
      } catch {
        return {
          matchPercentage: 0,
          matchedKeywords: [],
          missingKeywords: [],
          recommendations: []
        };
      }
    } catch (error) {
      console.error('Gemini Comparison Error:', error);
      throw error;
    }
  },

  generateBuildTips: async (resumeText, targetRole = '') => {
    try {
      const prompt = `Given the resume text below, provide a JSON object with keys improvements, actionItems, resources, and keyFocusAreas. If a target role is provided, tailor suggestions to that role. Output valid JSON only. Target role: ${targetRole}\n\nResume:\n${resumeText}`;
      const rawOutput = await geminiService.callGemini(prompt);
      try {
        return JSON.parse(rawOutput);
      } catch {
        return {
          improvements: [rawOutput],
          actionItems: [],
          resources: [],
          keyFocusAreas: []
        };
      }
    } catch (error) {
      console.error('Gemini Tips Error:', error);
      throw error;
    }
  }
};

module.exports = geminiService;
