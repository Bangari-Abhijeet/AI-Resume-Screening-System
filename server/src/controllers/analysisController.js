const Resume = require('../models/Resume');
const atsService = require('../services/atsService');

const analysisController = {
  analyzeResume: async (req, res) => {
    try {
      const { resumeId } = req.params;

      if (!resumeId) {
        return res.status(400).json({ message: 'Resume ID is required' });
      }

      const resume = await Resume.findOne({ _id: resumeId, userId: req.user.id });
      if (!resume) return res.status(404).json({ message: 'Resume not found' });
      const compatibility = atsService.validateATSCompatibility(resume.parsedData);
      res.status(200).json({ 
        analysis: {
          strengths: resume.parsedData.skills?.length ? [`${resume.parsedData.skills.length} skills identified`] : [],
          weaknesses: [...compatibility.issues, ...compatibility.warnings],
          suggestions: compatibility.recommendations
        }
      });
    } catch (error) {
      res.status(500).json({ message: 'Analysis failed', error: error.message });
    }
  },

  getATSScore: async (req, res) => {
    try {
      const { resumeId } = req.params;

      if (!resumeId) {
        return res.status(400).json({ message: 'Resume ID is required' });
      }

      const resume = await Resume.findOne({ _id: resumeId, userId: req.user.id });
      if (!resume) return res.status(404).json({ message: 'Resume not found' });
      const score = await atsService.calculateScore({ ...resume.parsedData, extractedText: resume.extractedText });
      resume.atsScore = score.totalScore;
      await resume.save();
      res.status(200).json({ 
        atsScore: score.totalScore,
        details: score
      });
    } catch (error) {
      res.status(500).json({ message: 'ATS calculation failed', error: error.message });
    }
  },

  compareWithJobDescription: async (req, res) => {
    try {
      const { resumeId } = req.params;
      const { jobDescription } = req.body;

      if (!resumeId || !jobDescription) {
        return res.status(400).json({ message: 'Resume ID and job description are required' });
      }

      const resume = await Resume.findOne({ _id: resumeId, userId: req.user.id });
      if (!resume) return res.status(404).json({ message: 'Resume not found' });
      const result = await atsService.calculateScore({ ...resume.parsedData, extractedText: resume.extractedText }, jobDescription);
      res.status(200).json({ 
        matchScore: result.totalScore,
        matchedKeywords: result.details.matchedKeywords,
        missingKeywords: result.details.missingKeywords,
        recommendations: result.details.recommendations
      });
    } catch (error) {
      res.status(500).json({ message: 'Comparison failed', error: error.message });
    }
  },

  getBuildTips: async (req, res) => {
    try {
      // TODO: Generate resume building tips using AI
      res.status(200).json({ 
        tips: []
      });
    } catch (error) {
      res.status(500).json({ message: 'Failed to generate tips', error: error.message });
    }
  }
};

module.exports = analysisController;
