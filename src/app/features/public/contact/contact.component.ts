import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Removed UiButtonComponent, UiInputComponent
  template: `
    <section id="contact" class="py-24 bg-white dark:bg-gray-900/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h3 class="text-4xl font-bold font-manrope text-gray-900 dark:text-gray-100" i18n="@@contactTitle">
            Hablemos de Arquitectura
          </h3>
          <p class="mt-4 text-xl text-gray-700 dark:text-gray-400" i18n="@@contactSubtitle">
            Conectemos para discutir cómo puedo aportar valor a su equipo.
          </p>
          <a [href]="'mailto:' + profile().email" class="inline-block text-2xl font-semibold text-[#00ffaa] mt-4 mb-12 hover:underline">
            {{ profile().email }}
          </a>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  dataService = inject(DataService);
  profile = this.dataService.publicProfile;
  // Lógica de formulario omitida para un CTA de email más directo
}