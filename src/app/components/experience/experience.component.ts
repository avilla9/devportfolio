// components/experience/experience.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  expandedItems: {[key: number]: boolean} = {};
  experiences: Experience[] = [
    {
      company: 'Quality Compusoft',
      position: 'Senior Software Engineer',
      period: 'Jan 2023 - Currently',
      description: [
        'Designed and constructed various systems as services, demonstrating proficiency in cloud infrastructure with the creation of content management and streaming platforms.',
        'Developed a B2B application tailored for the medical and veterinary industry.',
        'Implemented SCRUM methodologies and provided effective team leadership.',
        'Collaborated with cross-functional teams including developers, testers, and stakeholders to achieve project objectives.'
      ],
      technologies: ['Angular', 'Laravel', 'AWS', 'Docker', 'Microservices']
    },
    {
      company: 'Hound',
      position: 'Frontend Engineer',
      period: 'Feb 2023 – Jul 2023',
      description: [
        'Contributed to design and development by utilizing Angular and TypeScript on redux architecture.',
        'Translated design concepts into functional interfaces through the creation of wireframes, mockups, and prototypes.',
        'Collaborated with UX/UI designers to ensure alignment with user needs and requirements.',
        'Ensured application quality through rigorous testing and debugging.'
      ],
      technologies: ['Angular', 'TypeScript', 'Redux', 'RxJS', 'Jest']
    },
    {
      company: 'On Diversity',
      position: 'Backend Engineer',
      period: 'Aug 2022 – Jan 2023',
      description: [
        'Focused on the development and optimization of backend systems for a CRM solution using Laravel and Nodejs.',
        'Designed and implemented APIs, enhanced storage, security, and server infrastructure.',
        'Architected efficient databases through normalization and optimization.',
        'Created comprehensive API documentation and implemented asynchronous task scheduling to optimize workflow efficiency.'
      ],
      technologies: ['Laravel', 'Node.js', 'MySQL', 'API Design', 'Redis']
    },
    {
      company: 'Lienzo Estudio',
      position: 'Tech Leader',
      period: 'Dec 2021 – Aug 2022',
      description: [
        'Architected a versatile content management system that seamlessly integrated with various applications.',
        'Built hybrid apps using Laravel and Ionic with Angular and React, as well as an ecommerce app based on a WordPress catalog.',
        'Created technical proposals and selected technology for projects.',
        'Managed a team of developers, overseeing the successful deployment of PWA, Android, and iOS applications.'
      ],
      technologies: ['Laravel', 'Ionic', 'Angular', 'React', 'WordPress']
    },
    {
      company: 'Hakuna Consulting',
      position: 'Chief Technology Officer',
      period: 'Jul 2021 – Apr 2022',
      description: [
        'Oversaw the technology department, leading a team of three developers while effectively translating customer needs into technical solutions.',
        'Developed web and hybrid mobile applications using contemporary frameworks.',
        'Configured and managed cloud infrastructure for optimal scalability and security.',
        'Drove technological strategy and execution with a commitment to innovation and technical excellence.'
      ],
      technologies: ['Leadership', 'Cloud Architecture', 'Mobile Development', 'Strategic Planning']
    },
    {
      company: 'Webimpacto',
      position: 'Web Developer',
      period: 'Sep 2020 – Aug 2021',
      description: [
        'Contributed significantly to the development and customization of ecommerce platforms.',
        'Tailored modules, plugins, and pages to meet specific client requirements.',
        'Designed landing page mockups and managed a team of six developers.',
        'Ensured project quality and timely delivery of innovative web development solutions.'
      ],
      technologies: ['eCommerce', 'PHP', 'JavaScript', 'Team Management', 'WordPress']
    },
    {
      company: 'Multifiber',
      position: 'Software Developer',
      period: 'Oct 2019 – Sep 2020',
      description: [
        'Spearheaded the development of a digital invoicing control panel and a financial microservice.',
        'Architected a financial system capable of handling billing processes, generating reports, and integrating with external SOAP and REST web services.',
        'Implemented asynchronous processes leveraging Redis and Celery within a Django framework.',
        'Constructed a financial control panel using Angular and TypeScript.'
      ],
      technologies: ['Django', 'Angular', 'Redis', 'Celery', 'Financial Systems']
    },
    {
      company: 'Maritime university of the Caribbean',
      position: 'Web Developer',
      period: 'Jul 2018 – Jan 2020',
      description: [
        'Architected a disciplinary management system utilizing AngularJS and Tailwind CSS.',
        'Migrated the teaching management system to an enhanced version.',
        'Developed an SQL data model for academic planning and projection.',
        'Constructed a student identification card system using Laravel and Angular.'
      ],
      technologies: ['AngularJS', 'Laravel', 'SQL', 'Tailwind CSS', 'System Migration']
    }
  ];

  toggleItem(index: number): void {
    this.expandedItems[index] = !this.expandedItems[index];
  }
}
