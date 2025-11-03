import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../core/services/data.service';
import { UiCardComponent } from '../../../shared/ui/ui-card/ui-card.component';
import { SkillEntry } from '../../../core/interfaces/portfolio.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, UiCardComponent],
  template: `
    <section id="skills" class="py-24 bg-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 class="text-4xl font-bold font-manrope text-center text-gray-100 mb-16">
          Core Technical Expertise
        </h3>

        @if (dataService.dataReady()) {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            @for (category of categories; track category) {
              <ui-card additionalClasses="h-full">
                <h4 class="text-2xl font-semibold font-manrope text-[#00ffaa] mb-6">{{ category }}</h4>
                <ul class="space-y-4">
                  @for (skill of skillsByCategory(category); track skill.id) {
                    <li>
                      <p class="text-md font-medium text-gray-200 mb-1">{{ skill.name }}</p>
                      <div class="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                        <div class="bg-[#00ffaa] h-2" [style.width.%]="skill.level"></div>
                      </div>
                    </li>
                  }
                </ul>
              </ui-card>
            }
          </div>
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  dataService = inject(DataService);
  skills = this.dataService.publicSkills;
  categories: SkillEntry['category'][] = [
    'AI/Automation',
    'Backend/Data',
    'Frontend',
    'Infra/DevOps'
  ];

  skillsByCategory(category: SkillEntry['category']) {
    return this.skills().filter(s => s.category === category);
  }
}
