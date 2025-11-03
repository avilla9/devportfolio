import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { DataService } from '../../../core/services/data.service';
import { UiButtonComponent } from '../../../shared/ui/ui-button/ui-button.component';
import { UiInputComponent } from '../../../shared/ui/ui-input/ui-input.component';
import { PortfolioData, ExperienceEntry, ProjectEntry, SkillEntry } from '../../../core/interfaces/portfolio.model';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, UiButtonComponent, UiInputComponent],
  template: `
    <h2 class="text-4xl font-bold font-manrope text-gray-100 mb-8" i18n="@@adminDashboardTitle">
      Mock CMS Dashboard
    </h2>
    <p class="text-gray-400 mb-4" i18n="@@adminDashboardPersistenceWarning">
      Los cambios guardados aquí solo afectan el estado en memoria. 
      **No persistirán** después de recargar la página.
    </p>

    <form [formGroup]="mainForm" (ngSubmit)="onSave()" class="space-y-12">

      <!-- Botones de Acción Flotantes -->
      <div class="sticky top-0 z-10 bg-gray-950/80 backdrop-blur-sm p-4 -mx-8 -mt-8 mb-8 flex gap-4">
        <ui-button type="submit" i18n="@@adminDashboardSaveChanges">Guardar Cambios (en Memoria)</ui-button>
        <ui-button type="button" styleType="secondary" (click)="onReset()" i18n="@@adminDashboardRestoreOriginal">Restaurar Mock Original</ui-button>
        @if (saveSuccess()) {
          <span class="text-[#00ffaa] self-center" i18n="@@adminDashboardSaved">¡Guardado!</span>
        }
      </div>

      <!-- Sección de Perfil -->
      <fieldset class="border border-gray-700 p-6 rounded-lg">
        <legend class="text-xl font-semibold text-[#00ffaa] px-2" i18n="@@adminDashboardProfileSection">Perfil Principal</legend>
        <div formGroupName="profile" class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <ui-input [control]="mainForm.get('profile.title')" i18n-label="@@adminDashboardTitleLabel" label="Título"></ui-input>
          <ui-input [control]="mainForm.get('profile.subtitle')" i18n-label="@@adminDashboardSubtitleLabel" label="Subtítulo"></ui-input>
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-300 mb-1" i18n="@@adminDashboardSummaryLabel">Resumen</label>
            <textarea formControlName="summary" i18n-placeholder="@@adminDashboardSummaryLabel" placeholder="Resumen" class="block w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md shadow-sm focus:border-[#00ffaa] focus:ring-[#00ffaa] sm:text-sm"></textarea>
          </div>
          <ui-input [control]="mainForm.get('profile.githubUrl')" i18n-label="@@adminDashboardGithubUrlLabel" label="URL GitHub"></ui-input>
          <ui-input [control]="mainForm.get('profile.linkedinUrl')" i18n-label="@@adminDashboardLinkedinUrlLabel" label="URL LinkedIn"></ui-input>
        </div>
      </fieldset>

      <!-- Sección de Experiencia (FormArray) -->
      <fieldset class="border border-gray-700 p-6 rounded-lg">
        <legend class="text-xl font-semibold text-[#00ffaa] px-2" i18n="@@adminDashboardExperienceSection">Experiencia</legend>
        <div formArrayName="experience">
          @for (expGroup of experienceFormArray.controls; track $index) {
            <div [formGroupName]="$index" class="border border-gray-800 p-4 rounded-md mb-4 relative">
              <h4 class="text-lg font-medium text-gray-200 mb-2" i18n="@@adminDashboardEntryNumber">Entrada #{{ $index + 1 }}</h4>
              <button type="button" (click)="removeExperience($index)" class="absolute top-4 right-4 text-red-500" i18n="@@adminDashboardDelete">Eliminar</button>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ui-input [control]="expGroup.get('role')" i18n-label="@@adminDashboardRoleLabel" label="Rol"></ui-input>
                <ui-input [control]="expGroup.get('company')" i18n-label="@@adminDashboardCompanyLabel" label="Compañía"></ui-input>
                <ui-input [control]="expGroup.get('dates')" i18n-label="@@adminDashboardDatesLabel" label="Fechas"></ui-input>
                <div class="md:col-span-2">
                  <label class="block text-sm font-medium text-gray-300 mb-1" i18n="@@adminDashboardAchievementsLabel">Logros (uno por línea)</label>
                  <textarea formControlName="achievements" i18n-placeholder="@@adminDashboardAchievementsLabel" placeholder="Logros (uno por línea)" class="block w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md shadow-sm focus:border-[#00ffaa] focus:ring-[#00ffaa] sm:text-sm"></textarea>
                </div>
              </div>
            </div>
          }
        </div>
        <ui-button type="button" styleType="secondary" (click)="addExperience()" i18n="@@adminDashboardAddExperience">Añadir Experiencia</ui-button>
      </fieldset>

      <!-- Sección de Proyectos (FormArray) -->
      <fieldset class="border border-gray-700 p-6 rounded-lg">
        <legend class="text-xl font-semibold text-[#00ffaa] px-2" i18n="@@adminDashboardProjectsSection">Proyectos</legend>
        <div formArrayName="projects">
          @for (projGroup of projectsFormArray.controls; track $index) {
            <div [formGroupName]="$index" class="border border-gray-800 p-4 rounded-md mb-4 relative">
              <button type="button" (click)="removeProject($index)" class="absolute top-4 right-4 text-red-500" i18n="@@adminDashboardDelete">Eliminar</button>
              <ui-input [control]="projGroup.get('title')" i18n-label="@@adminDashboardTitleLabel" label="Título"></ui-input>
              <textarea formControlName="description" i18n-placeholder="@@adminDashboardDescriptionLabel" placeholder="Descripción" class="block w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md shadow-sm focus:border-[#00ffaa] focus:ring-[#00ffaa] sm:text-sm"></textarea>
              <ui-input [control]="projGroup.get('imageUrl')" i18n-label="@@adminDashboardImageUrlLabel" label="URL Imagen"></ui-input>
              <ui-input [control]="projGroup.get('tags')" i18n-label="@@adminDashboardTagsLabel" label="Tags (separados por coma)"></ui-input>
            </div>
          }
        </div>
        <ui-button type="button" styleType="secondary" (click)="addProject()" i18n="@@adminDashboardAddProject">Añadir Proyecto</ui-button>
      </fieldset>

    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
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
  addExperience() { this.experienceFormArray.push(this.createExperienceGroup({id: '', company: '', role: '', dates: '', achievements: []})); }
  removeExperience(index: number) { this.experienceFormArray.removeAt(index); }
  addProject() { this.projectsFormArray.push(this.createProjectGroup({id: '', title: '', description: '', tags: [], imageUrl: ''})); }
  removeProject(index: number) { this.projectsFormArray.removeAt(index); }

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
    const data = this.dataService.getFullData();
    this.mainForm.patchValue(data);
    this.experienceFormArray.clear();
    data.experience.forEach(exp => this.experienceFormArray.push(this.createExperienceGroup(exp)));
    this.projectsFormArray.clear();
    data.projects.forEach(proj => this.projectsFormArray.push(this.createProjectGroup(proj)));
    this.skillsFormArray.clear();
    data.skills.forEach(skill => this.skillsFormArray.push(this.createSkillGroup(skill)));

  }
  cleanFormData(data: any): PortfolioData {
    const cleanExperience = data.experience.map((exp: any) => ({ ...exp, achievements: exp.achievements.split('\n') }));
    const cleanProjects = data.projects.map((proj: any) => ({ ...proj, tags: proj.tags.split(',').map((t:string) => t.trim()) }));
    return { ...data, experience: cleanExperience, projects: cleanProjects };
  }
}