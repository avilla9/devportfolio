import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-white dark:bg-gray-950 border-t border-gray-200/50 dark:border-gray-800/50 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-700 dark:text-gray-500">
        <p i18n="@@footerCopyright">&copy; {{ currentYear }} Armando Villanueva. Todos los derechos reservados.</p>
        <p class="mt-2" i18n="@@footerBuiltWith">Construido con Angular, Tailwind CSS y <span class="text-[#00ffaa]">pasión</span>.</p>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}