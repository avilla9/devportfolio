import { Component, OnInit, inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { AboutComponent } from "../about/about.component";
import { ExperienceComponent } from "../experience/experience.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, AboutComponent, ExperienceComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private meta = inject(Meta);

  // Datos del portafolio
  currentYear = new Date().getFullYear();

  codeLines = [
    'const developer = {',
    '  name: "Armando Villanueva",',
    '  role: "Full Stack Engineer",',
    '  skills: ["Angular", "React", "Node.js", "Laravel", "Python"],',
    '  experience: "6+ years",',
    '  passion: "Creating innovative solutions"',
    '};',
    '',
    'function buildProject() {',
    '  return {',
    '    design: "Modern & Interactive",',
    '    tech: ["Angular 18", "GSAP", "Three.js"],',
    '    goal: "Solve real problems with code"',
    '  };',
    '}',
    '',
    '// Let\'s create something amazing!'
  ];

  techStack = [
    { name: 'Angular', delay: '0s' },
    { name: 'TypeScript', delay: '0.3s' },
    { name: 'React', delay: '0.6s' },
    { name: 'Node.js', delay: '0.9s' },
    { name: 'Laravel', delay: '1.2s' },
    { name: 'Python', delay: '1.5s' },
    { name: 'Django', delay: '1.8s' },
    { name: 'AWS', delay: '2.1s' },
    { name: 'Docker', delay: '2.4s' },
    { name: 'Microservices', delay: '2.7s' }
  ];

  // Efecto de iluminación
  lightPosition = { x: 0, y: 0 };

  ngOnInit() {
    this.setMetaTags();
    this.registerGSAPPlugins();
    this.initAnimations();
    this.initMouseEffect();
  }

  private setMetaTags() {
    this.meta.updateTag({ name: 'description', content: 'Portfolio of Armando Villanueva - Senior Software Engineer with 6+ years of experience' });
    this.meta.updateTag({ property: 'og:title', content: 'Armando Villanueva | Software Engineer' });
    this.meta.updateTag({ property: 'og:description', content: 'Professional portfolio showcasing my projects and skills' });
  }

  private registerGSAPPlugins() {
    gsap.registerPlugin(ScrollTrigger);
  }

  private initAnimations() {
    // Animación de elementos al aparecer
    gsap.utils.toArray('.fade-in').forEach((element: any) => {
      gsap.from(element, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Animación especial para el título
    gsap.from('.hero-title span', {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'back.out(1.2)'
    });
  }

  private initMouseEffect() {
    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('mousemove', this.updateLightPosition.bind(this));
    }
  }

  private updateLightPosition(e: MouseEvent) {
    this.lightPosition = {
      x: (e.clientX / window.innerWidth - 0.5) * 30,
      y: (e.clientY / window.innerHeight - 0.5) * 30
    };
  }

  scrollTo(sectionId: string, event: Event) {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // Actualizar URL sin recargar
    history.pushState(null, '', `#${sectionId}`);
  }
}
