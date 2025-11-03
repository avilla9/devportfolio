import { Component, ChangeDetectionStrategy, inject, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../core/services/data.service';
import { UiButtonComponent } from '../../../shared/ui/ui-button/ui-button.component';
import * as THREE from 'three';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, UiButtonComponent],
  template: `
    <section class="relative flex items-center justify-center min-h-screen overflow-hidden">
      <!-- Canvas de Three.js -->
      <canvas #heroCanvas class="absolute top-0 left-0 w-full h-full z-0"></canvas>

      <!-- Contenido -->
      <div class="relative z-10 text-center max-w-4xl mx-auto px-4">
        @if (profile(); as p) {
          <h1 class="text-5xl md:text-7xl font-extrabold font-manrope text-gray-900 dark:text-gray-100">
            {{ p.title }}
          </h1>
          <h2 class="text-2xl md:text-3xl font-light text-[#00ffaa] mt-4 mb-8">
            {{ p.subtitle }}
          </h2>
          <p class="text-xl text-gray-700 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12">
            {{ p.summary }}
          </p>
          <div class="flex justify-center gap-6">
            <ui-button styleType="primary" (click)="goTo(p.linkedinUrl)">LinkedIn</ui-button>
            <ui-button styleType="secondary" (click)="goTo(p.githubUrl)">GitHub</ui-button>
          </div>
        } @else {
          <div class="text-gray-900 dark:text-white" i18n="@@heroLoading">Cargando...</div>
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  dataService = inject(DataService);
  profile = this.dataService.publicProfile;
  @ViewChild('heroCanvas') private canvasRef!: ElementRef;

  // --- Lógica de Three.js ---
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private points!: THREE.Points;
  private mouseX = 0;
  private mouseY = 0;
  private windowHalfX = window.innerWidth / 2;
  private windowHalfY = window.innerHeight / 2;

  ngAfterViewInit() {
    this.initThreeJS();
    this.animate();
  }

  ngOnDestroy() {
    this.stopThreeJS();
  }

  initThreeJS() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1000;

    const particles = 5000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particles * 3);

    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = Math.random() * 2000 - 1000;
      positions[i + 1] = Math.random() * 2000 - 1000;
      positions[i + 2] = Math.random() * 2000 - 1000;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ color: 0x00ffaa, size: 2 });
    this.points = new THREE.Points(geometry, material);
    this.scene.add(this.points);

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvasRef.nativeElement, antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    document.addEventListener('mousemove', this.onDocumentMouseMove, false);
    window.addEventListener('resize', this.onWindowResize, false);
  }

  onWindowResize = () => {
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  onDocumentMouseMove = (event: MouseEvent) => {
    this.mouseX = event.clientX - this.windowHalfX;
    this.mouseY = event.clientY - this.windowHalfY;
  }

  animate = () => {
    requestAnimationFrame(this.animate);
    this.render();
  }

  render() {
    const time = Date.now() * 0.00005;
    this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
    this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.05;
    this.camera.lookAt(this.scene.position);

    const h = (360 * (1.0 + time) % 360) / 360;
    (this.points.material as THREE.PointsMaterial).color.setHSL(h, 0.5, 0.5);

    this.renderer.render(this.scene, this.camera);
  }

  stopThreeJS() {
    document.removeEventListener('mousemove', this.onDocumentMouseMove, false);
    window.removeEventListener('resize', this.onWindowResize, false);
  }

  goTo(url: string) {
    window.open(url, '_blank');
  }
}