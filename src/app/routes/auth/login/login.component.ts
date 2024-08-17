import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';
import { StateService } from '@shared/services/state.service';
import { SquareButtonComponent } from '@shared/ui/square-button/square-button.component';
import { SquareDialogComponent } from '@shared/ui/square-dialog/square-dialog.component';
import { SquareFieldComponent } from '@shared/ui/square-field/square-field.component';

interface RegisterUser {
  email: string;
  name: string;
}

interface LoginUser {
  email: string;
  errorUserEmail?: boolean;
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, SquareFieldComponent, SquareButtonComponent, SquareDialogComponent, FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private stateService = inject(StateService);

  loginUser = signal<LoginUser>({ email: ''});
  registerUser = signal<RegisterUser>({ email: '', name: '' });
  registerUserErrors = signal<string[]>([]);
  disabledRegisterButton = computed(() => this.registerUserErrors().length > 0 || !this.registerUser().name || !this.registerUser().email);
  messageError = signal('');
  showRegisterDialog = computed(() => this.messageError() === 'user not found');
  
  onLogin() {
    const { email, errorUserEmail = false } = this.loginUser();

    if(errorUserEmail || !email) return;

    this.authService.login(email).subscribe({
      next: () => this.goToTasks(email),
      error: err => this.messageError.update(() => err),
    });
  }

  onRegister() {
    const { email, name } = this.registerUser();
    this.authService.register({ email, name}).subscribe({
      next: () => this.goToTasks(email),
      error: err => this.messageError.update(() => err),
    });
  }

  setErrorUserEmail(errorUserEmail: boolean) {
    this.loginUser.update(user => ({ ...user, errorUserEmail }));
  }

  setRegisterUserErrors(key: string, error: boolean) {
    if (error) {
      this.registerUserErrors.update(errors => [...errors, key]);
      return;
    }

    this.registerUserErrors.update(errors => errors.filter(error => error !== key));
  }

  goToTasks(email: string) {
    this.stateService.setEmail(email);
    this.router.navigate(['/tasks']);
  }
  
}
