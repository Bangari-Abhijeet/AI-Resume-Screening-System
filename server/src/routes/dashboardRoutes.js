const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const dashboardController = require('../controllers/dashboardController');

router.use(protect);
router.get('/', dashboardController.getDashboard);

module.exports = router;
