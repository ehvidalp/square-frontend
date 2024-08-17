import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-square-task',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>square-task works!</p>`,
  styleUrl: './square-task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SquareTaskComponent { }
