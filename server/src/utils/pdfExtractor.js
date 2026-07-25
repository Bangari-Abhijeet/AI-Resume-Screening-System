// PDF and DOCX Resume Parser Utility

const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');

const pdfExtractor = {
  extractTextFromPDF: async (filePath) => {
    try {
      const fileBuffer = fs.readFileSync(filePath);
      const data = await pdfParse(fileBuffer);
      return data.text || '';
    } catch (error) {
      console.error('PDF Extraction Error:', error);
      throw error;
    }
  },

  extractTextFromDocx: async (filePath) => {
    try {
      const buffer = fs.readFileSync(filePath);
      const result = await mammoth.extractRawText({ buffer });
      return result.value || '';
    } catch (error) {
      console.error('DOCX Extraction Error:', error);
      throw error;
    }
  },

  extractTextFromFile: async (filePath) => {
    try {
      const ext = path.extname(filePath).toLowerCase();

      if (ext === '.pdf') {
        return await pdfExtractor.extractTextFromPDF(filePath);
      }

      if (ext === '.docx' || ext === '.doc') {
        return await pdfExtractor.extractTextFromDocx(filePath);
      }

      throw new Error('Unsupported file format');
    } catch (error) {
      console.error('Extract Text From File Error:', error);
      throw error;
    }
  },

  parseResumeData: (extractedText) => {
    try {
      if (!extractedText || !extractedText.trim()) {
        return {
          fullName: '',
          email: '',
          phone: '',
          location: '',
          summary: '',
          experience: [],
          education: [],
          skills: [],
          projects: [],
          certifications: []
        };
      }

      const text = extractedText.replace(/\r/g, ' ').replace(/\t/g, ' ').replace(/ +/g, ' ');
      const lines = text.split(/\n|\r/).map(line => line.trim()).filter(Boolean);
      const lowerText = text.toLowerCase();

      const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
      const phoneMatch = text.match(/(\+?\d[\d .\-()]{7,}\d)/);
      const locationMatch = text.match(/(city|location|based in|located in)[:\s]*([A-Za-z ,]+)/i);

      const fullName = lines.find(line => line.split(' ').length >= 2 && line.split(' ').length <= 5 && !/@/.test(line) && !/\d/.test(line)) || '';
      const summaryLine = lines.slice(1, 5).find(line => line.length > 50 && !/experience|education|skills|projects|certifications/i.test(line)) || '';

      const extractSection = (titles) => {
        const sectionIndex = lines.findIndex(line => titles.some(title => line.toLowerCase().includes(title)));
        if (sectionIndex === -1) {
          return [];
        }

        const nextSectionIndex = lines.slice(sectionIndex + 1).findIndex(line => /experience|education|skills|projects|certifications|summary|contact|profile|professional/i.test(line.toLowerCase()));
        const endIndex = nextSectionIndex === -1 ? lines.length : sectionIndex + 1 + nextSectionIndex;
        return lines.slice(sectionIndex + 1, endIndex);
      };

      const splitItems = (sectionLines) => {
        const items = [];
        let current = [];

        sectionLines.forEach(line => {
          if (/^[-*•]/.test(line) || line.match(/\b\d{4}\b/) || line.toLowerCase().includes('responsible') || line.toLowerCase().includes('managed')) {
            if (current.length) {
              items.push(current.join(' '));
              current = [];
            }
            current.push(line.replace(/^[-*•]\s*/, ''));
          } else {
            current.push(line);
          }
        });

        if (current.length) {
          items.push(current.join(' '));
        }

        return items.filter(item => item.length > 20);
      };

      const extractItemsByKeyword = (keywords) => {
        const section = extractSection(keywords);
        const items = splitItems(section);
        return items.map(item => item.trim()).filter(item => item);
      };

      const skillsText = extractSection(['skills', 'technical skills', 'skill set']);
      const skillCandidates = skillsText.join(' ').split(/[,;\|]/).map(s => s.trim()).filter(s => s.length > 2);
      const commonSkills = [
        'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Python', 'Django', 'SQL', 'NoSQL',
        'TypeScript', 'HTML', 'CSS', 'AWS', 'Docker', 'Kubernetes', 'Java', 'C#', 'Git', 'REST',
        'GraphQL', 'Machine Learning', 'Data Analysis', 'TensorFlow', 'NLP', 'Tableau', 'Power BI',
        'Leadership', 'Communication', 'Project Management'
      ];

      const detectedSkills = new Set(
        skillCandidates
          .map(skill => skill.replace(/[^a-zA-Z0-9+.# ]/g, '').trim())
          .filter(Boolean)
      );

      commonSkills.forEach(skill => {
        if (lowerText.includes(skill.toLowerCase())) {
          detectedSkills.add(skill);
        }
      });

      const experience = extractItemsByKeyword(['experience', 'work experience', 'professional experience']).slice(0, 5);
      const education = extractItemsByKeyword(['education', 'academic', 'qualifications']).slice(0, 5);
      const projects = extractItemsByKeyword(['projects', 'project experience', 'selected projects']).slice(0, 5);
      const certifications = extractItemsByKeyword(['certifications', 'certification', 'licenses']).slice(0, 5);

      const parsedData = {
        fullName: fullName || '',
        email: emailMatch ? emailMatch[0] : '',
        phone: phoneMatch ? phoneMatch[0].trim() : '',
        location: locationMatch ? locationMatch[2].trim() : '',
        summary: summaryLine || lines.slice(1, 4).join(' '),
        experience: experience.map(item => ({ title: '', description: item })),
        education: education.map(item => ({ degree: item })),
        skills: Array.from(detectedSkills).slice(0, 30),
        projects: projects.map(item => ({ title: '', description: item })),
        certifications: certifications.map(item => ({ name: item }))
      };

      return parsedData;
    } catch (error) {
      console.error('Resume Parsing Error:', error);
      throw error;
    }
  }
};

module.exports = pdfExtractor;
