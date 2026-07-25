// ATS Service

const atsCalculator = require('../utils/atsCalculator');

const atsService = {
  calculateScore: async (resumeData, jobDescription = '') => {
    try {
      const formatting = atsCalculator.scoreFormatting(resumeData);
      const readability = atsCalculator.scoreReadability(resumeData.extractedText || JSON.stringify(resumeData));
      const skillScore = Math.min(20, (resumeData.skills?.length || 0) * 4);
      const experienceScore = Math.min(20, (resumeData.experience?.length || 0) * 7);
      const educationScore = resumeData.education?.length ? 15 : 0;
      const projectScore = resumeData.projects?.length ? 15 : 0;
      const grammarScore = resumeData.extractedText && resumeData.extractedText.length > 120 ? 10 : 5;

      const details = {
        matchedKeywords: [],
        missingKeywords: [],
        recommendations: []
      };

      let keywordMatch = 0;
      if (jobDescription) {
        const jdKeywords = atsCalculator.extractKeywords(jobDescription);
        const resumeText = (resumeData.extractedText || JSON.stringify(resumeData)).toLowerCase();
        const matchedKeywords = jdKeywords.filter(keyword => resumeText.includes(keyword.toLowerCase()));
        const missingKeywords = jdKeywords.filter(keyword => !resumeText.includes(keyword.toLowerCase()));

        details.matchedKeywords = matchedKeywords.slice(0, 20);
        details.missingKeywords = missingKeywords.slice(0, 20);
        details.recommendations = missingKeywords.slice(0, 10).map(keyword => `Add ${keyword} to your resume if relevant.`);
        keywordMatch = jdKeywords.length ? Math.round((matchedKeywords.length / jdKeywords.length) * 20) : 0;
      }

      const totalScore = Math.min(
        100,
        formatting + readability + skillScore + experienceScore + educationScore + projectScore + grammarScore + keywordMatch
      );

      return {
        totalScore,
        breakdown: {
          formatting,
          readability,
          skills: skillScore,
          experience: experienceScore,
          education: educationScore,
          projects: projectScore,
          grammar: grammarScore,
          keywordMatch
        },
        details
      };
    } catch (error) {
      console.error('ATS Score Calculation Error:', error);
      throw error;
    }
  },

  extractKeywords: (text) => {
    try {
      if (!text) return [];
      return atsCalculator.extractKeywords(text).filter(word => word.length > 3);
    } catch (error) {
      console.error('Keyword Extraction Error:', error);
      throw error;
    }
  },

  validateATSCompatibility: (resumeData) => {
    try {
      const issues = [];
      const warnings = [];
      const recommendations = [];

      if (!resumeData.skills || !resumeData.skills.length) {
        issues.push('No skills section found.');
        recommendations.push('Add a dedicated skills section with relevant keywords.');
      }
      if (!resumeData.experience || !resumeData.experience.length) {
        issues.push('Work experience section appears empty.');
        recommendations.push('Include past roles with responsibilities and achievements.');
      }
      if (!resumeData.education || !resumeData.education.length) {
        warnings.push('Education section is missing or incomplete.');
      }
      if (!resumeData.email || !resumeData.phone) {
        warnings.push('Contact details are incomplete.');
      }

      return {
        isAtsCompatible: issues.length === 0,
        issues,
        warnings,
        recommendations
      };
    } catch (error) {
      console.error('ATS Validation Error:', error);
      throw error;
    }
  }
};

module.exports = atsService;
