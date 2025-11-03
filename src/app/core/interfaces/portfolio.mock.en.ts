import { PortfolioData } from './portfolio.model';

export const DEFAULT_PORTFOLIO_DATA_EN: PortfolioData = {
  profile: {
    title: 'Armando Villanueva',
    subtitle: 'Senior Software Engineer | Technical Lead | Scalability & Advanced Automation Specialist',
    summary: 'Technical Leader and Senior Full-Stack Engineer with 7+ years of experience specializing in Cloud-Native Architecture Concepts, Scalability, and DevSecOps practices. Expertise spans Python, TypeScript, PHP, Laravel, Angular, and React. Focused on integrating Generative AI solutions via custom Chatbots and advanced process automation (n8n) to achieve significant operational efficiency and optimize infrastructure costs.',
    githubUrl: 'https://github.com/avilla9',
    linkedinUrl: 'https://linkedin.com/in/armandojvillanueva',
    email: 'armandojvilla9@gmail.com',
  },
  experience: [
    {
      id: 'exp-1',
      company: 'Red Científica Peruana',
      role: 'Back End Engineer (Technical Leadership Focus)',
      dates: 'Oct 2024 - Present',
      achievements: [
        'Spearheaded the technical direction and mentored junior engineers on Microservices and clean architecture.',
        'Achieved $4,500/month in operational savings by automating complex data processes via custom n8n workflows.',
        'Reduced update latency by 60% to meet a <120 second SLA.',
        'Architected and implemented Microservices using PHP/Laravel to manage high-volume data interpretation.',
      ],
    },
    {
      id: 'exp-2',
      company: 'Quality Compusoft',
      role: 'Full Stack Engineer',
      dates: 'Aug 2022 - Dec 2024',
      achievements: [
        'Led the architecture and end-to-end delivery of two major applications (CRM & streaming platform), supporting 15,000+ veterinary users.',
        'Engineered robust, scalable RESTful APIs with Laravel and PostgreSQL, supporting peak loads of 10K requests/minute.',
        'Developed conversational AI solutions, including custom Chatbots, improving customer response time by 25%.',
      ],
    },
    {
      id: 'exp-3',
      company: 'Hakuna Consulting',
      role: 'Chief Technology Officer (CTO)',
      dates: 'Jul 2021 - Apr 2022',
      achievements: [
        'Directed a team of three developers and defined the entire technical roadmap for 5+ client projects.',
        'Designed and implemented a Microservices Architecture utilizing Node.js and Docker.',
        'Achieved 12% reduction in client hosting costs by leveraging Serverless concepts and containerization.',
      ],
    },
    {
      id: 'exp-4',
      company: 'Multifiber',
      role: 'Full Stack Developer',
      dates: 'Oct 2019 - Sep 2020',
      achievements: [
        'Implemented asynchronous processes using Redis and Celery within a Django framework to optimize high-volume financial report generation by 50%.',
      ],
    },
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'AI-Powered Automation Hub (n8n)',
      description: 'Platform integrating n8n with LLMs to automate complex back-office tasks, achieving a 90% reduction in manual effort. Demonstrates mastery in automation and cost-saving.',
      tags: ['n8n', 'Node.js', 'Generative AI', 'TypeScript', 'Docker', 'Automation'],
      imageUrl: 'https://placehold.co/800x600/161b22/00ffaa?text=AI+Automation+Hub',
      demoUrl: '#',
      githubUrl: 'https://github.com/avilla9',
    },
    {
      id: 'proj-2',
      title: 'Scalable Microservices Boilerplate (Python)',
      description: 'A production-ready microservices template based on Python (Django/FastAPI) and Docker, designed for high availability (HA) and horizontal scalability.',
      tags: ['Python', 'Django', 'FastAPI', 'Microservices', 'Docker', 'CI/CD'],
      imageUrl: 'https://placehold.co/800x600/161b22/00ffaa?text=Microservice+Arch',
      demoUrl: '#',
      githubUrl: 'https://github.com/avilla9',
    },
    {
      id: 'proj-3',
      title: 'Real-time Streaming Platform (Laravel/Angular)',
      description: 'Led the architecture for a real-time video streaming platform, including a PHP Microservice utilizing FFmpeg for efficient content transcoding.',
      tags: ['Laravel', 'PHP', 'Angular', 'FFmpeg', 'Streaming', 'Microservices'],
      imageUrl: 'https://placehold.co/800x600/161b22/00ffaa?text=Streaming+Platform',
      demoUrl: '#',
      githubUrl: 'https://github.com/avilla9',
    },
  ],
  skills: [
    { id: 's-1', name: 'n8n Workflows', category: 'AI/Automation', level: 98 },
    { id: 's-2', name: 'Chatbot Development', category: 'AI/Automation', level: 90 },
    { id: 's-3', name: 'Generative AI Integration', category: 'AI/Automation', level: 85 },
    { id: 's-4', name: 'Python (Django, FastAPI)', category: 'Backend/Data', level: 95 },
    { id: 's-5', name: 'TypeScript / Node.js', category: 'Backend/Data', level: 92 },
    { id: 's-6', name: 'PHP (Laravel, Symfony)', category: 'Backend/Data', level: 88 },
    { id: 's-7', name: 'Data Pipelines', category: 'Backend/Data', level: 80 },
    { id: 's-8', name: 'Angular', category: 'Frontend', level: 95 },
    { id: 's-9', name: 'React / Ionic', category: 'Frontend', level: 80 },
    { id: 's-10', name: 'RxJS / NgRx', category: 'Frontend', level: 85 },
    { id: 's-11', name: 'Docker / CI/CD', category: 'Infra/DevOps', level: 90 },
    { id: 's-12', name: 'Firebase / Serverless', category: 'Infra/DevOps', level: 85 },
    { id: 's-13', name: 'Microservices Architecture', category: 'Infra/DevOps', level: 94 },
  ],
  settings: {
    theme: 'dark',
  },
};