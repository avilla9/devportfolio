import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { UiButtonComponent } from '../../../shared/ui/ui-button/ui-button.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, AdminDashboardComponent, UiButtonComponent],
  template: `
    <div class="flex min-h-screen bg-gray-950 text-gray-300">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-900 p-6 border-r border-gray-800 flex flex-col">
        <h1 class="text-2xl font-bold font-manrope text-[#00ffaa] mb-8">P-CMS-AV20</h1>
        <nav class="flex-grow">
          <ul>
            <li><a href="#" class="block py-2 px-3 bg-gray-800 text-white rounded-md">Editar Portafolio</a></li>
          </ul>
        </nav>
        <ui-button styleType="secondary" (click)="authService.logout()">Logout</ui-button>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-8 overflow-auto">
        <app-admin-dashboard />
      </main>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminLayoutComponent {
  authService = inject(AuthService);
}
