import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { UiButtonComponent } from '../../../shared/ui/ui-button/ui-button.component';
import { UiCardComponent } from '../../../shared/ui/ui-card/ui-card.component';

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
  changeDetection: ChangeDetectionStrategy.OnPush
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
