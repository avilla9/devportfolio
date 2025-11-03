import { Injectable, signal, effect, Renderer2, RendererFactory2, inject } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private dataService = inject(DataService);

  isDark = signal(this.dataService.getFullData().settings.theme === 'dark');

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    // Efecto para aplicar la clase 'dark' al <html>
    effect(() => {
      if (this.isDark()) {
        this.renderer.addClass(document.documentElement, 'dark');
      } else {
        this.renderer.removeClass(document.documentElement, 'dark');
      }
    });
  }

  toggleTheme() {
    this.isDark.update(current => !current);
  }
}