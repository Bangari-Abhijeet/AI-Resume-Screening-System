const fs = require('fs');
const Resume = require('../models/Resume');
const pdfExtractor = require('../utils/pdfExtractor');
const atsService = require('../services/atsService');

const resumeController = {
  uploadResume: async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }

      const extractedText = await pdfExtractor.extractTextFromFile(req.file.path);
      const parsedData = pdfExtractor.parseResumeData(extractedText);
      const atsResult = await atsService.calculateScore({ ...parsedData, extractedText });
      const resume = await Resume.create({
        userId: req.user.id,
        fileName: req.file.originalname,
        filePath: req.file.path,
        fileSize: req.file.size,
        mimeType: req.file.mimetype,
        extractedText,
        parsedData,
        atsScore: atsResult.totalScore,
      });
      res.status(201).json({ 
        message: 'Resume uploaded successfully',
        resume
      });
    } catch (error) {
      res.status(500).json({ message: 'Upload failed', error: error.message });
    }
  },

  getUserResumes: async (req, res) => {
    try {
      const userId = req.user?.id;

      if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const resumes = await Resume.find({ userId, isActive: true }).sort({ uploadedAt: -1 });
      res.status(200).json({ resumes });
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch resumes', error: error.message });
    }
  },

  deleteResume: async (req, res) => {
    try {
      const { resumeId } = req.params;

      const resume = await Resume.findOne({ _id: resumeId, userId: req.user.id });
      if (!resume) return res.status(404).json({ message: 'Resume not found' });
      if (resume.filePath && fs.existsSync(resume.filePath)) fs.unlinkSync(resume.filePath);
      await resume.deleteOne();
      res.status(200).json({ message: 'Resume deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Deletion failed', error: error.message });
    }
  },

  getResumeDetails: async (req, res) => {
    try {
      const { resumeId } = req.params;

      const resume = await Resume.findOne({ _id: resumeId, userId: req.user.id });
      if (!resume) return res.status(404).json({ message: 'Resume not found' });
      res.status(200).json({ resume });
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch resume', error: error.message });
    }
  }
};

module.exports = resumeController;
