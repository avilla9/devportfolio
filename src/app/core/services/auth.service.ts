import { Injectable, signal } from '@angular/core';

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
