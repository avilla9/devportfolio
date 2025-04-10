// components/projects/projects.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  links: {
    demo?: string;
    code?: string;
    caseStudy?: string;
  };
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Medical B2B Platform',
      description: 'A comprehensive B2B application for the medical and veterinary industry with inventory management, ordering system, and analytics dashboard.',
      technologies: ['Angular', 'Laravel', 'AWS', 'Microservices', 'Docker'],
      image: 'medical-b2b.jpg',
      links: {
        demo: '#',
        caseStudy: '#'
      }
    },
    {
      title: 'Content Streaming Platform',
      description: 'A Netflix-like streaming platform with content management, user subscriptions, and recommendation engine.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS Media Services', 'FFmpeg'],
      image: 'streaming-platform.jpg',
      links: {
        demo: '#'
      }
    },
    {
      title: 'CRM Solution',
      description: 'Custom CRM solution with lead management, sales pipeline, and reporting features for diversity-focused organizations.',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'API Design'],
      image: 'crm-solution.jpg',
      links: {
        code: '#'
      }
    },
    {
      title: 'E-commerce Hybrid App',
      description: 'Cross-platform e-commerce application with PWA support, offline capabilities, and WordPress integration.',
      technologies: ['Ionic', 'Angular', 'WordPress', 'PWA', 'Laravel'],
      image: 'ecommerce-app.jpg',
      links: {
        demo: '#',
        code: '#'
      }
    },
    {
      title: 'Financial Control Panel',
      description: 'Digital invoicing system with financial reporting, SOAP/REST integrations, and asynchronous processing.',
      technologies: ['Django', 'Angular', 'Celery', 'Redis', 'SOAP/REST'],
      image: 'financial-panel.jpg',
      links: {
        caseStudy: '#'
      }
    },
    {
      title: 'University Management Systems',
      description: 'Suite of systems for university administration including disciplinary, teaching, and student ID management.',
      technologies: ['Laravel', 'AngularJS', 'MySQL', 'Tailwind CSS', 'System Migration'],
      image: 'university-systems.jpg',
      links: {
        demo: '#'
      }
    }
  ];

  activeFilter: string = 'all';

  filterProjects(filter: string) {
    this.activeFilter = filter;
  }
}
