// Resume Model

const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  fileName: {
    type: String,
    required: true
  },
  filePath: {
    type: String,
    required: true
  },
  fileSize: Number,
  mimeType: String,
  extractedText: {
    type: String
  },
  parsedData: {
    fullName: String,
    email: String,
    phone: String,
    location: String,
    summary: String,
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: []
  },
  atsScore: {
    type: Number,
    default: 0
  },
  analysis: {
    strengths: [String],
    weaknesses: [String],
    suggestions: [String]
  },
  isActive: {
    type: Boolean,
    default: true
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('Resume', resumeSchema);
