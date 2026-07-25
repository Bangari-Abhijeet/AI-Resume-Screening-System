const User = require('../models/User');
const Resume = require('../models/Resume');
const jobRecommendationService = require('../services/jobRecommendationService');

const dashboardController = {
  getDashboard: async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const resume = await Resume.findOne({ userId: user._id }).sort({ uploadedAt: -1 });
      const recommendations = resume ? jobRecommendationService.generateJobRecommendations(resume.parsedData) : [];

      res.status(200).json({
        profile: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          role: user.role,
          resume: user.resume,
          atsScore: user.atsScore
        },
        resume: resume || null,
        jobRecommendations: recommendations,
      });
    } catch (error) {
      console.error('Dashboard Error:', error);
      res.status(500).json({ message: 'Failed to load dashboard', error: error.message });
    }
  }
};

module.exports = dashboardController;
