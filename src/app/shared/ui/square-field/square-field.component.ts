import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-square-field',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>square-field works!</p>`,
  styleUrl: './square-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SquareFieldComponent { }
