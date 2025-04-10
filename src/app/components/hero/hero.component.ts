// components/hero/hero.component.ts
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @ViewChild('heroContent') heroContent!: ElementRef;
  @ViewChild('particles') particles!: ElementRef;

  ngOnInit() {
    this.initParticles();
    this.initHeroAnimation();
  }

  initParticles() {
    const count = 50;
    const particlesEl = this.particles.nativeElement;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.width = `${Math.random() * 8 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.background = `hsl(${Math.random() * 60 + 200}, 100%, 70%)`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;

      gsap.to(particle, {
        x: `${Math.random() * 200 - 100}px`,
        y: `${Math.random() * 200 - 100}px`,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      particlesEl.appendChild(particle);
    }
  }

  initHeroAnimation() {
    gsap.from(this.heroContent.nativeElement.children, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out'
    });
  }
}
