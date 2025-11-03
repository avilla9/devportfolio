import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../core/services/data.service';
import { UiTimelineNodeComponent } from '../../../shared/ui/ui-timeline-node/ui-timeline-node.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, UiTimelineNodeComponent],
  template: `
    <section id="experience" class="py-24 bg-white dark:bg-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 class="text-4xl font-bold font-manrope text-center text-gray-900 dark:text-gray-100 mb-16" i18n="@@experienceTitle">
          Experiencia &amp; Liderazgo de Impacto
        </h3>

        <div class="max-w-3xl mx-auto">
          @if (dataService.dataReady()) {
            @for (entry of experience(); track entry.id) {
              <ui-timeline-node [entry]="entry" />
            }
          } @else {
            <div i18n="@@experienceLoading">Cargando experiencia...</div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  dataService = inject(DataService);
  experience = this.dataService.publicExperience;
}