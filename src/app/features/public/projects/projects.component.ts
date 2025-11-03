import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../core/services/data.service';
import { UiProjectCardComponent } from '../../../shared/ui/ui-project-card/ui-project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, UiProjectCardComponent],
  template: `
    <section id="projects" class="py-24 bg-white dark:bg-gray-900/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 class="text-4xl font-bold font-manrope text-center text-gray-900 dark:text-gray-100 mb-16" i18n="@@projectsTitle">
          Proyectos de Alto Impacto
        </h3>

        @if (dataService.dataReady()) {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (project of projects(); track project.id) {
              <ui-project-card [project]="project" />
            }
          </div>
        } @else {
          <ng-container>
            <div i18n="@@projectsLoading">Cargando proyectos...</div>
          </ng-container>
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  dataService = inject(DataService);
  projects = this.dataService.publicProjects;
}