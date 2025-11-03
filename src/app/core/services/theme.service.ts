import { Injectable, signal, effect, Renderer2, RendererFactory2 } from '@angular/core';
import { DEFAULT_PORTFOLIO_DATA } from '../interfaces/portfolio.mock';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  isDark = signal(DEFAULT_PORTFOLIO_DATA.settings.theme === 'dark');

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
