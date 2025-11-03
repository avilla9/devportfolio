import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardComponent } from '../ui-card/ui-card.component';
import { ExperienceEntry } from '../../../core/interfaces/portfolio.model';

@Component({
  selector: 'ui-timeline-node',
  standalone: true,
  imports: [CommonModule, UiCardComponent],
  template: `
    <div class="relative pl-12 pb-12">
      <!-- Círculo y Línea de la Línea de Tiempo -->
      <div class="absolute left-0 top-1 w-0.5 h-full bg-gray-800"></div>
      <div class="absolute left-[-10px] top-1 w-5 h-5 bg-[#00ffaa] rounded-full border-4 border-gray-950 shadow-lg"></div>

      <ui-card additionalClasses="transition-all duration-300 transform hover:border-[#00ffaa]/50 hover:scale-[1.02]">
        <h4 class="text-xl font-bold font-manrope text-gray-100">{{ entry().role }}</h4>
        <div class="flex justify-between items-baseline mb-3">
          <span class="text-md font-semibold text-[#00ffaa]">{{ entry().company }}</span>
          <span class="text-sm text-gray-500">{{ entry().dates }}</span>
        </div>

        <ul class="list-disc list-outside pl-5 space-y-2 mt-4">
          @for (achievement of entry().achievements; track achievement) {
            <li class="text-gray-400 text-lg font-light leading-relaxed" [innerHTML]="highlightMetric(achievement)"></li>
          }
        </ul>
      </ui-card>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiTimelineNodeComponent {
  entry = input.required<ExperienceEntry>();

  // Función para destacar métricas en la lista
  highlightMetric(text: string): string {
    const regex = /(\$[\d,.]+[kKmMbB]?|\d+%|\d+K\b|\d+\sMillones)/g;
    return text.replace(regex, '<span class="text-[#00ffaa] font-medium">$1</span>');
  }
}
