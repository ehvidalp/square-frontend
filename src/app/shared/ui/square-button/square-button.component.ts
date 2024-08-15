import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-square-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>square-button works!</p>`,
  styleUrl: './square-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SquareButtonComponent { }
