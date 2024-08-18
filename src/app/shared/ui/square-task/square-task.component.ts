import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SquareButtonComponent } from '../square-button/square-button.component';
import { Task } from '@shared/interfaces/task.interface';

@Component({
  selector: 'app-square-task',
  standalone: true,
  imports: [
    CommonModule, SquareButtonComponent
  ],
  templateUrl: './square-task.component.html',
  styleUrl: './square-task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SquareTaskComponent { 
  @Input() task: Task | null = null;
  @Output() action = new EventEmitter<'edit'>();
}
