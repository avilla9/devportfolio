import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectEntry } from '../../../core/interfaces/portfolio.model';
import { UiCardComponent } from '../ui-card/ui-card.component';

@Component({
  selector: 'ui-project-card',
  standalone: true,
  imports: [CommonModule, UiCardComponent],
  template: `
    <ui-card additionalClasses="h-full overflow-hidden group transition-all duration-300 transform hover:translate-y-[-5px] hover:border-[#00ffaa]/50">
      <div class="overflow-hidden rounded-lg mb-6">
        <img [src]="project().imageUrl" [alt]="project().title" class="w-full aspect-video object-cover transition-all duration-500 group-hover:scale-110" />
      </div>
      <h4 class="text-2xl font-bold font-manrope text-gray-100 mb-2">{{ project().title }}</h4>
      <p class="text-gray-400 text-lg font-light leading-relaxed mb-6">{{ project().description }}</p>

      <div class="flex flex-wrap gap-2 mb-6">
        @for (tag of project().tags; track tag) {
          <span class="bg-[#00ffaa]/10 text-[#00ffaa] text-xs font-semibold px-3 py-1 rounded-full">{{ tag }}</span>
        }
      </div>

      <div class="flex gap-4 mt-auto">
        @if (project().githubUrl) {
          <a [href]="project().githubUrl" target="_blank" class="text-gray-400 hover:text-[#00ffaa] transition-colors">GitHub</a>
        }
        @if (project().demoUrl) {
          <a [href]="project().demoUrl" target="_blank" class="text-gray-400 hover:text-[#00ffaa] transition-colors">Demo</a>
        }
      </div>
    </ui-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiProjectCardComponent {
  project = input.required<ProjectEntry>();
}
