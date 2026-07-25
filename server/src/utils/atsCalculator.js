// ATS Calculator Utility

const atsCalculator = {
  calculateATSScore: (resume, jobDescription) => {
    try {
      let score = 0;
      const details = [];

      // Extract keywords from job description
      const jdKeywords = atsCalculator.extractKeywords(jobDescription);
      
      // Check for keywords in resume
      const resumeText = JSON.stringify(resume).toLowerCase();
      let matchedCount = 0;

      jdKeywords.forEach(keyword => {
        if (resumeText.includes(keyword.toLowerCase())) {
          matchedCount++;
        }
      });

      // Calculate match percentage
      score = (matchedCount / jdKeywords.length) * 100;

      return {
        score: Math.round(score),
        matchedKeywords: matchedCount,
        totalKeywords: jdKeywords.length,
        details: details
      };
    } catch (error) {
      console.error('ATS Calculation Error:', error);
      throw error;
    }
  },

  extractKeywords: (text) => {
    try {
      // Split text into words and filter
      const words = text.toLowerCase()
        .split(/\W+/)
        .filter(word => word.length > 3);

      // Remove duplicates
      return [...new Set(words)];
    } catch (error) {
      console.error('Keyword Extraction Error:', error);
      throw error;
    }
  },

  scoreFormatting: (resumeData) => {
    try {
      let formattingScore = 20;

      // Deduct points for missing sections
      if (!resumeData.experience?.length) formattingScore -= 8;
      if (!resumeData.education?.length) formattingScore -= 5;
      if (!resumeData.skills?.length) formattingScore -= 7;

      return Math.max(0, formattingScore);
    } catch (error) {
      console.error('Formatting Score Error:', error);
      throw error;
    }
  },

  scoreReadability: (resumeText) => {
    try {
      let readabilityScore = 10;
      
      // Check for common ATS issues
      if (resumeText.includes('image') || resumeText.includes('table')) {
        readabilityScore -= 4;
      }
      
      if (resumeText.length < 100) {
        readabilityScore -= 3;
      }

      return Math.max(0, readabilityScore);
    } catch (error) {
      console.error('Readability Score Error:', error);
      throw error;
    }
  }
};

module.exports = atsCalculator;
