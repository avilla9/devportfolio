import { PortfolioData } from './portfolio.model';

export const DEFAULT_PORTFOLIO_DATA_ES: PortfolioData = {
  profile: {
    title: 'Armando Villanueva',
    subtitle: 'Ingeniero de Software Senior | Líder Técnico | Especialista en Escalabilidad y Automatización Avanzada',
    summary: 'Líder Técnico e Ingeniero Full-Stack Senior con más de 7 años de experiencia, especializado en Conceptos de Arquitectura Cloud-Native, Escalabilidad y prácticas DevSecOps. Experiencia en Python, TypeScript, PHP, Laravel, Angular y React. Enfocado en la integración de soluciones de IA Generativa a través de Chatbots personalizados y automatización avanzada de procesos (n8n) para lograr una eficiencia operativa significativa y optimizar los costos de infraestructura.',
    githubUrl: 'https://github.com/avilla9',
    linkedinUrl: 'https://linkedin.com/in/armandojvillanueva',
    email: 'armandojvilla9@gmail.com',
  },
  experience: [
    {
      id: 'exp-1',
      company: 'Red Científica Peruana',
      role: 'Ingeniero Back End (Enfoque en Liderazgo Técnico)',
      dates: 'Oct 2024 - Presente',
      achievements: [
        'Lideré la dirección técnica y formé a ingenieros junior en Microservicios y arquitectura limpia.',
        'Logré $4,500/mes en ahorros operativos automatizando procesos de datos complejos mediante flujos de trabajo n8n personalizados.',
        'Reduje la latencia de actualización en un 60% para cumplir con un SLA de &lt;120 segundos.',
        'Diseñé e implementé Microservicios usando PHP/Laravel para gestionar la interpretación de datos de alto volumen.',
      ],
    },
    {
      id: 'exp-2',
      company: 'Quality Compusoft',
      role: 'Ingeniero Full Stack',
      dates: 'Ago 2022 - Dic 2024',
      achievements: [
        'Lideré la arquitectura y entrega de dos aplicaciones principales (CRM y plataforma de streaming), soportando a más de 15,000 usuarios veterinarios.',
        'Diseñé APIs RESTful robustas y escalables con Laravel y PostgreSQL, soportando cargas pico de 10K solicitudes/minuto.',
        'Desarrollé soluciones de IA conversacional, incluyendo Chatbots personalizados, mejorando el tiempo de respuesta al cliente en un 25%.',
      ],
    },
    {
      id: 'exp-3',
      company: 'Hakuna Consulting',
      role: 'Director de Tecnología (CTO)',
      dates: 'Jul 2021 - Abr 2022',
      achievements: [
        'Dirigí un equipo de tres desarrolladores y definí la hoja de ruta técnica completa para más de 5 proyectos de clientes.',
        'Diseñé e implementé una Arquitectura de Microservicios utilizando Node.js y Docker.',
        'Logré una reducción del 12% en los costos de alojamiento del cliente aprovechando los conceptos Serverless y la contenerización.',
      ],
    },
    {
      id: 'exp-4',
      company: 'Multifiber',
      role: 'Desarrollador Full Stack',
      dates: 'Oct 2019 - Sep 2020',
      achievements: [
        'Implementé procesos asíncronos usando Redis y Celery dentro de un framework Django para optimizar la generación de informes financieros de alto volumen en un 50%.',
      ],
    },
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'Centro de Automatización con IA (n8n)',
      description: 'Plataforma que integra n8n con LLMs para automatizar tareas complejas de back-office, logrando una reducción del 90% en el esfuerzo manual. Demuestra maestría en automatización y ahorro de costos.',
      tags: ['n8n', 'Node.js', 'IA Generativa', 'TypeScript', 'Docker', 'Automatización'],
      imageUrl: 'https://placehold.co/800x600/161b22/00ffaa?text=AI+Automation+Hub',
      demoUrl: '#',
      githubUrl: 'https://github.com/avilla9',
    },
    {
      id: 'proj-2',
      title: 'Plantilla de Microservicios Escalables (Python)',
      description: 'Una plantilla de microservicios lista para producción basada en Python (Django/FastAPI) y Docker, diseñada para alta disponibilidad (HA) y escalabilidad horizontal.',
      tags: ['Python', 'Django', 'FastAPI', 'Microservicios', 'Docker', 'CI/CD'],
      imageUrl: 'https://placehold.co/800x600/161b22/00ffaa?text=Microservice+Arch',
      demoUrl: '#',
      githubUrl: 'https://github.com/avilla9',
    },
    {
      id: 'proj-3',
      title: 'Plataforma de Streaming en Tiempo Real (Laravel/Angular)',
      description: 'Lideré la arquitectura de una plataforma de video streaming en tiempo real, incluyendo un Microservicio PHP que utiliza FFmpeg para una transcodificación eficiente de contenido.',
      tags: ['Laravel', 'PHP', 'Angular', 'FFmpeg', 'Streaming', 'Microservicios'],
      imageUrl: 'https://placehold.co/800x600/161b22/00ffaa?text=Streaming+Platform',
      demoUrl: '#',
      githubUrl: 'https://github.com/avilla9',
    },
  ],
  skills: [
    { id: 's-1', name: 'Flujos de Trabajo n8n', category: 'AI/Automation', level: 98 },
    { id: 's-2', name: 'Desarrollo de Chatbots', category: 'AI/Automation', level: 90 },
    { id: 's-3', name: 'Integración de IA Generativa', category: 'AI/Automation', level: 85 },
    { id: 's-4', name: 'Python (Django, FastAPI)', category: 'Backend/Data', level: 95 },
    { id: 's-5', name: 'TypeScript / Node.js', category: 'Backend/Data', level: 92 },
    { id: 's-6', name: 'PHP (Laravel, Symfony)', category: 'Backend/Data', level: 88 },
    { id: 's-7', name: 'Pipelines de Datos', category: 'Backend/Data', level: 80 },
    { id: 's-8', name: 'Angular', category: 'Frontend', level: 95 },
    { id: 's-9', name: 'React / Ionic', category: 'Frontend', level: 80 },
    { id: 's-10', name: 'RxJS / NgRx', category: 'Frontend', level: 85 },
    { id: 's-11', name: 'Docker / CI/CD', category: 'Infra/DevOps', level: 90 },
    { id: 's-12', name: 'Firebase / Serverless', category: 'Infra/DevOps', level: 85 },
    { id: 's-13', name: 'Arquitectura de Microservicios', category: 'Infra/DevOps', level: 94 },
  ],
  settings: {
    theme: 'dark',
  },
};