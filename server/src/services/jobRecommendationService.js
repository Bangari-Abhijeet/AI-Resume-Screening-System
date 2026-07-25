// Job Recommendation Service

const defaultJobs = [
  {
    id: 'job-1',
    title: 'Frontend Developer',
    company: 'NexaTech',
    location: 'Remote',
    salary: '$70k - $95k',
    experience: '2-4 years',
    skillsRequired: ['JavaScript', 'React', 'HTML', 'CSS', 'Git'],
    applicationLink: 'https://jobs.example.com/apply/1',
    description: 'Design interactive web applications with modern frontend technologies.'
  },
  {
    id: 'job-2',
    title: 'Backend Engineer',
    company: 'CloudScale',
    location: 'San Francisco, CA',
    salary: '$90k - $120k',
    experience: '3-5 years',
    skillsRequired: ['Node.js', 'Express', 'MongoDB', 'REST', 'AWS'],
    applicationLink: 'https://jobs.example.com/apply/2',
    description: 'Build scalable backend services and APIs for enterprise applications.'
  },
  {
    id: 'job-3',
    title: 'Data Analyst',
    company: 'InsightWorks',
    location: 'New York, NY',
    salary: '$65k - $85k',
    experience: '1-3 years',
    skillsRequired: ['SQL', 'Excel', 'Tableau', 'Data Analysis', 'Python'],
    applicationLink: 'https://jobs.example.com/apply/3',
    description: 'Analyze business data, produce dashboards, and inform decision-making.'
  },
  {
    id: 'job-4',
    title: 'Machine Learning Engineer',
    company: 'AIMatrix',
    location: 'Austin, TX',
    salary: '$110k - $140k',
    experience: '4-6 years',
    skillsRequired: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Machine Learning'],
    applicationLink: 'https://jobs.example.com/apply/4',
    description: 'Design and deploy machine learning pipelines for production systems.'
  },
  {
    id: 'job-5',
    title: 'DevOps Engineer',
    company: 'InfraFlow',
    location: 'Seattle, WA',
    salary: '$100k - $130k',
    experience: '3-5 years',
    skillsRequired: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Terraform'],
    applicationLink: 'https://jobs.example.com/apply/5',
    description: 'Automate infrastructure deployments and improve release velocity.'
  },
  {
    id: 'job-6',
    title: 'Product Manager',
    company: 'Visionary Labs',
    location: 'Remote',
    salary: '$95k - $125k',
    experience: '3-5 years',
    skillsRequired: ['Product Management', 'Roadmapping', 'Communication', 'Agile'],
    applicationLink: 'https://jobs.example.com/apply/6',
    description: 'Guide product strategy and collaborate with engineers, designers, and stakeholders.'
  },
  {
    id: 'job-7',
    title: 'UI/UX Designer',
    company: 'DesignPulse',
    location: 'Boston, MA',
    salary: '$70k - $92k',
    experience: '2-4 years',
    skillsRequired: ['Figma', 'UI Design', 'UX Research', 'Prototyping', 'User Testing'],
    applicationLink: 'https://jobs.example.com/apply/7',
    description: 'Craft clean, user-centric interfaces for web and mobile products.'
  },
  {
    id: 'job-8',
    title: 'Full Stack Developer',
    company: 'BlueWave',
    location: 'Chicago, IL',
    salary: '$85k - $115k',
    experience: '3-5 years',
    skillsRequired: ['JavaScript', 'Node.js', 'React', 'MongoDB', 'REST APIs'],
    applicationLink: 'https://jobs.example.com/apply/8',
    description: 'Build end-to-end applications with strong frontend and backend expertise.'
  },
  {
    id: 'job-9',
    title: 'Data Engineer',
    company: 'StreamWorks',
    location: 'Denver, CO',
    salary: '$95k - $125k',
    experience: '3-6 years',
    skillsRequired: ['Python', 'SQL', 'ETL', 'AWS', 'Spark'],
    applicationLink: 'https://jobs.example.com/apply/9',
    description: 'Build data pipelines and optimize data access for analytics teams.'
  },
  {
    id: 'job-10',
    title: 'Quality Assurance Engineer',
    company: 'TestLabs',
    location: 'Remote',
    salary: '$60k - $80k',
    experience: '1-3 years',
    skillsRequired: ['Test Automation', 'Selenium', 'JavaScript', 'API Testing', 'Quality Assurance'],
    applicationLink: 'https://jobs.example.com/apply/10',
    description: 'Develop automated tests and improve software reliability across releases.'
  },
  {
    id: 'job-11',
    title: 'Technical Writer',
    company: 'DocuCraft',
    location: 'Remote',
    salary: '$55k - $75k',
    experience: '1-3 years',
    skillsRequired: ['Technical Writing', 'Research', 'Documentation', 'Communication'],
    applicationLink: 'https://jobs.example.com/apply/11',
    description: 'Write clear technical documentation and onboarding materials for developers.'
  },
  {
    id: 'job-12',
    title: 'Cybersecurity Analyst',
    company: 'SecureOps',
    location: 'Washington, D.C.',
    salary: '$90k - $115k',
    experience: '3-5 years',
    skillsRequired: ['Security', 'Risk Assessment', 'Network Security', 'Compliance'],
    applicationLink: 'https://jobs.example.com/apply/12',
    description: 'Protect systems and identify security issues across production environments.'
  }
];

const normalizeText = (value) => String(value || '').toLowerCase();

const scoreJobMatch = (parsedData, job) => {
  const resumeSkills = new Set((parsedData.skills || []).map(skill => normalizeText(skill)));
  const matchedSkills = job.skillsRequired.filter(skill => resumeSkills.has(normalizeText(skill)));
  const skillScore = Math.min(60, Math.round((matchedSkills.length / Math.max(job.skillsRequired.length, 1)) * 60));

  const experienceScore = parsedData.experience?.length ? Math.min(20, parsedData.experience.length * 5) : 0;
  const educationScore = parsedData.education?.length ? 10 : 0;

  const matchPercentage = Math.min(100, skillScore + experienceScore + educationScore + 10);

  return {
    ...job,
    matchPercentage,
    matchedSkills,
    missingSkills: job.skillsRequired.filter(skill => !resumeSkills.has(normalizeText(skill)))
  };
};

const generateJobRecommendations = (parsedData = {}) => {
  const rankedJobs = defaultJobs
    .map(job => scoreJobMatch(parsedData, job))
    .sort((a, b) => b.matchPercentage - a.matchPercentage)
    .slice(0, 10);

  return rankedJobs;
};

const searchJobs = ({ keywords = '', location = '', jobType = '' }) => {
  const normalizedKeywords = normalizeText(keywords);
  const normalizedLocation = normalizeText(location);
  const normalizedJobType = normalizeText(jobType);

  const results = defaultJobs.filter(job => {
    const matchesKeyword = normalizedKeywords
      ? normalizeText(job.title).includes(normalizedKeywords) || normalizeText(job.description).includes(normalizedKeywords)
      : true;
    const matchesLocation = normalizedLocation ? normalizeText(job.location).includes(normalizedLocation) : true;
    const matchesJobType = normalizedJobType ? normalizeText(job.title).includes(normalizedJobType) : true;
    return matchesKeyword && matchesLocation && matchesJobType;
  });

  return results;
};

const getJobById = (jobId) => {
  return defaultJobs.find(job => job.id === jobId) || null;
};

const matchResumeWithJob = (parsedData, job) => {
  if (!job) {
    return {
      matchPercentage: 0,
      matchedSkills: [],
      missingSkills: []
    };
  }

  const recommendation = scoreJobMatch(parsedData, job);
  return {
    matchPercentage: recommendation.matchPercentage,
    matchedSkills: recommendation.matchedSkills,
    missingSkills: recommendation.missingSkills
  };
};

module.exports = {
  generateJobRecommendations,
  searchJobs,
  getJobById,
  matchResumeWithJob
};