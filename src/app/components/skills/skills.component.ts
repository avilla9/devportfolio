// components/skills/skills.component.ts
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
getProgressColor(arg0: number) {
throw new Error('Method not implemented.');
}
  @ViewChild('skillsCanvas') private canvasRef!: ElementRef;

  softSkills = [
    { name: 'Leadership', level: 90 },
    { name: 'Teamwork', level: 95 },
    { name: 'Communication', level: 85 },
    { name: 'Decision Making', level: 88 },
    { name: 'Conflict Resolution', level: 82 },
    { name: 'Adaptability', level: 90 },
    { name: 'Active Learning', level: 93 }
  ];

  hardSkills = [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'Angular', level: 98 },
    { name: 'React', level: 85 },
    { name: 'PHP/Laravel', level: 90 },
    { name: 'Python/Django', level: 88 },
    { name: 'Node.js', level: 85 },
    { name: 'SQL/NoSQL', level: 90 },
    { name: 'Docker/CI-CD', level: 80 },
    { name: 'AWS/Cloud', level: 75 }
  ];

  ngOnInit() {
    this.initThreeJS();
  }

  initThreeJS() {
    const canvas = this.canvasRef.nativeElement;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.width, canvas.height);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
    camera.position.z = 5;

    // Create skill spheres
    const skills = [...this.hardSkills, ...this.softSkills];
    const group = new THREE.Group();

    skills.forEach((skill, i) => {
      const radius = 0.1 + (skill.level / 100) * 0.2;
      const geometry = new THREE.SphereGeometry(radius, 32, 32);
      const material = new THREE.MeshPhongMaterial({
        color: this.getColorForSkill(skill.level),
        shininess: 100,
        transparent: true,
        opacity: 0.9
      });
      const sphere = new THREE.Mesh(geometry, material);

      // Position in a spherical layout
      const phi = Math.acos(-1 + (2 * i) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;

      sphere.position.x = 2 * Math.cos(theta) * Math.sin(phi);
      sphere.position.y = 2 * Math.sin(theta) * Math.sin(phi);
      sphere.position.z = 2 * Math.cos(phi);

      sphere.userData = { name: skill.name, level: skill.level };
      group.add(sphere);
    });

    scene.add(group);

    // Add lights
    const light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(1, 1, 1);
    scene.add(light1);

    const light2 = new THREE.AmbientLight(0x404040);
    scene.add(light2);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      group.rotation.x += 0.001;
      group.rotation.y += 0.002;
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    window.addEventListener('resize', () => {
      camera.aspect = canvas.width / canvas.height;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.width, canvas.height);
    });
  }

  getColorForSkill(level: number): number {
    if (level > 90) return 0x4ade80; // Green
    if (level > 80) return 0x60a5fa; // Blue
    if (level > 70) return 0xfbbf24; // Yellow
    return 0xf87171; // Red
  }
}
