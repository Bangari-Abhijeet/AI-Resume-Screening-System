const Resume = require('../models/Resume');
const jobService = require('../services/jobRecommendationService');

const jobController = {
  getJobRecommendations: async (req, res) => {
    try {
      const userId = req.user?.id;

      if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const resume = await Resume.findOne({ userId, isActive: true }).sort({ uploadedAt: -1 });
      if (!resume) return res.status(404).json({ message: 'Upload a resume before requesting recommendations' });
      res.status(200).json({ recommendations: jobService.generateJobRecommendations(resume.parsedData) });
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch recommendations', error: error.message });
    }
  },

  searchJobs: async (req, res) => {
    try {
      const { keywords, location, jobType } = req.query;

      if (!keywords) {
        return res.status(400).json({ message: 'Keywords are required' });
      }

      const jobs = jobService.searchJobs({ keywords, location, jobType });
      res.status(200).json({ jobs, total: jobs.length });
    } catch (error) {
      res.status(500).json({ message: 'Search failed', error: error.message });
    }
  },

  getJobDetails: async (req, res) => {
    try {
      const { jobId } = req.params;

      if (!jobId) {
        return res.status(400).json({ message: 'Job ID is required' });
      }

      const job = jobService.getJobById(jobId);
      if (!job) return res.status(404).json({ message: 'Job not found' });
      res.status(200).json({ job });
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch job details', error: error.message });
    }
  },

  matchResumeWithJob: async (req, res) => {
    try {
      const { resumeId, jobId } = req.body;

      if (!resumeId || !jobId) {
        return res.status(400).json({ message: 'Resume ID and Job ID are required' });
      }

      const resume = await Resume.findOne({ _id: resumeId, userId: req.user.id });
      if (!resume) return res.status(404).json({ message: 'Resume not found' });
      const job = jobService.getJobById(jobId);
      if (!job) return res.status(404).json({ message: 'Job not found' });
      res.status(200).json({ analysis: jobService.matchResumeWithJob(resume.parsedData, job) });
    } catch (error) {
      res.status(500).json({ message: 'Matching failed', error: error.message });
    }
  }
};

module.exports = jobController;
