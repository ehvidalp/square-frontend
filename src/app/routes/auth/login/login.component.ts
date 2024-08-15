import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
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
export class LoginComponent { }
