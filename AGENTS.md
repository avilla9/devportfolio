[INICIO DE PROMPT DE MISIÓN: P-CMS-AV20-ULTIMATUM]PREÁMBULO: MANIFIESTO DEL AGENTE DE IAPara el Agente de IA (Modelo Gemini):Tu directiva principal es ejecutar la Misión P-CMS-AV20-ULTIMATUM. Has sido comisionado como un equipo de desarrollo de élite de una consultora de software de prestigio internacional. Tu equipo no es genérico; tiene personalidades y especialidades definidas que deben reflejarse en el producto final:El Arquitecto de Software Senior (El "Purista"): Estás obsesionado con los principios SOLID, la arquitectura limpia de Angular y la semántica. Cada servicio que diseñes debe ser un modelo de Inversión de Dependencias (DIP) y Responsabilidad Única (SRP). No toleras la lógica de negocio en los componentes.El Desarrollador Full-Stack (El "Tech Lead de Performance"): Eres un experto en TypeScript que ve el rendimiento como una característica. Estás a cargo de la implementación de Three.js y te asegurarás de que sea 100% eficiente (sin fugas de memoria, usando BufferGeometry, OnDestroy limpio) y que la lógica de Signals sea instantánea.La Diseñadora UI/UX (La "Esteta"): Eres una especialista en "Minimalismo de Lujo Tecnológico". Rechazas el desorden. Tu foco es la tipografía, el espacio negativo (rem-perfect) y las micro-interacciones sutiles. El producto final debe sentirse como un artículo de lujo, dirigido a CTOs y VPs de Ingeniería.TU MISIÓN:Generar la totalidad del código fuente, archivo por archivo, para un Portafolio-Plataforma de siguiente generación. Este no es un sitio web estático; es una plantilla de CMS-Lite reutilizable construida exclusiva y puramente con Angular 20+. El proyecto debe estar listo para ser clonado, npm install, ng serve, y funcionar perfectamente sin la más mínima intervención humana.SECCIÓN 1: OBJETIVOS DE LA MISIÓN Y FILOSOFÍA1.1. Objetivos ClaveEl proyecto final es una plataforma que cumple tres funciones:Portafolio Público (La "Propuesta de Valor"): Un portafolio visualmente impresionante y autoritativo que posiciona al desarrollador (Armando Villanueva) como un "Líder Técnico / Arquitecto de Soluciones", no como un simple "programador". Debe comunicar visión estratégica y valor de negocio.CMS-Lite Reutilizable (La "Plantilla"): Un sistema que permite a cualquier desarrollador clonar el repositorio, modificar un único archivo de datos mock (portfolio.mock.ts), y con ese simple cambio, repoblar el 100% del contenido del portafolio.Simulación de Admin Panel (El "Futuro"): Un panel de administración (/admin) simulado que demuestra la arquitectura de gestión de contenido. Debe usar ReactiveFormsModule para editar el estado en memoria, probando que el sistema está listo para ser conectado a un backend real (API REST, GraphQL, Firebase, etc.) en una futura iteración.1.2. Audiencia Objetivo (El "Cliente" de la UI)Primaria: CTOs, VPs de Ingeniería, Jefes de Arquitectura, Reclutadores Técnicos de alto nivel.Secundaria: Otros desarrolladores senior que buscan una plantilla de portafolio de alta calidad.Implicación: El diseño debe evitar clichés "gamificados" o de "desarrollador junior". Debe ser profesional, sobrio, pero tecnológicamente avanzado. La autoridad se transmite a través del diseño limpio, la tipografía audaz y las métricas de impacto.SECCIÓN 2: DIRECTIVAS CORE Y REQUERIMIENTOS INQUEBRANTABLES (EL "MANIFIESTO")2.1. Stack Tecnológico Exclusivo (Mandatorio)Framework: Angular 20+. Queda terminantemente prohibido el uso de React, Vue, Svelte, o cualquier otro framework o librería de UI que no sea Angular.Estado: Angular Signals (signal, computed, effect). Esta es la única herramienta para la gestión de estado reactivo. Queda prohibido el uso de NgRx, Redux, Akita, o cualquier gestor de estado de terceros.Plantillas: Native Control Flow (@if, @for, @switch). Queda prohibido el uso de directivas estructurales heredadas (*ngIf, *ngFor, ngSwitch).Arquitectura: 100% Componentes Standalone (standalone: true). Queda prohibida la generación de NgModules (excepto el AppModule si el CLI lo requiere para el bootstrap, pero todos los componentes importados serán standalone).Estilo: Tailwind CSS. Todo el estilo debe ser mediante clases de Tailwind. El template de cada componente contendrá las clases.Animación Avanzada: Three.js (v0.128+). Es obligatorio integrar una animación 3D sutil en la sección Hero.Formularios: ReactiveFormsModule. El panel de admin debe usar FormGroup, FormArray, y FormBuilder para la gestión de datos.2.2. Principios de Diseño y Arquitectura (Mandatorio)SOLID (Aplicado):SRP (Single Responsibility): Los Servicios manejan la lógica de estado y API (simulada). El DataService solo maneja datos del portafolio. El ThemeService solo maneja el tema. El AuthService solo maneja la autenticación. Los componentes de Layout (PublicLayout) orquestan. Los componentes de UI (UiCard) presentan. Los componentes de Sección (HeroComponent) agrupan.OCP (Open/Closed): El DataService es el ejemplo perfecto. Los componentes dependen de la abstracción del DataService (publicProfile signal), no de su implementación (Mock Data). Si mañana se cambia a una API REST, ningún componente (excepto el DataService) se verá afectado.DRY (Don't Repeat Yourself): Crearás un conjunto robusto de componentes de UI reutilizables (Botones, Tarjetas, Nodos de Timeline, Inputs) en la carpeta shared/ui. Cualquier elemento de UI que se repita más de una vez debe ser un componente.KISS (Keep It Simple, Stupid): La lógica de estado debe ser limpia y legible gracias a Signals. Evitar complejidad innecesaria. El enrutamiento simulado en app.component.ts debe ser lo más simple posible (window.location.pathname).2.3. Arquitectura de MúltiLES Archivos (Mandatorio)NO GENERAR UN ARCHIVO ÚNICO. Esta directiva está anulada y prohibida.Debes generar una estructura de carpetas y archivos modular y profesional, separando la lógica por funcionalidad (features), lógica central (core) y componentes reutilizables (shared), como se detalla en la Sección 5.SECCIÓN 3: FILOSOFÍA DE DISEÑO Y UI/UX ("MINIMALISMO DE LUJO TECNOLÓGICO")Esta sección define el lenguaje visual. El "Diseñador UI/UX" en el agente debe seguir estas reglas meticulosamente.3.1. Paleta de Colores (Dark Mode por Defecto)Fondo Principal (BG): bg-gray-950 (ej. #0d1117 o un negro casi puro con un toque de azul).Fondo Secundario (Tarjetas): bg-gray-900 (ej. #161b22).Bordes / Separadores: border-gray-800 (ej. #21262d).Texto Primario (Títulos): text-gray-100 (ej. #e6edf3).Texto Secundario (Párrafos): text-gray-400 (ej. #8b949e).Acento Primario (Neón): text-[#00ffaa] o un cian eléctrico (#39c5f1). Este color se usará para CTAs, enlaces, el círculo del timeline, y la animación de Three.js.Acento Secundario (Píldoras/Tags): bg-[#00ffaa]/10 text-[#00ffaa].3.2. Tipografía y Escala (Legibilidad es Autoridad)Fuente de UI y Párrafos: Inter (importada de Google Fonts).Fuente de Títulos (Headings): Manrope (importada de Google Fonts).Escala de Tipo (Tailwind):h1 (Título Hero): text-6xl o text-7xl (font-extrabold font-manrope).h2 (Subtítulo Hero): text-2xl (font-light text-gray-400).h3 (Títulos de Sección): text-4xl (font-bold font-manrope mb-8).p (Cuerpo de texto): text-lg o text-xl (font-light text-gray-400 leading-relaxed).label (Formularios): text-sm (font-medium text-gray-300).3.3. Layout y EspaciadoContenedor Principal: El contenido de cada sección (excepto Hero) debe estar centrado en un div con max-w-7xl mx-auto px-4 sm:px-6 lg:px-8.Ritmo Vertical: El espaciado entre secciones debe ser generoso. py-20 o py-24.Blur y Vidrio: Las tarjetas (ui-card) y el header (header.component) deben usar backdrop-blur-sm y un fondo semitransparente (bg-gray-900/70) para un efecto "vidrio esmerilado".3.4. Micro-interacciones (El "Lujo")Hover en Botones: ui-button (primario) debe tener transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00ffaa]/30.Hover en Tarjetas: ui-project-card debe tener transition-all duration-300 transform hover:translate-y-[-5px] hover:border-[#00ffaa]/50.Scroll Suave: index.html debe tener scroll-behavior: smooth;.Efecto "Fade-in": Los componentes de sección (experience, projects) deben tener una animación sutil de entrada (CSS o Angular Animations) al ser scrolleados a la vista (si es posible, si no, al menos al cargar).SECCIÓN 4: ANÁLISIS DEL PERFIL OBJETIVO (LA "FUENTE DE VERDAD" PARA EL MOCK)Este es el "Contenido Demo" que debe poblar el portfolio.mock.ts. El diseño de la UI debe estar obsesivamente optimizado para destacar estos puntos.4.1. Narrativa Central (El Tono y la Propuesta de Valor)NO: "Soy un desarrollador que sabe Angular y Python. Contrátame."SÍ: "Soy un Líder Técnico que traduce requisitos de negocio complejos en arquitecturas Cloud-Native escalables y rentables. Mi especialidad es la optimización de costos y la multiplicación de la eficiencia operativa a través de la Automatización Avanzada (n8n) y la Integración de IA Generativa (Chatbots, LLMs). Convierto problemas de ingeniería en ventajas competitivas."4.2. Palabras Clave del Perfil (Para Hero y Skills)Senior Software Engineer (7+ años)Technical LeadScalability & Advanced Automation SpecialistCloud-Native ArchitectureDevSecOpsMicroservicesHigh Availability (HA)Python / TypeScript / PHP (Laravel) / Angular / Reactn8n WorkflowsChatbot Development / Generative AIData PipelinesSystem IntegrationMonorepos4.3. MÉTRICAS DE IMPACTO (EL NÚCLEO DEL PORTAFOLIO)El ExperienceComponent y el ProjectsComponent NO deben ser solo listas de texto. Deben tener un diseño UI que resalte estas métricas del CV. El portfolio.mock.ts debe contenerlas.Ahorro de Costos: $4,500/mes en ahorros operativos (por automatización n8n).Reducción de Costos: 12% de reducción de costos de hosting (por Docker/Firebase).Eficiencia Operativa: 90% de reducción de esfuerzo manual (por automatización n8n).Rendimiento del Sistema: 60% de reducción de latencia (cumpliendo SLA < 120s).Manejo de Carga: Soporte de picos de 10K requests/minuto.Escalabilidad de Datos: Migración e indexación exitosa de 75 Millones de registros.Liderazgo de Equipo: Mejora del 20% en cadencia de despliegue (vía Scrum/CI-CD).Gestión de Producto: Soporte a 15,000+ usuarios (en plataforma CRM).SECCIÓN 5: ARQUITECTURA DE PERSISTENCIA ("MOCK CMS-LITE" Y "MOCK AUTH")Esta es la solución a la restricción "Sin Base de Datos".5.1. El "Mock Data CMS" (La Base de Datos en Archivo)Fuente de Verdad Única: El archivo core/interfaces/portfolio.mock.ts exportará la constante DEFAULT_PORTFOLIO_DATA. Esta es la "base de datos" del proyecto.Servicio (Cargador): El DataService (core/services/data.service.ts) importará esta constante y la cargará en un signal privado: _portfolioData = signal(DEFAULT_PORTFOLIO_DATA).Exposición Pública (Read-Only): El DataService expondrá el estado al portafolio público a través de computed signals (read-only) para una encapsulación perfecta:publicProfile = computed(() => this._portfolioData().profile)publicExperience = computed(() => this._portfolioData().experience)...etc.Exposición de Admin (Read/Write): El DataService expondrá métodos para el Admin Panel:getFullData = () => this._portfolioData()updateFullData = (newData: PortfolioData) => this._portfolioData.set(newData)resetToDefault = () => this._portfolioData.set(DEFAULT_PORTFOLIO_DATA)Reutilización (La Clave): Para que otro desarrollador use la plantilla, solo necesitará editar el objeto DEFAULT_PORTFOLIO_DATA. Nada más.Simulación: El Admin Panel (Sección 6.5) usará ReactiveFormsModule para editar el estado. onSave() llamará a updateFullData(), cambiando el estado en memoria. onReset() llamará a resetToDefault(). Debe quedar 100% claro que esto no persiste los datos después de un refresh de la página.5.2. El "Mock Auth" (El Guardián Simulado)Servicio: AuthService (core/services/auth.service.ts).Estado: isAuthenticated = signal<boolean>(false).Login: login(user: string, pass: string): Promise<boolean>:Debe retornar una Promise para simular asincronía (setTimeout de 500ms).Si user === 'admin' Y pass === 'admin', setea isAuthenticated.set(true) y resolve(true).De lo contrario, resolve(false).Logout: logout(): Setea isAuthenticated.set(false).Guardián: El AppComponent (app.component.ts) usará este signal para simular un AuthGuard en la ruta /admin.SECCIÓN 6: ARQUITECTURA DETALLADA DE ARCHIVOS (EL "MEGA-PROMPT" DE GENERACIÓN)Generarás los siguientes archivos, uno por uno, con el detalle especificado.6.1. Raíz del Proyecto (/)README.mdRuta: /README.mdPropósito: El manual de usuario para el desarrollador que clona el repositorio.Contenido Detallado:# P-CMS-AV20: Portafolio-Plataforma Angular 20+Descripción de la misión (Portafolio de Lujo, CMS-Lite Reutilizable).## 🚀 Tecnologías y Principios (Listar Angular 20+, Standalone, Signals, Tailwind, Three.js, SOLID, Mock CMS).## ⚙️ Instrucciones de Instalación y Desplieguegit clone ...npm installnpm install -D tailwindcss (y explicar el tailwind.config.js).ng serveng build (para despliegue estático en Netlify/Vercel).## ⚠️ CÓMO USAR EL "MOCK CMS" (¡IMPORTANTE!)Explicar que la "base de datos" del portafolio es el archivo: src/app/core/interfaces/portfolio.mock.ts."Para personalizar este portafolio, simplemente edite el objeto DEFAULT_PORTFOLIO_DATA en ese archivo con su propia información."Explicar que el /admin (login: admin/admin) es una simulación para editar el estado en memoria y no persiste los datos.6.2. Carpeta src/app/core/ (Lógica Central)src/app/core/interfaces/portfolio.model.tsRuta: src/app/core/interfaces/portfolio.model.tsPropósito: Definir la estructura de datos de toda la aplicación.Contenido Detallado:export interface PortfolioData {
  profile: Profile;
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  skills: SkillEntry[];
  settings: Settings;
}

export interface Profile {
  title: string;
  subtitle: string;
  summary: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  dates: string;
  achievements: string[]; // ¡Clave para las métricas!
}

export interface ProjectEntry {
  id: string;
  title: string;
  description: string;
  tags: string[]; // Píldoras de tecnología
  imageUrl: string; // Usar placehold.co para los mocks
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillEntry {
  id: string;
  name: string;
  category: 'Backend/Data' | 'Frontend' | 'Infra/DevOps' | 'AI/Automation';
  level: number; // 0-100 (para la barra de progreso)
}

export interface Settings {
  theme: 'dark' | 'light';
}
src/app/core/interfaces/portfolio.mock.tsRuta: src/app/core/interfaces/portfolio.mock.tsPropósito: La "Base de Datos" Mock. La única fuente de verdad para el contenido.Contenido Detallado:import { PortfolioData } from './portfolio.model';

export const DEFAULT_PORTFOLIO_DATA: PortfolioData = {
  profile: {
    title: 'Armando Villanueva',
    subtitle: 'Senior Software Engineer | Technical Lead | Scalability & Advanced Automation Specialist',
    summary: 'Technical Leader and Senior Full-Stack Engineer with 7+ years of experience specializing in Cloud-Native Architecture Concepts, Scalability, and DevSecOps practices. Expertise spans Python, TypeScript, PHP, Laravel, Angular, and React. Focused on integrating Generative AI solutions via custom Chatbots and advanced process automation (n8n) to achieve significant operational efficiency and optimize infrastructure costs.',
    githubUrl: '[https://github.com/avilla9](https://github.com/avilla9)',
    linkedinUrl: '[https://linkedin.com/in/armandojvillanueva](https://linkedin.com/in/armandojvillanueva)',
    email: 'armandojvilla9@gmail.com',
  },
  experience: [
    {
      id: 'exp-1',
      company: 'Red Científica Peruana',
      role: 'Back End Engineer (Technical Leadership Focus)',
      dates: 'Oct 2024 - Present',
      achievements: [
        'Spearheaded the technical direction and mentored junior engineers on Microservices and clean architecture.',
        'Achieved $4,500/month in operational savings by automating complex data processes via custom n8n workflows.',
        'Reduced update latency by 60% to meet a <120 second SLA.',
        'Architected and implemented Microservices using PHP/Laravel to manage high-volume data interpretation.',
      ],
    },
    {
      id: 'exp-2',
      company: 'Quality Compusoft',
      role: 'Full Stack Engineer',
      dates: 'Aug 2022 - Dec 2024',
      achievements: [
        'Led the architecture and end-to-end delivery of two major applications (CRM & streaming platform), supporting 15,000+ veterinary users.',
        'Engineered robust, scalable RESTful APIs with Laravel and PostgreSQL, supporting peak loads of 10K requests/minute.',
        'Developed conversational AI solutions, including custom Chatbots, improving customer response time by 25%.',
      ],
    },
    {
      id: 'exp-3',
      company: 'Hakuna Consulting',
      role: 'Chief Technology Officer (CTO)',
      dates: 'Jul 2021 - Apr 2022',
      achievements: [
        'Directed a team of three developers and defined the entire technical roadmap for 5+ client projects.',
        'Designed and implemented a Microservices Architecture utilizing Node.js and Docker.',
        'Achieved 12% reduction in client hosting costs by leveraging Serverless concepts and containerization.',
      ],
    },
    {
      id: 'exp-4',
      company: 'Multifiber',
      role: 'Full Stack Developer',
      dates: 'Oct 2019 - Sep 2020',
      achievements: [
        'Implemented asynchronous processes using Redis and Celery within a Django framework to optimize high-volume financial report generation by 50%.',
      ],
    },
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'AI-Powered Automation Hub (n8n)',
      description: 'Platform integrating n8n with LLMs to automate complex back-office tasks, achieving a 90% reduction in manual effort. Demonstrates mastery in automation and cost-saving.',
      tags: ['n8n', 'Node.js', 'Generative AI', 'TypeScript', 'Docker', 'Automation'],
      imageUrl: '[https://placehold.co/800x600/161b22/00ffaa?text=AI+Automation+Hub](https://placehold.co/800x600/161b22/00ffaa?text=AI+Automation+Hub)',
      demoUrl: '#',
      githubUrl: '[https://github.com/avilla9](https://github.com/avilla9)',
    },
    {
      id: 'proj-2',
      title: 'Scalable Microservices Boilerplate (Python)',
      description: 'A production-ready microservices template based on Python (Django/FastAPI) and Docker, designed for high availability (HA) and horizontal scalability.',
      tags: ['Python', 'Django', 'FastAPI', 'Microservices', 'Docker', 'CI/CD'],
      imageUrl: '[https://placehold.co/800x600/161b22/00ffaa?text=Microservice+Arch](https://placehold.co/800x600/161b22/00ffaa?text=Microservice+Arch)',
      demoUrl: '#',
      githubUrl: '[https://github.com/avilla9](https://github.com/avilla9)',
    },
    {
      id: 'proj-3',
      title: 'Real-time Streaming Platform (Laravel/Angular)',
      description: 'Led the architecture for a real-time video streaming platform, including a PHP Microservice utilizing FFmpeg for efficient content transcoding.',
      tags: ['Laravel', 'PHP', 'Angular', 'FFmpeg', 'Streaming', 'Microservices'],
      imageUrl: '[https://placehold.co/800x600/161b22/00ffaa?text=Streaming+Platform](https://placehold.co/800x600/161b22/00ffaa?text=Streaming+Platform)',
      demoUrl: '#',
      githubUrl: '[https://github.com/avilla9](https://github.com/avilla9)',
    },
  ],
  skills: [
    { id: 's-1', name: 'n8n Workflows', category: 'AI/Automation', level: 98 },
    { id: 's-2', name: 'Chatbot Development', category: 'AI/Automation', level: 90 },
    { id: 's-3', name: 'Generative AI Integration', category: 'AI/Automation', level: 85 },
    { id: 's-4', name: 'Python (Django, FastAPI)', category: 'Backend/Data', level: 95 },
    { id: 's-5', name: 'TypeScript / Node.js', category: 'Backend/Data', level: 92 },
    { id: 's-6', name: 'PHP (Laravel, Symfony)', category: 'Backend/Data', level: 88 },
    { id: 's-7', name: 'Data Pipelines', category: 'Backend/Data', level: 80 },
    { id: 's-8', name: 'Angular', category: 'Frontend', level: 95 },
    { id: 's-9', name: 'React / Ionic', category: 'Frontend', level: 80 },
    { id: 's-10', name: 'RxJS / NgRx', category: 'Frontend', level: 85 },
    { id: 's-11', name: 'Docker / CI/CD', category: 'Infra/DevOps', level: 90 },
    { id: 's-12', name: 'Firebase / Serverless', category: 'Infra/DevOps', level: 85 },
    { id: 's-13', name: 'Microservices Architecture', category: 'Infra/DevOps', level: 94 },
  ],
  settings: {
    theme: 'dark',
  },
};
src/app/core/services/theme.service.tsRuta: src/app/core/services/theme.service.tsPropósito: Gestiona el estado global del tema (Dark/Light).Lógica Detallada:import { Injectable, signal, effect, Renderer2, RendererFactory2 } from '@angular/core';
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
src/app/core/services/data.service.tsRuta: src/app/core/services/data.service.tsPropósito: El corazón del CMS-Lite. Expone los datos a toda la app.Lógica Detallada:import { Injectable, signal, computed } from '@angular/core';
import { PortfolioData } from '../interfaces/portfolio.model';
import { DEFAULT_PORTFOLIO_DATA } from '../interfaces/portfolio.mock';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Estado privado, la fuente de verdad en memoria
  private _portfolioData = signal<PortfolioData>(DEFAULT_PORTFOLIO_DATA);

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
    this._portfolioData.set(DEFAULT_PORTFOLIO_DATA);
  };
}
src/app/core/services/auth.service.tsRuta: src/app/core/services/auth.service.tsPropósito: Simula la autenticación para el panel de admin.Lógica Detallada:import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = signal<boolean>(false);

  login(user: string, pass: string): Promise<boolean> {
    return new Promise((resolve) => {
      // Simula una llamada API
      setTimeout(() => {
        if (user === 'admin' && pass === 'admin') {
          this.isAuthenticated.set(true);
          resolve(true);
        } else {
          this.isAuthenticated.set(false);
          resolve(false);
        }
      }, 500);
    });
  }

  logout() {
    this.isAuthenticated.set(false);
  }
}
6.3. Carpeta src/app/shared/ui/ (Componentes Reutilizables)Nota: Todos los componentes en esta carpeta deben tener standalone: true, imports: [CommonModule], y changeDetection: ChangeDetectionStrategy.OnPush.src/app/shared/ui/ui-button/ui-button.component.tsPropósito: El botón estándar de la aplicación.Lógica Detallada:// Imports: Component, input, ChangeDetectionStrategy, CommonModule
@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [class]="baseClasses + ' ' + (styleType() === 'primary' ? primaryClasses : secondaryClasses) + ' ' + additionalClasses()"
      [disabled]="disabled()"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `],
  changeDetection: 0 // OnPush
})
export class UiButtonComponent {
  styleType = input<'primary' | 'secondary'>('primary');
  additionalClasses = input<string>('');
  disabled = input<boolean>(false);

  baseClasses = 'px-6 py-3 rounded-md text-sm font-semibold tracking-wide uppercase transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950';
  primaryClasses = 'bg-[#00ffaa] text-black shadow-lg shadow-[#00ffaa]/20 hover:scale-105 hover:shadow-xl hover:shadow-[#00ffaa]/40 focus:ring-[#00ffaa]';
  secondaryClasses = 'border border-gray-800 text-[#00ffaa] hover:border-[#00ffaa] hover:bg-[#00ffaa]/10 focus:ring-[#00ffaa]';
}
src/app/shared/ui/ui-card/ui-card.component.tsPropósito: La tarjeta base para todo el contenido.Lógica Detallada:// Imports: Component, input, ChangeDetectionStrategy
@Component({
  selector: 'ui-card',
  standalone: true,
  template: `
    <div [class]="baseClasses + ' ' + additionalClasses()">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: 0 // OnPush
})
export class UiCardComponent {
  additionalClasses = input<string>('');
  baseClasses = 'bg-gray-900/70 backdrop-blur-md border border-gray-800/50 rounded-xl shadow-2xl p-6 md:p-8';
}
src/app/shared/ui/ui-timeline-node/ui-timeline-node.component.tsPropósito: Muestra una entrada de experiencia en la línea de tiempo.Lógica Detallada:// Imports: Component, input, ChangeDetectionStrategy, CommonModule, UiCardComponent, ExperienceEntry
@Component({
  selector: 'ui-timeline-node',
  standalone: true,
  imports: [CommonModule, UiCardComponent],
  template: `
    <div classclass="relative pl-12 pb-12">
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
  changeDetection: 0 // OnPush
})
export class UiTimelineNodeComponent {
  entry = input.required<ExperienceEntry>();

  // Función para destacar métricas en la lista
  highlightMetric(text: string): string {
    const regex = /(\$[\d,.]+[kKmMbB]?|\d+%|\d+K\b|\d+\sMillones)/g;
    return text.replace(regex, '<span classclass="text-[#00ffaa] font-medium">$1</span>');
  }
}
src/app/shared/ui/ui-project-card/ui-project-card.component.tsPropósito: Muestra una tarjeta de proyecto en el grid.Lógica Detallada:// Imports: Component, input, ChangeDetectionStrategy, CommonModule, ProjectEntry, UiCardComponent
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
  changeDetection: 0 // OnPush
})
export class UiProjectCardComponent {
  project = input.required<ProjectEntry>();
}
src/app/shared/ui/ui-input/ui-input.component.tsPropósito: Wrapper de input para el Admin (simple, sin CVA por simplicidad del prompt).Lógica Detallada:// Imports: Component, input, ChangeDetectionStrategy, ReactiveFormsModule
@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="w-full">
      <label [for]="id()" class="block text-sm font-medium text-gray-300 mb-1">{{ label() }}</label>
      <input
        [id]="id()"
        [type]="type()"
        [formControl]="control()"
        class="block w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md shadow-sm focus:border-[#00ffaa] focus:ring-[#00ffaa] sm:text-sm"
        [placeholder]="placeholder()"
      />
      <!-- TODO: Add error handling display -->
    </div>
  `,
  changeDetection: 0 // OnPush
})
export class UiInputComponent {
  control = input.required<any>(); // FormControl
  label = input.required<string>();
  id = input(crypto.randomUUID());
  type = input<string>('text');
  placeholder = input<string>('');
}
6.4. Carpeta src/app/features/public/ (El Portafolio)Nota: Todos los componentes de sección (Hero, Experience, etc.) deben inyectar DataService para obtener sus datos.src/app/features/public/header/header.component.tsRuta: src/app/features/public/header/header.component.tsLógica Detallada:// Imports: Component, ChangeDetectionStrategy, inject, ThemeService
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 w-full bg-gray-950/80 backdrop-blur-lg border-b border-gray-800/50">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <a href="#" class="text-2xl font-bold font-manrope text-[#00ffaa]">
            AV.DEV<span class="text-gray-500">_</span>
          </a>
          <!-- Nav Links -->
          <div class="hidden md:flex gap-8 items-center">
            <a href="#experience" class="text-gray-400 hover:text-gray-100 transition-colors">Experiencia</a>
            <a href="#projects" class="text-gray-400 hover:text-gray-100 transition-colors">Proyectos</a>
            <a href="#skills" class="text-gray-400 hover:text-gray-100 transition-colors">Habilidades</a>
            <a href="#contact" class="text-gray-400 hover:text-gray-100 transition-colors">Contacto</a>
            <button (click)="themeService.toggleTheme()" class="text-gray-400 hover:text-[#00ffaa]">
              <!-- Icono de Luna/Sol (simplificado) -->
              @if (themeService.isDark()) {
                <span>Light</span>
              } @else {
                <span>Dark</span>
              }
            </button>
          </div>
        </div>
      </nav>
    </header>
  `,
  changeDetection: 0 // OnPush
})
export class HeaderComponent {
  themeService = inject(ThemeService);
}
src/app/features/public/hero/hero.component.tsRuta: src/app/features/public/hero/hero.component.tsPropósito: La primera impresión. El "Wow Factor" con Three.js.Lógica Detallada:// Imports: Component, ChangeDetectionStrategy, inject, DataService, UiButtonComponent, AfterViewInit, OnDestroy, ElementRef, ViewChild
// Importar * as THREE de 'three' (requiere @types/three)
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, UiButtonComponent],
  template: `
    <section class="relative flex items-center justify-center min-h-screen overflow-hidden">
      <!-- Canvas de Three.js -->
      <canvas #heroCanvas class="absolute top-0 left-0 w-full h-full z-0"></canvas>

      <!-- Contenido -->
      <div class="relative z-10 text-center max-w-4xl mx-auto px-4">
        @if (profile(); as p) {
          <h1 class="text-5xl md:text-7xl font-extrabold font-manrope text-gray-100">
            {{ p.title }}
          </h1>
          <h2 class="text-2xl md:text-3xl font-light text-[#00ffaa] mt-4 mb-8">
            {{ p.subtitle }}
          </h2>
          <p class="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12">
            {{ p.summary }}
          </p>
          <div class="flex justify-center gap-6">
            <ui-button styleType="primary" (click)="goTo(p.linkedinUrl)">LinkedIn</ui-button>
            <ui-button styleType="secondary" (click)="goTo(p.githubUrl)">GitHub</ui-button>
          </div>
        } @else {
          <div class="text-white">Cargando...</div>
        }
      </div>
    </section>
  `,
  changeDetection: 0 // OnPush
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  dataService = inject(DataService);
  profile = this.dataService.publicProfile;
  @ViewChild('heroCanvas') private canvasRef!: ElementRef;

  // --- Lógica de Three.js ---
  // ... (scene, camera, renderer, points, animate loop) ...
  // Esta sección debe ser implementada por el "Tech Lead de Performance"
  // con la animación de "Plexo de Nodos" que reacciona al ratón.
  // Debe ser eficiente y limpiarse en OnDestroy.

  ngAfterViewInit() {
    // this.initThreeJS();
    // this.animate();
  }

  ngOnDestroy() {
    // this.stopThreeJS();
  }

  goTo(url: string) {
    window.open(url, '_blank');
  }
}
src/app/features/public/experience/experience.component.tsRuta: src/app/features/public/experience/experience.component.tsLógica Detallada:// Imports: Component, ChangeDetectionStrategy, inject, DataService, CommonModule, UiTimelineNodeComponent
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonTle, UiTimelineNodeComponent],
  template: `
    <section id="experience" class="py-24 bg-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 class="text-4xl font-bold font-manrope text-center text-gray-100 mb-16">
          Experiencia & Liderazgo de Impacto
        </h3>

        <div class="max-w-3xl mx-auto">
          @if (dataService.dataReady()) {
            @for (entry of experience(); track entry.id) {
              <ui-timeline-node [entry]="entry" />
            }
          } @else {
            <div>Cargando experiencia...</div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: 0 // OnPush
})
export class ExperienceComponent {
  dataService = inject(DataService);
  experience = this.dataService.publicExperience;
}
src/app/features/public/projects/projects.component.tsRuta: src/app/features/public/projects/projects.component.tsLógica Detallada:// Imports: Component, ChangeDetectionStrategy, inject, DataService, CommonModule, UiProjectCardComponent
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, UiProjectCardComponent],
  template: `
    <section id="projects" class="py-24 bg-gray-900/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 class="text-4xl font-bold font-manrope text-center text-gray-100 mb-16">
          Proyectos de Alto Impacto
        </h3>

        @if (dataService.dataReady()) {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (project of projects(); track project.id) {
              <ui-project-card [project]="project" />
            }
          </div>
        } @else {
          <div>Cargando proyectos...</div>
        }
      </div>
    </section>
  `,
  changeDetection: 0 // OnPush
})
export class ProjectsComponent {
  dataService = inject(DataService);
  projects = this.dataService.publicProjects;
}
src/app/features/public/skills/skills.component.tsRuta: src/app/features/public/skills/skills.component.tsLógica Detallada:// Imports: Component, ChangeDetectionStrategy, inject, DataService, CommonModule, UiCardComponent
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
  changeDetection: 0 // OnPush
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
src/app/features/public/contact/contact.component.tsRuta: src/app/features/public/contact/contact.component.tsLógica Detallada:// Imports: Component, ChangeDetectionStrategy, inject, DataService, ReactiveFormsModule, Validators, UiButtonComponent
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, UiButtonComponent, UiInputComponent], // Asumiendo UiInputComponent
  template: `
    <section id="contact" class="py-24 bg-gray-900/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h3 class="text-4xl font-bold font-manrope text-gray-100">
            Hablemos de Arquitectura
          </h3>
          <p class="mt-4 text-xl text-gray-400">
            Conectemos para discutir cómo puedo aportar valor a su equipo.
          </p>
          <a [href]="'mailto:' + profile().email" class="inline-block text-2xl font-semibold text-[#00ffaa] mt-4 mb-12 hover:underline">
            {{ profile().email }}
          </a>
        </div>
      </div>
    </section>
  `,
  changeDetection: 0 // OnPush
})
export class ContactComponent {
  dataService = inject(DataService);
  profile = this.dataService.publicProfile;
  // Lógica de formulario omitida para un CTA de email más directo
}
src/app/features/public/footer/footer.component.tsRuta: src/app/features/public/footer/footer.component.tsLógica Detallada:// Imports: Component, ChangeDetectionStrategy
@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-950 border-t border-gray-800/50 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {{ currentYear }} Armando Villanueva. Todos los derechos reservados.</p>
        <p class="mt-2">Construido con Angular, Tailwind CSS y <span class="text-[#00ffaa]">pasión</span>.</p>
      </div>
    </footer>
  `,
  changeDetection: 0 // OnPush
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
src/app/features/public/public-layout/public-layout.component.tsRuta: src/app/features/public/public-layout/public-layout.component.tsPropósito: Orquesta y ensambla la vista pública.Lógica Detallada:// Imports: Component, ChangeDetectionStrategy, ... todos los componentes de sección
@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-header />
    <main class="pt-20"> <!-- Espacio para el header fijo -->
      <app-hero />
      <app-experience />
      <app-projects />
      <app-skills />
      <app-contact />
    </main>
    <app-footer />
  `,
  changeDetection: 0 // OnPush
})
export class PublicLayoutComponent {}
6.5. Carpeta src/app/features/admin/ (El CMS Mock)src/app/features/admin/login/login.component.tsRuta: src/app/features/admin/login/login.component.tsPropósito: Pantalla de login para el admin simulado.Lógica Detallada:// Imports: Component, ChangeDetectionStrategy, inject, signal, ReactiveFormsModule, FormBuilder, Validators, AuthService, UiButtonComponent, UiCardComponent
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, UiButtonComponent, UiCardComponent],
  template: `
    <div class="flex min-h-screen items-center justify-center bg-gray-950 p-4">
      <ui-card additionalClasses="max-w-md w-full">
        <h2 class="text-3xl font-bold font-manrope text-center text-gray-100 mb-6">
          Admin Panel Login
        </h2>
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
          <div class="space-y-4">
            <!-- UiInputComponent se usaría aquí -->
            <div>
              <label class="block text-sm font-medium text-gray-300">Usuario</label>
              <input formControlName="username" class="w-full bg-gray-900 border-gray-700 rounded-md px-3 py-2 mt-1"/>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-300">Contraseña</label>
              <input type="password" formControlName="password" class="w-full bg-gray-900 border-gray-700 rounded-md px-3 py-2 mt-1"/>
            </div>

            @if (errorMessage()) {
              <div class="text-red-400 text-sm">{{ errorMessage() }}</div>
            }

            <ui-button type="submit" [disabled]="isLoading()" additionalClasses="w-full">
              @if (isLoading()) {
                <span>Cargando...</span>
              } @else {
                <span>Entrar</span>
              }
            </ui-button>
          </div>
        </form>
      </ui-card>
    </div>
  `,
  changeDetection: 0 // OnPush
})
export class LoginComponent {
  authService = inject(AuthService);
  fb = inject(FormBuilder);

  isLoading = signal(false);
  errorMessage = signal<string | null>(null);

  loginForm = this.fb.group({
    username: ['admin', Validators.required],
    password: ['admin', Validators.required]
  });

  async onSubmit() {
    if (this.loginForm.invalid) return;
    this.isLoading.set(true);
    this.errorMessage.set(null);

    const { username, password } = this.loginForm.value;
    const success = await this.authService.login(username!, password!);

    if (!success) {
      this.errorMessage.set('Credenciales incorrectas (Hint: admin/admin)');
    }
    this.isLoading.set(false);
    // El app.component se encargará de la redirección
  }
}
src/app/features/admin/admin-layout/admin-layout.component.tsRuta: src/app/features/admin/admin-layout/admin-layout.component.tsPropósito: Orquesta la vista de admin (Sidebar + Content).Lógica Detallada:// Imports: Component, ChangeDetectionStrategy, inject, AuthService, AdminDashboardComponent, UiButtonComponent
@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, AdminDashboardComponent, UiButtonComponent],
  template: `
    <div class="flex min-h-screen bg-gray-950 text-gray-300">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-900 p-6 border-r border-gray-800 flex flex-col">
        <h1 class="text-2xl font-bold font-manrope text-[#00ffaa] mb-8">P-CMS-AV20</h1>
        <nav class="flex-grow">
          <ul>
            <li><a href="#" class="block py-2 px-3 bg-gray-800 text-white rounded-md">Editar Portafolio</a></li>
          </ul>
        </nav>
        <ui-button styleType="secondary" (click)="authService.logout()">Logout</ui-button>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-8 overflow-auto">
        <app-admin-dashboard />
      </main>
    </div>
  `,
  changeDetection: 0 // OnPush
})
export class AdminLayoutComponent {
  authService = inject(AuthService);
}
src/app/features/admin/admin-dashboard/admin-dashboard.component.tsRuta: src/app/features/admin/admin-dashboard/admin-dashboard.component.tsPropósito: El corazón del CMS. El formulario maestro para editar el estado.Lógica Detallada:// Imports: Component, ChangeDetectionStrategy, inject, DataService, FormBuilder, ReactiveFormsModule, FormArray, FormGroup, CommonModule, UiButtonComponent, UiInputComponent
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, UiButtonComponent, UiInputComponent],
  template: `
    <h2 class="text-4xl font-bold font-manrope text-gray-100 mb-8">
      Mock CMS Dashboard
    </h2>
    <p class="text-gray-400 mb-4">
      Los cambios guardados aquí solo afectan el estado en memoria. 
      **No persistirán** después de recargar la página.
    </p>

    <form [formGroup]="mainForm" (ngSubmit)="onSave()" class="space-y-12">

      <!-- Botones de Acción Flotantes -->
      <div class="sticky top-0 z-10 bg-gray-950/80 backdrop-blur-sm p-4 -mx-8 -mt-8 mb-8 flex gap-4">
        <ui-button type="submit">Guardar Cambios (en Memoria)</ui-button>
        <ui-button type="button" styleType="secondary" (click)="onReset()">Restaurar Mock Original</ui-button>
        @if (saveSuccess()) {
          <span class="text-[#00ffaa] self-center">¡Guardado!</span>
        }
      </div>

      <!-- Sección de Perfil -->
      <fieldset class="border border-gray-700 p-6 rounded-lg">
        <legend class="text-xl font-semibold text-[#00ffaa] px-2">Perfil Principal</legend>
        <div formGroupName="profile" class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <!-- UiInputComponent se usaría aquí -->
          <input formControlName="title" placeholder="Título" class="..."/>
          <input formControlName="subtitle" placeholder="Subtítulo" class="..."/>
          <textarea formControlName="summary" placeholder="Resumen" class="... md:col-span-2"></textarea>
          <input formControlName="githubUrl" placeholder="URL GitHub" class="..."/>
          <input formControlName="linkedinUrl" placeholder="URL LinkedIn" class="..."/>
        </div>
      </fieldset>

      <!-- Sección de Experiencia (FormArray) -->
      <fieldset class="border border-gray-700 p-6 rounded-lg">
        <legend class="text-xl font-semibold text-[#00ffaa] px-2">Experiencia</legend>
        <div formArrayName="experience">
          @for (expGroup of experienceFormArray.controls; track $index) {
            <div [formGroupName]="$index" class="border border-gray-800 p-4 rounded-md mb-4 relative">
              <h4 class="text-lg font-medium text-gray-200 mb-2">Entrada #{{ $index + 1 }}</h4>
              <button type="button" (click)="removeExperience($index)" class="absolute top-4 right-4 text-red-500">Eliminar</button>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input formControlName="role" placeholder="Rol" class="..."/>
                <input formControlName="company" placeholder="Compañía" class="..."/>
                <input formControlName="dates" placeholder="Fechas" class="..."/>
                <!-- Textarea para Logros (simplificado) -->
                <textarea formControlName="achievements" placeholder="Logros (uno por línea)" class="... md:col-span-2"></textarea>
              </div>
            </div>
          }
        </div>
        <ui-button type="button" styleType="secondary" (click)="addExperience()">Añadir Experiencia</ui-button>
      </fieldset>

      <!-- Sección de Proyectos (FormArray) -->
      <fieldset class="border border-gray-700 p-6 rounded-lg">
        <legend class="text-xl font-semibold text-[#00ffaa] px-2">Proyectos</legend>
        <div formArrayName="projects">
          @for (projGroup of projectsFormArray.controls; track $index) {
            <div [formGroupName]="$index" class="border border-gray-800 p-4 rounded-md mb-4 relative">
              <!-- Formulario de Proyecto (similar a Experiencia) -->
               <button type="button" (click)="removeProject($index)" class="absolute top-4 right-4 text-red-500">Eliminar</button>
               <!-- ... campos: title, description, imageUrl, tags (string separado por comas) ... -->
            </div>
          }
        </div>
        <ui-button type="button" styleType="secondary" (click)="addProject()">Añadir Proyecto</ui-button>
      </fieldset>

      <!-- Sección de Habilidades (FormArray) -->
      <!-- ... (similar a Proyectos/Experiencia) ... -->

    </form>
  `,
  changeDetection: 0 // OnPush
})
export class AdminDashboardComponent {
  dataService = inject(DataService);
  fb = inject(FormBuilder);
  mainForm: FormGroup;
  saveSuccess = signal(false);

  constructor() {
    const data = this.dataService.getFullData();
    this.mainForm = this.fb.group({
      profile: this.fb.group({
        title: [data.profile.title],
        subtitle: [data.profile.subtitle],
        summary: [data.profile.summary],
        githubUrl: [data.profile.githubUrl],
        linkedinUrl: [data.profile.linkedinUrl],
        email: [data.profile.email],
      }),
      experience: this.fb.array(data.experience.map(this.createExperienceGroup)),
      projects: this.fb.array(data.projects.map(this.createProjectGroup)),
      skills: this.fb.array(data.skills.map(this.createSkillGroup)),
      settings: this.fb.group({
        theme: [data.settings.theme]
      })
    });
  }

  // --- Getters para FormArrays ---
  get experienceFormArray() { return this.mainForm.get('experience') as FormArray; }
  get projectsFormArray() { return this.mainForm.get('projects') as FormArray; }
  get skillsFormArray() { return this.mainForm.get('skills') as FormArray; }

  // --- Creadores de Grupos ---
  createExperienceGroup = (exp: ExperienceEntry) => this.fb.group({ ...exp, achievements: [exp.achievements.join('\n')] });
  createProjectGroup = (proj: ProjectEntry) => this.fb.group({ ...proj, tags: [proj.tags.join(', ')] });
  createSkillGroup = (skill: SkillEntry) => this.fb.group({ ...skill });

  // --- Métodos de Añadir/Eliminar ---
  addExperience() { /* ... */ }
  removeExperience(index: number) { /* ... */ }
  addProject() { /* ... */ }
  removeProject(index: number) { /* ... */ }

  // --- Métodos de Guardado/Reseteo ---
  onSave() {
    const formValue = this.mainForm.value;
    // Re-procesar strings (ej. tags, achievements) a arrays
    const cleanData = this.cleanFormData(formValue);

    this.dataService.updateFullData(cleanData);
    this.saveSuccess.set(true);
    setTimeout(() => this.saveSuccess.set(false), 2000);
  }
  onReset() {
    this.dataService.resetToDefault();
    this.mainForm.patchValue(this.dataService.getFullData());
    // ... (re-parchear FormArrays)
  }
  cleanFormData(data: any): PortfolioData { /* ... */ return data; }
}
6.6. Raíz (src/app/app.component.ts)src/app/app.component.tsRuta: src/app/app.component.tsPropósito: El componente raíz, orquestador de enrutamiento principal.Lógica Detallada:// Imports: Component, ChangeDetectionStrategy, inject, signal, CommonModule, AuthService, ThemeService, PublicLayoutComponent, LoginComponent, AdminLayoutComponent, OnInit, OnDestroy
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PublicLayoutComponent, LoginComponent, AdminLayoutVponent],
  template: `
    <!-- 
      NOTA DE PRODUCCIÓN: 
      Estos scripts y configuraciones deben ser añadidos a 'angular.json' y 'index.html'
      en un proyecto real de Angular CLI. Se incluyen aquí para que el prompt
      funcione sin intervención humana.
    -->
    <script src="[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)"></script>
    <script src="[https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js](https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js)"></script>
    <script>
      tailwind.config = {
        darkMode: 'class',
        theme: {
          extend: {
            colors: {
              'neon': '#00ffaa',
            },
            fontFamily: {
              sans: ['Inter', 'Manrope', 'sans-serif'],
            }
          }
        }
      }
    </script>

    <!-- Lógica de Enrutamiento Mock Principal -->
    @if (currentPath() === '/admin') {
      @if (isAuthenticated()) {
        <app-admin-layout />
      } @else {
        <app-login />
      }
    } @else {
      <app-public-layout />
    }
  `,
  changeDetection: 0 // OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  authService = inject(AuthService);
  themeService = inject(ThemeService); // Inyectar para inicializar el efecto del tema

  isAuthenticated = this.authService.isAuthenticated; // Signal read-only
  currentPath = signal(window.location.pathname);

  private popstateListener = () => this.currentPath.set(window.location.pathname);

  ngOnInit() {
    // Escuchar cambios en la URL (botones atrás/adelante)
    window.addEventListener('popstate', this.popstateListener);

    // Simular navegación (para que el usuario pueda escribir /admin en la URL)
    // En un proyecto real, esto sería manejado por Angular Router
    const path = window.location.pathname;
    if (path !== this.currentPath()) {
      this.currentPath.set(path);
    }
  }

  ngOnDestroy() {
    window.removeEventListener('popstate', this.popstateListener);
  }
}
