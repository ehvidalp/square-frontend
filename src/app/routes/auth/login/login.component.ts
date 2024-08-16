import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';
import { SquareButtonComponent } from '@shared/ui/square-button/square-button.component';
import { SquareDialogComponent } from '@shared/ui/square-dialog/square-dialog.component';
import { SquareFieldComponent } from '@shared/ui/square-field/square-field.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, SquareFieldComponent, SquareButtonComponent, SquareDialogComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  userEmail = signal('');
  messageError = signal('');
  showRegisterDialog = computed(() => this.messageError() === 'user not found');
  
  

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
      error: err => this.messageError.update(() => err),
    });
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
