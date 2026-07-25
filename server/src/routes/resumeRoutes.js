// Resume Routes

const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

// Protected routes
router.use(authMiddleware);

router.post('/upload', upload.single('resume'), resumeController.uploadResume);
router.get('/', resumeController.getUserResumes);
router.get('/:resumeId', resumeController.getResumeDetails);
router.delete('/:resumeId', resumeController.deleteResume);

module.exports = router;
