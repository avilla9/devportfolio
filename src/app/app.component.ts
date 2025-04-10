// app.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Armando Villanueva - Software Engineer';

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    this.initAnimations();
  }

  initAnimations() {
    gsap.from('section', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: 'section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  }
}
