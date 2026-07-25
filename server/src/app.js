// Express Application Setup

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use('/uploads', express.static('uploads'));

// Routes
const authRoutes = require('./routes/authRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const analysisRoutes = require('./routes/analysisRoutes');
const jobRoutes = require('./routes/jobRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

// Register routes
app.use('/api/auth', authRoutes);
app.use('/api/resumes', resumeRoutes);
app.use('/api/analysis', analysisRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok',
    message: '🚀 AI Resume Screening Backend is Running...',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
const errorMiddleware = require('./middleware/errorMiddleware');
app.use(errorMiddleware);

// 404 handler
app.use('/api', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const clientBuildPath = path.join(__dirname, '../../client/dist');
app.use(express.static(clientBuildPath));
// Express 5 requires a named wildcard parameter. This serves the React app for
// every non-API route while keeping client-side routing working in production.
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

module.exports = app;
