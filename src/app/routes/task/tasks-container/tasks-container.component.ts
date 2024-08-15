import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tasks-container',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>tasks-container works!</p>`,
  styleUrl: './tasks-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksContainerComponent { }
