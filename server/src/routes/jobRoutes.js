// Job Routes

const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const authMiddleware = require('../middleware/authMiddleware');

// Protected routes
router.use(authMiddleware);

router.get('/recommendations', jobController.getJobRecommendations);
router.get('/search', jobController.searchJobs);
router.get('/:jobId', jobController.getJobDetails);
router.post('/match', jobController.matchResumeWithJob);

module.exports = router;
