import { Component, ChangeDetectionStrategy, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './core/services/auth.service';
import { ThemeService } from './core/services/theme.service';
import { PublicLayoutComponent } from './features/public/public-layout/public-layout.component';
import { LoginComponent } from './features/admin/login/login.component';
import { AdminLayoutComponent } from './features/admin/admin-layout/admin-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PublicLayoutComponent, LoginComponent, AdminLayoutComponent],
  template: `
    <!-- 
      NOTA DE PRODUCCIÓN: 
      Estos scripts y configuraciones deben ser añadidos a 'angular.json' y 'index.html'
      en un proyecto real de Angular CLI. Se incluyen aquí para que el prompt
      funcione sin intervención humana.
    -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
      tailwind.config = {
        darkMode: 'class',
        theme: {
          extend: {
            colors: {
              'neon': '#00ffaa',
            },
            fontFamily: {
              sans: ['Inter', 'Manrope', 'sans-serif'],
            }
          }
        }
      }
    </script>

    <!-- Lógica de Enrutamiento Mock Principal -->
    @if (currentPath() === '/admin') {
      @if (isAuthenticated()) {
        <app-admin-layout />
      } @else {
        <app-login />
      }
    } @else {
      <app-public-layout />
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'devportfolio';
  authService = inject(AuthService);
  themeService = inject(ThemeService); // Inyectar para inicializar el efecto del tema

  isAuthenticated = this.authService.isAuthenticated; // Signal read-only
  currentPath = signal(window.location.pathname);

  private popstateListener = () => this.currentPath.set(window.location.pathname);

  ngOnInit() {
    // Escuchar cambios en la URL (botones atrás/adelante)
    window.addEventListener('popstate', this.popstateListener);

    // Simular navegación (para que el usuario pueda escribir /admin en la URL)
    // En un proyecto real, esto sería manejado por Angular Router
    const path = window.location.pathname;
    if (path !== this.currentPath()) {
      this.currentPath.set(path);
    }
  }

  ngOnDestroy() {
    window.removeEventListener('popstate', this.popstateListener);
  }
}