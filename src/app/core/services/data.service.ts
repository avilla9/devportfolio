import { Injectable, signal, computed, LOCALE_ID, inject } from '@angular/core';
import { PortfolioData } from '../interfaces/portfolio.model';
import { DEFAULT_PORTFOLIO_DATA_EN } from '../interfaces/portfolio.mock.en';
import { DEFAULT_PORTFOLIO_DATA_ES } from '../interfaces/portfolio.mock.es';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private locale: string;
  private initialData: PortfolioData;

  // Estado privado, la fuente de verdad en memoria
  private _portfolioData = signal<PortfolioData>(null!);

  constructor() {
    this.locale = inject(LOCALE_ID);
    this.initialData = this.getInitialPortfolioData(this.locale);
    this._portfolioData.set(this.initialData);
  }

  // --- Signals Públicos (Read-Only) para el Portafolio ---
  dataReady = signal(true); // Simula la carga de datos
  publicProfile = computed(() => this._portfolioData().profile);
  publicExperience = computed(() => this._portfolioData().experience);
  publicProjects = computed(() => this._portfolioData().projects);
  publicSkills = computed(() => this._portfolioData().skills);

  // --- Métodos del "Mock CMS" (Usados por el Admin Panel) ---

  /**
   * Retorna el objeto completo de PortfolioData (para el Admin)
   */
  getFullData = () => this._portfolioData();

  /**
   * Actualiza el estado en memoria con nuevos datos (desde el Admin)
   */
  updateFullData = (newData: PortfolioData) => {
    this._portfolioData.set(newData);
  };

  /**
   * Restaura el estado en memoria al mock original (desde el Admin)
   */
  resetToDefault = () => {
    this._portfolioData.set(this.initialData);
  };

  private getInitialPortfolioData(locale: string): PortfolioData {
    if (locale.startsWith('es')) {
      return DEFAULT_PORTFOLIO_DATA_ES;
    } else {
      return DEFAULT_PORTFOLIO_DATA_EN;
    }
  }
}
