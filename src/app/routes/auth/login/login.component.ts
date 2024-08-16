import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';
import { SquareButtonComponent } from '@shared/ui/square-button/square-button.component';
import { SquareFieldComponent } from '@shared/ui/square-field/square-field.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, SquareFieldComponent, SquareButtonComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  userEmail = signal('');
  messageError = signal('');
  showModal = signal(false);
  authService = inject(AuthService);
  router = inject(Router);
  showModalRegister = signal(false);

  setUserEmail(value: string) {
    this.userEmail.update(() => value);
  }

  onLogin() {
    if (!this.isValidEmail(this.userEmail())) {
      this.messageError.update(() => 'Invalid email');
      return;
    }

    this.messageError.update(() => '');
    this.authService.login(this.userEmail()).subscribe({
      next: () => this.router.navigate(['/tasks']),
      error: err => 
        this.showModalRegister.update(() => err.message === 'showmodal'),
    });
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
