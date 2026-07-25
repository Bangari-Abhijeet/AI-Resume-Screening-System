// Analysis Routes

const express = require('express');
const router = express.Router();
const analysisController = require('../controllers/analysisController');
const authMiddleware = require('../middleware/authMiddleware');

// Protected routes
router.use(authMiddleware);

router.post('/:resumeId/analyze', analysisController.analyzeResume);
router.get('/:resumeId/ats-score', analysisController.getATSScore);
router.post('/:resumeId/compare-job', analysisController.compareWithJobDescription);
router.get('/build-tips', analysisController.getBuildTips);

module.exports = router;
