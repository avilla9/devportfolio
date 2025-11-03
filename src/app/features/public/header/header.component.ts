import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 w-full bg-gray-950/80 backdrop-blur-lg border-b border-gray-800/50">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <a href="#" class="text-2xl font-bold font-manrope text-[#00ffaa]">
            AV.DEV<span class="text-gray-500">_</span>
          </a>
          <!-- Nav Links -->
          <div class="hidden md:flex gap-8 items-center">
            <a href="#experience" class="text-gray-400 hover:text-gray-100 transition-colors">Experiencia</a>
            <a href="#projects" class="text-gray-400 hover:text-gray-100 transition-colors">Proyectos</a>
            <a href="#skills" class="text-gray-400 hover:text-gray-100 transition-colors">Habilidades</a>
            <a href="#contact" class="text-gray-400 hover:text-gray-100 transition-colors">Contacto</a>
            <button (click)="themeService.toggleTheme()" class="text-gray-400 hover:text-[#00ffaa]">
              <!-- Icono de Luna/Sol (simplificado) -->
              @if (themeService.isDark()) {
                <span>Light</span>
              } @else {
                <span>Dark</span>
              }
            </button>
          </div>
        </div>
      </nav>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  themeService = inject(ThemeService);
}
